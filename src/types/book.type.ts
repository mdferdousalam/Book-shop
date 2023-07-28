export type IBook = {
  _id: string;
  title: string;
  thumbnail: string;
  price: number;
  author: string;
  genre: string;
  publicationYear: number;
  reviews?: IReview[];
};

export type IReview = {
  _id: string;
  rating: number;
  comment: string;
  user: string;
};

