import { Favorites } from "../../utils/types/common";
import LoadingBookCard from "../../components/LoadingBookCard";

const Favorites = () => {
  const local = localStorage.getItem("favorites");
  const favorites: Favorites = JSON.parse(local || "");
  const hasFavoriteBooks = favorites.ids.length;

  return (
    <div className="grid grid-cols-4 gap-4">
      {hasFavoriteBooks
        ? favorites.ids.map((id) => {
            return <LoadingBookCard key={`favorites-item-${id}`} id={id} />;
          })
        : "You don't have any favorite books"}
    </div>
  );
};

export default Favorites;
