import Link from "next/link";

export default function MainHeader() {
  return (
    <main>
      <header>
        <Link href="/">Home Page</Link>
        <Link href="/news">News</Link>
      </header>
    </main>
  );
}
