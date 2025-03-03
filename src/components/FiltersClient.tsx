'use client'
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, ListFilter } from "lucide-react";
import { Genre } from "../../typings";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
function FiltersClient({ genresList: genres }: { genresList: Genre[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleGenresUpdate = (genreId: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('with_genres', genreId.toString());
    router.push(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="mb-4 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
      <Button variant="outline" className="rounded-full">
        <ListFilter className="w-4 h-4 mr-2" /> Фильтры
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="rounded-full">Genres
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
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

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="rounded-full">Срок доставки ▼</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem>Быстрая доставка</DropdownMenuItem>
          <DropdownMenuItem>Обычная доставка</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="rounded-full">Жанр ▼</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem>Экшен</DropdownMenuItem>
          <DropdownMenuItem>Драма</DropdownMenuItem>
          <DropdownMenuItem>Комедия</DropdownMenuItem>
          <DropdownMenuItem>Фантастика</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="rounded-full">Год выхода ▼</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem>2024</DropdownMenuItem>
          <DropdownMenuItem>2023</DropdownMenuItem>
          <DropdownMenuItem>2022</DropdownMenuItem>
          <DropdownMenuItem>Ранее</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default FiltersClient