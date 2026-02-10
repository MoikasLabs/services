/**
 * Payment Processing API Route
 * Handles x402 payment verification and processing via OpenFacilitator
 *
 * This is a server-side route that:
 * 1. Receives payment requests from the client
 * 2. Verifies the payment with OpenFacilitator
 * 3. Processes the service request
 * 4. Handles refund protection if service fails
 */

// Required for static export with API routes
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import {
  facilitator,
  createPaymentRequirements,
  withRefundProtection,
  type PaymentContext,
  FACILITATOR_URL,
} from '@/app/lib/openfacilitator';

// Refund protection API key (set in environment variables)
const REFUND_API_KEY = process.env.OPENFACILITATOR_API_KEY;

// Service types supported by this app
type ServiceType =
  | 'ai-research'
  | 'analytics'
  | 'consulting'
  | 'security-audit'
  | 'vault-setup';

// Token symbols supported
type TokenSymbol = 'USDC' | 'DRAKIN' | 'KOBOLDS';

interface PaymentRequest {
  service: ServiceType;
  token: TokenSymbol;
  amount: string;
  asset: string;
  payer: string;
  network: string;
  query?: string;
  // Full payment payload from x402
  paymentPayload?:
    | {
        x402Version: 1;
        scheme: string;
        network: string;
        payload: {
          signature: string;
          authorization: {
            from: string;
            to: string;
            amount: string;
            asset: string;
            nonce?: string;
            validUntil?: number;
          };
        };
      }
    | {
        x402Version: 2;
        accepted: {
          scheme: string;
          network: string;
          asset: string;
          amount: string;
          payTo: string;
          maxTimeoutSeconds: number;
        };
        payload: Record<string, unknown>;
      };
}

// Process the service request (this would call your actual AI services)
async function processService(
  context: PaymentContext,
  service: ServiceType,
  query?: string
): Promise<unknown> {
  console.log(`Processing ${service} for ${context.userWallet}`, {
    transactionHash: context.transactionHash,
    amount: context.amount,
    asset: context.asset,
  });

  // Route to appropriate service
  switch (service) {
    case 'ai-research':
      // Call AI research service
      return {
        status: 'completed',
        service,
        query,
        message: 'Research results would be generated here',
      };

    case 'analytics':
      return {
        status: 'completed',
        service,
        message: 'Analytics service results',
      };

    case 'consulting':
      return {
        status: 'scheduled',
        service,
        message: 'Consulting session scheduled',
      };

    case 'security-audit':
      return {
        status: 'queued',
        service,
        message: 'Security audit request queued',
      };

    case 'vault-setup':
      return {
        status: 'ready',
        service,
        message: 'Vault setup guide ready',
      };

    default:
      throw new Error(`Unknown service: ${service}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: PaymentRequest = await request.json();
    const { service, token, amount, asset, payer, network, paymentPayload, query } = body;

    // Validate required fields
    if (!service || !token || !amount || !asset || !payer) {
      return NextResponse.json(
        { error: 'Missing required fields: service, token, amount, asset, payer' },
        { status: 400 }
      );
    }

    // Create payment requirements for verification
    const requirements = createPaymentRequirements(service, token);

    // If we have a full payment payload, verify and settle with OpenFacilitator
    if (paymentPayload) {
      console.log('Verifying payment with OpenFacilitator...');

      // Verify the payment
      const verifyResult = await facilitator.verify(paymentPayload, requirements);

      if (!verifyResult.isValid) {
        console.error('Payment verification failed:', verifyResult.invalidReason);
        return NextResponse.json(
          { error: `Payment verification failed: ${verifyResult.invalidReason}` },
          { status: 402 }
        );
      }

      // Settle the payment
      console.log('Settling payment...');
      const settleResult = await facilitator.settle(paymentPayload, requirements);

      if (!settleResult.success) {
        console.error('Payment settlement failed:', settleResult.errorReason);
        return NextResponse.json(
          { error: `Payment settlement failed: ${settleResult.errorReason}` },
          { status: 402 }
        );
      }

      console.log('Payment settled:', settleResult.transaction);

      // Build payment context for service processing
      const paymentContext: PaymentContext = {
        transactionHash: settleResult.transaction,
        userWallet: settleResult.payer,
        amount:
          paymentPayload.x402Version === 1
            ? paymentPayload.payload.authorization.amount
            : paymentPayload.accepted?.amount || amount,
        asset:
          paymentPayload.x402Version === 1
            ? paymentPayload.payload.authorization.asset
            : paymentPayload.accepted?.asset || asset,
        network: settleResult.network,
      };

      // Process the service with refund protection if API key is configured
      if (REFUND_API_KEY) {
        const protectedProcessor = withRefundProtection(
          {
            apiKey: REFUND_API_KEY,
            facilitatorUrl: FACILITATOR_URL,
            onReport: (claimId, error) => {
              console.log('Failure reported:', claimId, error.message);
            },
            onReportError: (reportError, originalError) => {
              console.error('Failed to report failure:', reportError.message);
            },
          },
          async (context: PaymentContext) => {
            const result = await processService(context, service, query);
            return result;
          }
        );

        const serviceResult = await protectedProcessor(paymentContext);

        return NextResponse.json({
          success: true,
          transactionHash: settleResult.transaction,
          payer: settleResult.payer,
          network: settleResult.network,
          service,
          token,
          result: serviceResult,
          refundProtected: true,
        });
      }

      // Without refund protection, just process the service
      const serviceResult = await processService(paymentContext, service, query);

      return NextResponse.json({
        success: true,
        transactionHash: settleResult.transaction,
        payer: settleResult.payer,
        network: settleResult.network,
        service,
        token,
        result: serviceResult,
      });
    }

    // For demo/development without full x402 flow
    // In production, the client should provide the full paymentPayload
    console.log('Demo mode: Simulating payment processing...');

    // Simulate a transaction hash
    const simulatedTxHash = `0x${Array.from(crypto.getRandomValues(new Uint8Array(32)))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')}`;

    const paymentContext: PaymentContext = {
      transactionHash: simulatedTxHash,
      userWallet: payer,
      amount,
      asset,
      network: network || 'eip155:8453',
    };

    const serviceResult = await processService(paymentContext, service, query);

    return NextResponse.json({
      success: true,
      transactionHash: simulatedTxHash,
      payer,
      network: network || 'eip155:8453',
      service,
      token,
      result: serviceResult,
      demo: true,
    });
  } catch (error) {
    console.error('Payment processing error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  try {
    // Check facilitator health
    const isHealthy = await facilitator.health();

    return NextResponse.json({
      status: isHealthy ? 'healthy' : 'degraded',
      facilitator: FACILITATOR_URL,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Facilitator health check failed' },
      { status: 503 }
    );
  }
}
