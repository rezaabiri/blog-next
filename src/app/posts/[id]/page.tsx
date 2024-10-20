import { notFound } from 'next/navigation';

interface Post {
    id: string;
    title: string;
    content: string;
}

async function getPost(id: string) {
    const res = await fetch(`https://api.vercel.app/blog/${id}`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        notFound();
    }

    return res.json();
}
export async function generateStaticParams() {
    const res = await fetch('https://api.vercel.app/blog');
    const posts: Post[] = await res.json();

    return posts.map((post) => ({
        id: post.id.toString(),
    }));
}

const PostDetail = async ({ params }: { params: { id: string } }) => {
    const post: Post = await getPost(params.id);

    return (
        <div className={'w-full bg-white rounded-lg p-2 m-4 drop-shadow-lg'}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default PostDetail;
