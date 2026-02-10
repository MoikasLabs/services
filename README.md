# Shalom Services

Premium AI-powered services with instant crypto payments on Base Network.
Powered by [OpenFacilitator](https://pay.openfacilitator.io) x402 payment protocol.

## Features

- **AI Research** - Pay-per-use AI research with instant results
- **Moltlaunch Scanner** - Real-time agent network analysis
- **Analytics** - Advanced data visualization and insights
- **Consulting** - Expert AI consulting sessions

## Payment Options

We support three payment tokens with a 10% discount for ecosystem tokens:

| Service | USDC (Base) | DRAKIN | KOBOLDS |
|---------|-------------|--------|---------|
| AI Research | $0.01 | 1,000 | 1,000 |
| Moltlaunch Scanner | $0.05 | 5,000 | 5,000 |
| Analytics | $0.05 | 5,000 | 5,000 |
| Consulting | $0.25 | 25,000 | 25,000 |
| Security Audit | $0.10 | 10,000 | 10,000 |
| Vault Setup | $0.05 | 5,000 | 5,000 |

**Token Contract Addresses (Base Mainnet):**
- USDC: `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`
- DRAKIN: `0xd8ba99F5bef09561ad9510ec67d9D17A3d2e238F`
- KOBOLDS: `0x8a6d3bb6091ea0dd8b1b87c915041708d11f9d3a`

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Wallet with Base network support (MetaMask, Rainbow, Coinbase Wallet)

### Installation

```bash
npm install
```

### Environment Setup

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required environment variables:

- `NEXT_PUBLIC_FACILITATOR_URL` - OpenFacilitator endpoint (default: https://pay.openfacilitator.io)
- `OPENFACILITATOR_API_KEY` - Your API key from OpenFacilitator
- `NEXT_PUBLIC_TREASURY_ADDRESS` - Address to receive payments

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

## Architecture

### Payment Flow

1. User selects a service and token (USDC, DRAKIN, or KOBOLDS)
2. Client creates payment requirements using OpenFacilitator SDK
3. User signs EIP-3009 authorization in wallet
4. Client submits authorization to backend API
5. Backend verifies payment with OpenFacilitator
6. OpenFacilitator settles transaction on Base
7. Service is delivered to user
8. Refund protection ensures failed services trigger automatic refunds

### Key Components

- **OpenFacilitator SDK** (`@openfacilitator/sdk`) - Handles x402 payment verification and settlement
- **TokenSelector** - UI component for selecting payment token
- **X402Payment** - Payment button with status and error handling
- **Payment API Route** (`/api/payment/process`) - Server-side payment processing

### Refund Protection

OpenFacilitator's refund protection ensures users are automatically refunded if:
- Service processing fails after payment
- Timeout occurs during service delivery
- Error is thrown in the service handler

To enable, set `OPENFACILITATOR_API_KEY` in environment variables.

## Token Pricing Strategy

Token prices are set based on approximate USD value with a 10% discount for using ecosystem tokens (DRAKIN/KOBOLDS).

Prices are reviewed monthly and updated if market values shift more than 20%.

### Current Rates

- **USDC**: Base price (1 USDC = $1.00)
- **DRAKIN**: 1,000 tokens ≈ $0.009 (10% discount)
- **KOBOLDS**: 1,000 tokens ≈ $0.009 (10% discount)

## Migration from Self-Hosted x402

Previous versions used a self-hosted facilitator at `localhost:8404`. We've migrated to OpenFacilitator for:

- Better reliability and uptime
- Automatic refund protection
- Multi-tenant support
- No infrastructure maintenance

## License

MIT

## Links

- [OpenFacilitator Documentation](https://docs.openfacilitator.io)
- [x402 Protocol Spec](https://github.com/coinbase/x402)
- [Base Network](https://base.org)
