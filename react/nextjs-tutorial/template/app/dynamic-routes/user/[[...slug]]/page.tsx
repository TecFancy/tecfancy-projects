import React from "react";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  }
}

export default function UserPage(props: Props) {
  const { params } = props;
  return (
    <div>
      <h1>User Page</h1>
      <div>User: {JSON.stringify(params)}</div>
      <ul>
        <li>
          <Link href="/dynamic-routes/user/1">User 1</Link>
        </li>
        <li>
          <Link href="/dynamic-routes/user/1/contact">User 1: Cotact</Link>
        </li>
        <li>
          <Link href="/dynamic-routes/user/1/contact/email">User 1: Cotact - Email</Link>
        </li>
        <li>
          <Link href="/dynamic-routes/user/1/contact/address">User 1: Cotact - Address</Link>
        </li>
      </ul>
      <Link href="/dynamic-routes/user">Back to User Page</Link>
      <br />
      <Link href="/dynamic-routes/">Back to Dynamic Routes Page</Link>
    </div>
  );
}