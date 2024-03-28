import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main>
      <h1>Hello, Next.js!</h1>
      <ul>
        <li>
          <Link href="/dynamic-routes">Dynamic Routes Page</Link>
        </li>
      </ul>
    </main>
  );
}
