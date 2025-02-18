import Link from "next/link"
import ModeToggle from "./ModeToggle"
import Image from "next/image"
import { HomeIcon, SearchIcon, UserIcon } from "lucide-react"
import SearchInput from "./SearchInput"

function Header() {
  return (
    <header className="w-full  sticky py-2 top-0 mb-6 z-50 flex justify-between items-center">
      <Link href={'/'}>
        <Image
          src="/logo.svg"
          width={120}
          height={100}
          alt="Movibes logo"
        />
      </Link>
      <nav >
        <ul className="flex space-x-8">
          <li>
            <Link className=" uppercase text-white hover:text-teal-400 transition-colors ease-in-out" href={'/'}>Home</Link>
          </li>
          <li>
            <Link className=" uppercase text-white hover:text-teal-400 transition-colors ease-in-out" href={'/series'}>
            Series</Link>
          </li>
          <li>
            <Link className=" uppercase text-white hover:text-teal-400 transition-colors ease-in-out" href={'/movie'}>Movies</Link>
          </li>
          <li>
            <Link className=" uppercase text-white hover:text-teal-400 transition-colors ease-in-out" href={'/search/abc'}>Watchlist</Link>
          </li>
        </ul>
      </nav>
      
      <div className="flex items-center space-x-4">
      <SearchInput/>
      <UserIcon className="cursor-pointer"/>
      </div>
      

    </header>
  )
}

export default Header