import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // The last message is the user's prompt
    const userMessage = messages[messages.length - 1];
    
    // Create a generic response based on some simple logic for demonstration
    let responseText = "I am a mock AI assistant for Kuldeep. ";
    
    if (userMessage.content.toLowerCase().includes('experience') || userMessage.content.toLowerCase().includes('work')) {
      responseText = "Kuldeep is an AI/ML Engineer with extensive experience in PyTorch, MLOps, and scalable systems. He has worked on various projects integrating large language models and computer vision pipelines into production.";
    } else if (userMessage.content.toLowerCase().includes('skills') || userMessage.content.toLowerCase().includes('tech')) {
      responseText = "His technical stack includes PyTorch, Python, React, Next.js, and a strong foundation in cloud deployment and MLOps principles.";
    } else {
      responseText = "That's an interesting question! Once my backend is fully connected, I'll be able to tell you all about Kuldeep's background, projects, and AI insights.";
    }

    // Convert the string into a ReadableStream to simulate streaming
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        // Simulate a small initial delay
        await new Promise((resolve) => setTimeout(resolve, 500));
        
        // Split the response into words and stream them one by one
        const words = responseText.split(' ');
        for (let i = 0; i < words.length; i++) {
          const chunk = words[i] + ' ';
          controller.enqueue(encoder.encode(chunk));
          // Simulate typing delay
          await new Promise((resolve) => setTimeout(resolve, 50));
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
      },
    });
  } catch (error) {
    console.error('Mock Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}
