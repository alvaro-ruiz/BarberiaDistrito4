import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-center items-center">
        <Link href="/" className="text-xl font-bold text-center">
          Barberia Distrito 4
        </Link>
      </div>
    </nav>
  );
}
