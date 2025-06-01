import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PostPage({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

  if (!res.ok) {
    return notFound(); 
  }

  const post = await res.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg text-gray-700">{post.body}</p>
      <Link href="/Posts" className="text-blue-500 mt-4">← Volver a la lista</Link>
    </div>
  );
}
