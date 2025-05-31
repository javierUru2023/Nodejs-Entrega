
export default async function PostsPage() {{

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: { revalidate: 60 }, 
        cache: "default" 
    });

    const posts = await res.json();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            <ul className="space-y-4">
                {posts.map(post => (
                    <li key={post.id} className="p-4 border rounded shadow-sm">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="mt-2">{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>     
    )
}   
}