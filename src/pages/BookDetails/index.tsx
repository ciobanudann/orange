import { useParams } from "react-router-dom";
import { useGetVolumeByIdQuery } from "../../store/apis/bookstore.api";
import FavoriteButton from "../../components/FavoriteButton";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isFetching } = useGetVolumeByIdQuery(id || "", { skip: !id });

  if (isFetching || !data) {
    return <div>loading</div>;
  }
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <h2 className="text-4xl font-bold">{data?.volumeInfo.title}</h2>
        <FavoriteButton />
      </div>
      {data?.volumeInfo?.subtitle}
      <img
        className="object-contain h-96"
        src={data?.volumeInfo.imageLinks?.thumbnail}
      ></img>
      {data?.volumeInfo?.description}
    </div>
  );
};

export default BookDetails;
