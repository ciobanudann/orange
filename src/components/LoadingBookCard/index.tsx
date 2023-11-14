import React from "react";
import { useGetVolumeByIdQuery } from "../../store/apis/bookstore.api";
import BookCard from "../../components/BookCard";

type Props = {
  id: string;
};

const LoadingBookCard: React.FC<Props> = ({ id }) => {
  const { data } = useGetVolumeByIdQuery(id);

  return (
    <BookCard
      id={id}
      title={data?.volumeInfo.title || ""}
      subtitle={data?.volumeInfo.subtitle}
      textSnippet=""
      thumbnail={data?.volumeInfo.imageLinks.thumbnail}
    ></BookCard>
  );
};

export default LoadingBookCard;
