import Image from "next/image"
import logo from '@/app/favicon.ico'

export default function Navbar() {
  return (
    <>
      <header className="bg-linear-to-r/decreasing from-indigo-500 to-teal-400 text-gray-600 bg-purple-100 body-font fixed top-0 left-0 right-0 width-100">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a className="mr-5 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900">About</a>
            <a className="mr-5 hover:text-gray-900">Doctor</a>
            <a className="hover:text-gray-900">Blogs</a>
          </nav>
          <a className="flex order-first lg:order-none lg:w-3/5 title-font font-medium items-left text-gray-900 lg:items-left lg:justify-left mb-4 md:mb-0">
            <Image src={logo} height={100} width={100} alt="logo"/>
            <span className="py-5 ml-3 text-3xl">Savera Nursing Home</span>
          </a>
        </div>
      </header>
    </>

  );
}