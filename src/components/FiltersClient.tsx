'use client'
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Genre } from "../../typings";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "./ui/input";

interface FiltersClientProps {
  genresList: Genre[];
  sortBy: { value: string, name: string }[];
  primary_release_year: number;
}

function FiltersClient({ genresList: genres, sortBy, primary_release_year }: FiltersClientProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [year, setYear] = useState("");

  const handleGenresUpdate = (genreId: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('with_genres', genreId.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSortByUpdate = (sortBy: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort_by', sortBy);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  const handleYearSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    params.set('primary_release_year', year);
    router.push(`${pathname}?${params.toString()}`);
    setYear("");
  };

  return (
    <div className="my-6 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="rounded-full">Sort by
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {sortBy?.map((sortOption) => (
            <DropdownMenuItem
              className="cursor-pointer"
              key={sortOption.value}
              onClick={() => handleSortByUpdate(sortOption.value)}
            >
              {sortOption.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="rounded-full">Genres
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className='h-60 overflow-y-auto'>
          {genres?.map((genre) => (
            <DropdownMenuItem
              className="cursor-pointer"
              key={genre.id}
              onClick={() => handleGenresUpdate(genre.id)}
            >
              {genre.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <form className='w-20' onSubmit={handleYearSubmit}>
        <Input
          placeholder="Year"
          value={year}
          type='number'
          className='focus-visible:ring-0'
          onChange={handleYearChange}
        />
      </form>
    </div>
  );
}

export default FiltersClient;