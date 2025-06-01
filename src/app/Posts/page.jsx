
import Link from "next/link";

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/Posts", {
    next: { revalidate: 60 },
    cache: "default",
  });
  const posts = await res.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="space-y-4">
        {posts.map(Posts => (
          <li key={Posts.id} className="p-4 border rounded shadow-sm">
            <h2 className="text-xl font-semibold">{Posts.title}</h2>
            <p className="mt-2">{Posts.body.substring(0, 100)}...</p>
            <Link href={`/Posts/${Posts.id}`} className="text-blue-500 mt-2">
              Leer más →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}