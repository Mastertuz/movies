'use client'
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Genre } from "../../typings";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';

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
      <Select  onValueChange={(value) => handleSortByUpdate(value)} value={searchParams.get('sort_by') || ''}>
        <SelectTrigger className="w-28">
          <SelectValue placeholder="Sort by:"/>
        </SelectTrigger>
        <SelectContent>
          {sortBy?.map((option) => (
            <SelectItem value={option.value} key={option.value}>{option.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select  onValueChange={(value) => handleGenresUpdate(+value)} value={searchParams.get('with_genres') || ''}>
        <SelectTrigger className="w-44">
          <SelectValue placeholder="Genres:"/>
        </SelectTrigger>
        <SelectContent>
          {genres?.map((genre) => (
            <SelectItem value={String(genre.id)} key={genre.id}>{genre.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
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
