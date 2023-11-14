import { ChangeEvent, useState } from "react";
import { useGetVolumesQuery } from "../../store/apis/bookstore.api";
import BookCard from "../../components/BookCard";
import { useDebounce } from "../../utils/hooks/useDebounce";
import { useSearchParams } from "react-router-dom";
import LoadingContainer from "../../components/LoadingContainer";

const BooksList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("q") || "");

  const debouncedQuery = useDebounce(query, 500);

  const { data, isFetching } = useGetVolumesQuery(debouncedQuery, {
    skip: !debouncedQuery,
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSearchParams({ q: e.target.value });
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center w-full gap-4">
        <h3 className="text-xl font-bold">Type here to search for books</h3>
        <input
          className="w-full h-12 p-4 rounded-md outline-none"
          value={query}
          data-cy="book-search-input"
          onChange={handleSearchInputChange}
        />
      </div>
      <LoadingContainer isLoading={isFetching}>
        {data ? (
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {data?.items?.map((book) => {
              return (
                <BookCard
                  id={book.id}
                  title={book.volumeInfo.title}
                  subtitle={book.volumeInfo?.subtitle}
                  textSnippet={book.searchInfo?.textSnippet}
                  thumbnail={book.volumeInfo.imageLinks?.thumbnail}
                  key={`book-list-item-${book.id}`}
                />
              );
            }) || <p data-cy="no-books-found">No books were found</p>}
          </div>
        ) : (
          <p data-cy="waiting-to-type">"Start typing to see books"</p>
        )}
      </LoadingContainer>
    </div>
  );
};

export default BooksList;
