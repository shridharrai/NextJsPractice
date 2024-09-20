import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome Home!</h1>
      <h2>
        <Link href="/blogs">Blogs</Link>
      </h2>
      <h2>
        <Link href="/products">Products</Link>
      </h2>
    </>
  );
}
