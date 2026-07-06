import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { getBlogPosts, getPostBySlug } from '@/lib/blog';
import { DUMMY_AUTHOR } from '@/lib/dummyData';

export function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} - KSBisht`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // if (process.env.NODE_ENV === 'production') {
  //   notFound();
  // }

  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <article className="max-w-4xl mx-auto px-5 sm:px-8 py-12 lg:py-20 font-sans">

        {/* Post Header */}
        <header className="mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-black/50 hover:text-black transition-colors mb-8"
          >
            <span aria-hidden="true">&larr;</span>
            Back to blog
          </Link>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6 leading-[1.15]">
            {post.title}
          </h1>
          <p className="text-xl text-black/60 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author Block */}
          <div className="flex items-center gap-4 py-6 border-y border-black/10">
            <img src={DUMMY_AUTHOR.avatar} alt={DUMMY_AUTHOR.name} className="w-12 h-12 rounded-full" />
            <div className="flex-1">
              <p className="text-base font-semibold text-black">{DUMMY_AUTHOR.name}</p>
              <div className="flex items-center gap-2 text-sm text-black/50 mt-0.5">
                <span>{post.readTime}</span>
                <span>•</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </div>
            </div>
            {/* Social Actions Placeholder */}
            <div className="flex items-center gap-3 text-black/40">
              <button className="hover:text-black transition">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
              </button>
              <button className="hover:text-black transition">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <figure className="mb-14 -mx-5 sm:mx-0">
          <div className="aspect-[21/9] w-full bg-black/5 sm:rounded-2xl overflow-hidden">
            <img src={post.image} alt="Hero" className="w-full h-full object-cover" />
          </div>
        </figure>

        {/* Content */}
        <div className="prose prose-neutral lg:prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-xl">
          <MDXRemote source={post.content} />
        </div>

        {/* Footer Tags */}
        <div className="mt-16 flex flex-wrap gap-2 pt-8 border-t border-black/10">
          {post.tags.map(tag => (
            <span key={tag} className="px-4 py-2 rounded-full bg-black/5 text-sm font-medium text-black/70">
              {tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}
