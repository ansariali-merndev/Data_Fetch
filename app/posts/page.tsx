"use client";
import { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Posts() {
  const [data, setData] = useState<Post[]>([]);
  useEffect(() => {
    async function dataFetch() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const data: Post[] = await res.json();
      // console.log(data);
      setData(data);
    }
    dataFetch();
  }, []);
  return (
    <section className="mx-20 my-10">
      <h2 className="text-center text-4xl capitalize font-semibold text-gray-400 mb-6">
        Posts section
      </h2>
      <ul className="grid gap-6">
        {data.map((post) => (
          <li
            className="bg-gray-200 shadow-lg px-6 py-2 text-center"
            key={post.id}
          >
            <h2 className="text-xl font-semibold text-gray-600">{post.id}</h2>
            <h2 className="text-xl font-semibold text-gray-600">
              {post.title}
            </h2>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
