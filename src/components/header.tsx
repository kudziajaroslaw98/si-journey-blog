export default function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div>
        <h1 className="text-6xl text-emperor-100">Journey</h1>
      </div>

      <div>
        {/*<Link*/}
        {/*  href="/about"*/}
        {/*  className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7AB0A] flex items-center rounded-full text-center"*/}
        {/*>*/}
        {/*  Donate to help me grow this blog*/}
        {/*</Link>*/}
      </div>
    </header>
  );
}
