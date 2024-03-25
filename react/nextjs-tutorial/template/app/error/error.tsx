'use client';

import React, { useEffect } from "react";

interface PropsType {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: PropsType) {
  useEffect(() => {
    console.error('error:', error);
  }, [error]);

  const handleTryAgain = () => {
    // Try to reset
    reset();
  };

  return (
    <>
      <h2>Oops! Something went wrong.</h2>
      <button onClick={handleTryAgain}>Try again</button>
    </>
  );
}