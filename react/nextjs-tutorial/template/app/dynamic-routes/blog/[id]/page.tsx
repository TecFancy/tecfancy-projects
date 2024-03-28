import React from "react";
import Link from "next/link";

interface Props {
  params: {
    id: string;
  }
}

export default function BlogPostPage(props: Props) {
  const { id } = props.params;
  return (
    <div>
      <h1>Blog Post Page.</h1>
      <p>Post ID: {id}</p>
      <Link href="/dynamic-routes">Back to Dynamic Routes Page</Link>
    </div>
  );
}
