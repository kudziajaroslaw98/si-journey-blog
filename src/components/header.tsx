import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 px-10 py-5">
      <h1 className="text-2xl leading-6 md:text-6xl text-emperor-100">
        Journey
      </h1>

      <Link
        href="#"
        className="px-6 py-2 text-sm hover:bg-picton-blue-700 ring-picton-blue-600 hover:ring-1 hover:ring-offset-2 ring-offset-emperor-950 transition-all text-emperor-100 bg-picton-blue-600 flex items-center rounded-md text-center"
      >
        Donate
      </Link>
    </header>
  );
}
