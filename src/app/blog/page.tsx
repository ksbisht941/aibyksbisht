import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPosts } from '@/lib/blog';
import { DUMMY_AUTHOR } from '@/lib/dummyData';

export const metadata = {
  title: 'Blog - KSBisht',
  description: 'Writings on AI, enterprise systems, and software engineering.',
};

export default function BlogIndex() {
  if (process.env.NODE_ENV === 'production') {
    notFound();
  }

  const posts = getBlogPosts();

  if (!posts || posts.length === 0) {
    return (
      <div className="py-10 lg:py-16 max-w-4xl mx-auto px-5 sm:px-0 font-sans">
        <div className="mb-16 border-b border-black/10 pb-10">
          <h1 className="text-5xl font-bold tracking-tight text-black mb-4">
            The Blog
          </h1>
          <p className="text-xl text-black/60">
            Thoughts, experiments, and deep dives into AI and systems architecture.
          </p>
        </div>
        <div className="text-center py-20 text-black/50">
          <p className="text-lg">No posts yet. Check back soon!</p>
        </div>
      </div>
    );
  }

  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

  return (
    <div className="py-10 lg:py-16 max-w-4xl mx-auto px-5 sm:px-0 font-sans">

      {/* Header */}
      <div className="mb-16 border-b border-black/10 pb-10">
        <h1 className="text-5xl font-bold tracking-tight text-black mb-4">
          The Blog
        </h1>
        <p className="text-xl text-black/60">
          Thoughts, experiments, and deep dives into AI and systems architecture.
        </p>
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Featured Post */}
        <div className="w-full md:w-2/3">
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-black/5">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-black/60 mb-3">
              <span className="font-semibold text-blue-600">{featuredPost.tags[0]}</span>
              <span>•</span>
              <span>{featuredPost.readTime}</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-3 text-black group-hover:text-blue-600 transition-colors">
              {featuredPost.title}
            </h2>
            <p className="text-lg text-black/60 line-clamp-3 mb-6">
              {featuredPost.excerpt}
            </p>

            <div className="flex items-center gap-3">
              <img src={DUMMY_AUTHOR.avatar} alt={DUMMY_AUTHOR.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-sm font-medium text-black">{DUMMY_AUTHOR.name}</p>
                <p className="text-xs text-black/50">{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Posts */}
        <div className="w-full md:w-1/3 flex flex-col gap-8 md:pl-8 md:border-l border-black/10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-black/40">Recent Posts</h3>
          {recentPosts.map((post) => (
            <div key={post.slug} className="group/item flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-black/50">
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
              </div>
              <h4 className="text-lg font-bold leading-tight text-black group-hover/item:text-blue-600 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {/* <span className="absolute inset-0 z-10" /> */}
                  {post.title}
                </Link>
              </h4>
              <p className="text-sm text-black/60 line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
