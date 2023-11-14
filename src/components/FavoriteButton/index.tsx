import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Favorites } from "../../utils/types/common";

const DEFAULT_FAVORITES: Favorites = {
  ids: [],
};

const FAVORITES_KEY = "favorites";
const FavoriteButton = () => {
  const { id } = useParams<{ id: string }>();
  const [isFavoriteState, setIsFavoriteState] = useState(false);

  const local = localStorage.getItem("favorites");
  const favorites: Favorites = local ? JSON.parse(local) : DEFAULT_FAVORITES;
  const isFavorite = id && favorites.ids.includes(id);

  useEffect(() => {
    setIsFavoriteState(!!isFavorite);
  }, [isFavorite]);

  const handleToggleFavorite = () => {
    const local = localStorage.getItem(FAVORITES_KEY);
    const favorites: Favorites = local ? JSON.parse(local) : DEFAULT_FAVORITES;
    const isFavorite = id && favorites.ids.includes(id);

    if (!isFavorite) {
      const newFavorites = [...favorites.ids, id];

      localStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify({ ids: newFavorites })
      );
      setIsFavoriteState(true);
      return;
    }

    localStorage.setItem(
      FAVORITES_KEY,
      JSON.stringify({
        ids: favorites.ids.filter((item) => item !== id),
      })
    );
    setIsFavoriteState(false);
  };

  return (
    <button
      onClick={handleToggleFavorite}
      className="h-10 px-5 py-2 bg-yellow-200 rounded-xl w-max whitespace-nowrap"
    >
      {isFavoriteState ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
};

export default FavoriteButton;
