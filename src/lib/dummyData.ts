export const DUMMY_AUTHOR = {
  name: "Kuldeep Singh Bisht",
  avatar: "https://ui-avatars.com/api/?name=Kuldeep+Bisht&background=0D8ABC&color=fff",
  role: "AI Systems Architect",
};

export const DUMMY_POSTS = [
  {
    id: "building-ai-systems",
    slug: "building-ai-systems",
    title: "Building Scalable AI Systems for the Enterprise",
    excerpt: "A deep dive into the architecture and challenges of deploying large language models in production environments. From RAG to gateway patterns, here is what you need to know.",
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["Artificial Intelligence", "System Design", "Enterprise"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop",
    content: `
When it comes to deploying Artificial Intelligence in a large enterprise, the challenges shift dramatically from simply making a model work to making it work **reliably**, **securely**, and **at scale**.

In this post, we'll explore some of the fundamental architectures that make enterprise AI possible.

## The Shift from Prototype to Production

In a sandbox environment, you might load a model into memory, wrap it in a simple Flask or FastAPI app, and call it a day. But in the enterprise, you have to account for:

- **High Availability**: What happens if the GPU node crashes?
- **Latency constraints**: Can the system respond within 500ms under heavy load?
- **Data Privacy**: Is sensitive customer data being filtered before it hits the model?

### Architectural Patterns

Here are the most common patterns we see today:

#### 1. The Gateway Pattern
All AI requests pass through a central gateway that handles authentication, rate limiting, and basic PII (Personally Identifiable Information) scrubbing.

\`\`\`python
# A simple example of a gateway middleware
async def ai_gateway(request, call_next):
    user_token = request.headers.get('Authorization')
    if not is_valid(user_token):
        return JSONResponse(status_code=401, content={"message": "Unauthorized"})
        
    # Scrub PII
    cleaned_body = scrub_pii(await request.json())
    
    # Forward to model
    response = await call_model_api(cleaned_body)
    return response
\`\`\`

#### 2. RAG (Retrieval-Augmented Generation)
Models hallucinate. The best way to ground them is by injecting factual, domain-specific context into the prompt at runtime.

> RAG bridges the gap between the model's frozen knowledge and your company's real-time data.

## Conclusion

Building AI systems isn't just about the models anymore; it's about the robust engineering ecosystem that surrounds them. As we continue to push the boundaries of what's possible, focusing on architecture will be the key differentiator between a cool demo and a transformational product.
    `,
  },
  {
    id: "fine-tuning-llms",
    slug: "fine-tuning-llms",
    title: "The Art of Fine-Tuning LLMs on Custom Data",
    excerpt: "Why prompt engineering isn't always enough, and how LoRA and QLoRA are democratizing model fine-tuning for smaller teams.",
    date: "2024-02-28",
    readTime: "12 min read",
    tags: ["Machine Learning", "LLMs", "Tutorial"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    content: "Content for fine tuning...",
  },
  {
    id: "future-of-agents",
    slug: "future-of-agents",
    title: "Autonomous Agents: The Next Frontier",
    excerpt: "An analysis of how multi-agent systems will replace traditional software workflows in the next 5 years.",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["Future", "AI Agents", "Opinion"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1600&auto=format&fit=crop",
    content: "Content for agents...",
  },
  {
    id: "understanding-rag",
    slug: "understanding-rag",
    title: "Understanding RAG: Retrieval-Augmented Generation",
    excerpt: "A comprehensive guide to understanding how RAG architectures reduce hallucinations and ground LLMs in factual data.",
    date: "2023-12-05",
    readTime: "10 min read",
    tags: ["RAG", "LLMs", "Architecture"],
    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=1600&auto=format&fit=crop",
    content: "Content for understanding RAG...",
  },
  {
    id: "vector-databases",
    slug: "vector-databases",
    title: "The Rise of Vector Databases",
    excerpt: "Why traditional relational databases struggle with semantic search, and how vector databases like Pinecone and Weaviate solve the problem.",
    date: "2023-11-20",
    readTime: "7 min read",
    tags: ["Databases", "Vectors", "Data Engineering"],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1600&auto=format&fit=crop",
    content: "Content for vector databases...",
  },
  {
    id: "design-patterns-ai",
    slug: "design-patterns-ai",
    title: "Design Patterns for AI Applications",
    excerpt: "Exploring common design patterns for integrating machine learning models into traditional software engineering ecosystems.",
    date: "2023-10-14",
    readTime: "9 min read",
    tags: ["Software Engineering", "Design Patterns", "AI"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    content: "Content for design patterns...",
  }
];
