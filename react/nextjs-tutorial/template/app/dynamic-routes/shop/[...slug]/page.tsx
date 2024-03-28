import React from "react";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  }
}

export default function ShopPage(props: Props) {
  const { params } = props;
  return (
    <div>
      <h1>Shop Page</h1>
      <div>Shop: {JSON.stringify(params)}</div>
      <ul>
        <li>
          <Link href="/dynamic-routes/shop/clothes/tops">Clothes: Tops</Link>
        </li>
        <li>
          <Link href="/dynamic-routes/shop/clothes/tops/t-shirts">Tops Clothes: T-Shirts</Link>
        </li>
      </ul>
      <Link href="/dynamic-routes/shop/clothes">Back to Shop Page (Clothes)</Link>
      <br />
      <Link href="/dynamic-routes/">Back to Dynamic Routes Page</Link>
    </div>
  );
}
