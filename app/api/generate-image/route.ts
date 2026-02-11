import { NextRequest, NextResponse } from 'next/server';
import { fal } from '@fal-ai/client';

const FAL_API_KEY = process.env.FAL_API_KEY;

if (FAL_API_KEY) {
  fal.config({
    credentials: FAL_API_KEY,
  });
}

interface GenerateRequest {
  prompt: string;
  model: 'nano-banana' | 'nano-banana-pro';
  image_size?: 'square' | 'portrait' | 'landscape' | 'square_hd';
  num_images?: number;
  seed?: number;
  is4k?: boolean;
}

export async function POST(request: NextRequest) {
  if (!FAL_API_KEY) {
    return NextResponse.json(
      { error: 'FAL_API_KEY not configured' },
      { status: 500 }
    );
  }

  let body: GenerateRequest;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }

  const { prompt, model, image_size = 'square', seed, is4k } = body;

  if (!prompt?.trim()) {
    return NextResponse.json(
      { error: 'Prompt is required' },
      { status: 400 }
    );
  }

  const modelMap: Record<string, string> = {
    'nano-banana': 'fal-ai/nano-banana',
    'nano-banana-pro': 'fal-ai/nano-banana-pro',
  };

  const modelId = modelMap[model] || 'fal-ai/nano-banana';

  try {
    const input: any = {
      prompt: prompt.trim(),
      image_size,
      num_images: 1,
    };

    if (seed) {
      input.seed = seed;
    }

    // For 4K, use larger dimensions
    if (is4k) {
      input.image_size = 'square_hd'; // 1440x1440 as base for 4K upscaling
    }

    const result = await fal.subscribe(modelId, {
      input,
      logs: true,
      onQueueUpdate: (update) => {
        if (update.status === 'IN_PROGRESS') {
          console.log('Fal.ai generation in progress...');
        }
      },
    });

    return NextResponse.json(result.data);
  } catch (error) {
    console.error('Fal.ai generation error:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Image generation failed',
      },
      { status: 500 }
    );
  }
}
