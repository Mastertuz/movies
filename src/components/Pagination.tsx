'use client'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { usePathname, useSearchParams } from 'next/navigation';
function PaginationComponent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination className="my-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={createPageURL(currentPage > 1 ? currentPage - 1 : currentPage)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={createPageURL(1)}>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={createPageURL(2)}>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={createPageURL(3)}>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={createPageURL(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationComponent