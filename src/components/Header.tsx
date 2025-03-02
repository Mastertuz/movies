import Link from "next/link"
import Image from "next/image"
import SearchInput from "./SearchInput"
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { ChevronDown, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function Header() {
  return (
    <header className="w-full bg-[#0a0a0a]  sticky py-2 top-0 mb-6 z-50 flex justify-between items-center">
      <Link href={'/'} >

        <Image
          src="/logo.svg"
          width={120}
          height={100}
          className="max-sm:w-20 max-[400px]:w-14"
          alt="Movibes logo"
        />
      </Link>
      <nav className="hidden lg:flex items-center space-x-8">
        <ul className="flex space-x-8">
          <li>
            <Link className=" uppercase text-white hover:text-teal-400 transition-colors ease-in-out" href={'/'}>Home</Link>
          </li>
          <li>
            <Link className=" uppercase text-white hover:text-teal-400 transition-colors ease-in-out" href={'/series?page=1'}>
              Series</Link>
          </li>
          <li>
            <Link className=" uppercase text-white hover:text-teal-400 transition-colors ease-in-out" href={'/movies?page=1'}>Movies</Link>
          </li>
          <li>
            <Link className=" uppercase text-white hover:text-teal-400 transition-colors ease-in-out" href={'/watchlist'}>Watchlist</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center space-x-4 max-[360px]:space-x-2">
        <div className="lg:hidden">
          <DropdownMenu >
            <DropdownMenuTrigger className="flex">
              Page
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem><Link className=" text-white" href={'/'}>Home</Link></DropdownMenuItem>
              <DropdownMenuItem><Link className=" text-white" href={'/movies?page=1'}>Movies</Link></DropdownMenuItem>
              <DropdownMenuItem>
                <Link className=" text-white" href={'/series?page=1'}>
                  Series</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link className=" text-white" href={'/watchlist'}>Watchlist</Link>
              </DropdownMenuItem>

            </DropdownMenuContent>
          </DropdownMenu>

        </div>
        <SearchInput />

        <SignedOut>
          <SignInButton />
          <User />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

      </div>

    </header>
  )
}

export default Header