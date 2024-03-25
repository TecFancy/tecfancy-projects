"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function DashboardTemplate(props: Props) {
  const { children } = props;
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h2>Dashboard Template</h2>

      <div>
        <span>Count: {count}</span>
        &nbsp;
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        &nbsp;
        <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      </div>

      <hr />

      {children}
    </div>
  );
}
