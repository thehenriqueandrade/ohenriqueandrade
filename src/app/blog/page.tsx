import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

function getPosts() {
  const postsDir = path.join(process.cwd(), "src/content/posts");
  const files = fs.readdirSync(postsDir);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
      const { data } = matter(raw);
      return { slug: file.replace(".mdx", ""), ...data } as {
        slug: string;
        title: string;
        date: string;
        excerpt: string;
        category: string;
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default function BlogPage() {
  const posts = getPosts();
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <p className="text-gray-500 mb-10">
        Minha visão sobre tráfego pago, Meta Ads e automação com IA.
      </p>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group border border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors"
          >
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
              {post.category}
            </span>
            <h2 className="text-lg font-bold mt-1 mb-2 group-hover:text-blue-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">{post.excerpt}</p>
            <p className="text-xs text-gray-400 mt-3">{post.date}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
