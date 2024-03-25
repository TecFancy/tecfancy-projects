"use client";

import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout(props: Props) {
  const { children } = props;
  const [count, setCount] = useState(0);

  return (
    <section>
      <h1>Dashboard Layout</h1>

      <div>
        <span>Count: {count}</span>
        &nbsp;
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        &nbsp;
        <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      </div>

      <hr />

      {children}
    </section>
  );
}
