'use client';

import React, { useState } from "react";

export default function ErrorPage() {
  const [error, setError] = useState(false);

  const handleGetError = () => {
    setError(true);
  };

  if (error) return Error();
  return <button onClick={handleGetError}>Get Error</button>;
}