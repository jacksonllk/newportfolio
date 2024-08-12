import { getPost, getAllPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import path from "path";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getAllPosts(path.join(process.cwd(), "content"));
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <h1>{post.metadata.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.source }} />
    </article>
  );
}