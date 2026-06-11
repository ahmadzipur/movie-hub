import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>🎬 MovieHub</h2>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/movies">Movies</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}