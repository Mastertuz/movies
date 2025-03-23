"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";
function PaginationComponent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination className="my-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={createPageURL(
              currentPage > 1 ? currentPage - 1 : currentPage
            )}
          />
        </PaginationItem>

        <PaginationItem>
          {currentPage > 1 && (
            <PaginationLink href={createPageURL(currentPage - 1)}>
              {currentPage - 1}
            </PaginationLink>
          )}
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href={createPageURL(currentPage)} isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href={createPageURL(currentPage + 1)}>
            {currentPage + 1}
          </PaginationLink>
        </PaginationItem>

        {currentPage == 1 && (
          <PaginationItem>
            <PaginationLink href={createPageURL(currentPage + 2)}>
              {currentPage + 2}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext href={createPageURL(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationComponent;
