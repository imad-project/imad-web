export interface IDetailUIProps {
  data?: {
    title: string;
    name: string;
    tmdb_type: string;
    overview: string;
    poster_path: string;
    contents_type: string;
  } | null;
}
