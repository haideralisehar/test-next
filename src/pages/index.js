import Link from 'next/link';


export default function Home() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>Welcome to NinjaList</h1>
      <p>This is the Home page</p>

      <Link href="/about">
        Go to About →
      </Link>
    </div>
  );
}
