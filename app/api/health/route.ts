import { NextResponse } from 'next/server';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export const dynamic = 'force-dynamic';

interface HealthCheckResponse {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  uptime: number;
  build: {
    timestamp?: string;
    commit?: string;
    branch?: string;
    version: string;
  };
  dependencies: Record<string, string>;
  environment: string;
}

export async function GET() {
  try {
    // Read package.json for version and dependencies
    const packageJsonPath = join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

    // Read deployment info if available
    let deploymentInfo: any = {};
    const deploymentInfoPath = join(process.cwd(), 'deployment-info.json');
    if (existsSync(deploymentInfoPath)) {
      try {
        deploymentInfo = JSON.parse(readFileSync(deploymentInfoPath, 'utf-8'));
      } catch (e) {
        // Ignore if can't read deployment info
      }
    }

    // Build response
    const response: HealthCheckResponse = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      build: {
        timestamp: deploymentInfo.timestamp,
        commit: deploymentInfo.commit,
        branch: deploymentInfo.branch,
        version: packageJson.version,
      },
      dependencies: {
        next: packageJson.dependencies.next,
        react: packageJson.dependencies.react,
        tailwindcss: packageJson.devDependencies.tailwindcss,
        viem: packageJson.dependencies.viem,
        wagmi: packageJson.dependencies.wagmi,
      },
      environment: process.env.NODE_ENV || 'development',
    };

    return NextResponse.json(response, {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  } catch (error) {
    // Return unhealthy status if there's an error
    const errorResponse: HealthCheckResponse = {
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      build: {
        version: 'unknown',
      },
      dependencies: {},
      environment: process.env.NODE_ENV || 'development',
    };

    return NextResponse.json(errorResponse, {
      status: 503,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  }
}
