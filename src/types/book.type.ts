export type IBook = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  author: string;
  genre: string;
  publicationYear: number;
  reviews?: IReview[];
};

export type IReview = {
  id: string;
  rating: number;
  comment: string;
  user: string;
};

