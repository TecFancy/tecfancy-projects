'use client';

import React from "react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <h1>Hello, Dashboard!</h1>
      <ul>
        <li>
          <Link href="/dashboard/user/1">User 1</Link>
        </li>
      </ul>
    </>
  );
}
