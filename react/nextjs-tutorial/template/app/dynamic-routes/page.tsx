import Link from "next/link";
import React from "react";

export default function DynamicRoutesPage() {
  return (
    <div>
      <h1>Dynamic Routes Page.</h1>
      <ul>
        <li>
          <Link href="/dynamic-routes/blog/1">Blog Post 1</Link>
        </li>
        <li>
          <Link href="/dynamic-routes/shop/clothes">Shop Page: Clothes</Link>
        </li>
        <li>
          <Link href="/dynamic-routes/user/">User Page</Link>
        </li>
      </ul>
    </div>
  );
}
