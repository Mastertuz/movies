"use client";
import Link from "next/link";
import Image from "next/image";
import SearchInput from "./SearchInput";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "../ui/select";
import { useState } from "react";

function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const getPageFromPathname = (pathname: string) => {
    if (pathname.startsWith("/series")) return "/series?page=1";
    if (pathname.startsWith("/movies")) return "/movies?page=1";
    if (pathname.startsWith("/watchlist")) return "/watchlist";
    return "/";
  };

  const [selectedPage, setSelectedPage] = useState(getPageFromPathname(pathname));

  const handlePageChange = (value: string) => {
    setSelectedPage(value);
    router.push(value);
  };

  return (
    <header className="w-full bg-[#0a0a0a] sticky py-2 top-0 mb-6 z-50 flex justify-between items-center">
      <Link href={"/"}>
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
            <Link
              className="uppercase text-white hover:text-teal-400 transition-colors ease-in-out"
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="uppercase text-white hover:text-teal-400 transition-colors ease-in-out"
              href={"/series?page=1"}
            >
              Series
            </Link>
          </li>
          <li>
            <Link
              className="uppercase text-white hover:text-teal-400 transition-colors ease-in-out"
              href={"/movies?page=1"}
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              className="uppercase text-white hover:text-teal-400 transition-colors ease-in-out"
              href={"/watchlist"}
            >
              Watchlist
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center space-x-4 max-[360px]:space-x-2">
        <div className="lg:hidden">
          <Select onValueChange={handlePageChange} value={selectedPage}>
            <SelectTrigger className="w-24">
              <SelectValue  placeholder="Page:" />
            </SelectTrigger>
            <SelectContent >
              <SelectItem  value={"/"}>Home</SelectItem>
              <SelectItem  value={"/series?page=1"}>Series</SelectItem>
              <SelectItem value={"/movies?page=1"}>Movies</SelectItem>
              <SelectItem value={"/watchlist"}>Watchlist</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <SearchInput />
        <SignedOut>
          <SignInButton >
          <User  className="cursor-pointer"/>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}

export default Header;