import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  content: string;
}

async function Page() {
  const res = await fetch('https://api.vercel.app/blog', {
    next: { revalidate: 60 },
  });
  return res.json();
}

const Posts = async () => {
  const posts: Post[] = await Page();

  return (
      <div>
        <h1>لیست مقالات</h1>
        {posts.map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <div className="bg-white drop-shadow-lg rounded-lg p-2 m-4 cursor-pointer">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </div>
            </Link>
        ))}
      </div>
  );
};

export default Posts;
