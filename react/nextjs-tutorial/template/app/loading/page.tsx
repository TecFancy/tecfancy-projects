import React from 'react';

async function getData(): Promise<{ message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    message: 'Hello, Loading!',
  };
}

export default async function LoadingPage() {
  const { message } = await getData();
  return <h1>{message}</h1>;
}
