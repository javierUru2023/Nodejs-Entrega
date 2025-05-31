import Link from "next/link";
import Image from "next/image";

export default function Navbar () {

    return(
        <nav className="bg-gray-500 border-gray-500 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image 
                    src="/karro-logo.svg" 
                    alt="Karros Autopartes Logo" 
                    width={150}
                    height={150}
                    priority
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Karros Autopartes</span>
            </div>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-yellow-300 rounded-lg md:hidden hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-green-800 rounded-lg bg-green-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-500 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-y-white">
                <li>
                <Link href="/" className="block py-2 px-3 text-white bg-yellow-100 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Inicio</Link>
                </li>
                <li>
                <Link href="/About" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Nosotros</Link>
                </li>
                <li>
                <Link href="/Products/all" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Productos</Link>
                </li>
                <li>
                <Link href="/Posts" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</Link>
                </li>
                <li>
                <Link href="/Contact" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contacto</Link>
                </li>
                <li>
                <Link href="/Cart" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <Image
                        src="/cart.svg"
                        alt="Carrito de Compras"
                        className="h-6 w-6 inline-block"
                        width={24}
                        height={24}
                        priority
                    />
                </Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}