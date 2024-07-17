import useData from "./useData";
import { Genres } from "./useGenres";
import { Platforms } from "./usePlatform";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genres | null,
  selectedPlatforms: Platforms | null
) =>
  useData<Games>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatforms?.id } },
    [selectedGenre?.id, selectedPlatforms?.id]
  );

export default useGames;
