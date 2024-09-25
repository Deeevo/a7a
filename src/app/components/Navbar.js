import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/search">Search</Link>
        </li>
        <li>
          <Link href="/defects">Defects</Link>
        </li>
        <li>
          <Link href="/overview">Overview</Link>
        </li>
      </ul>
    </nav>
  );
}