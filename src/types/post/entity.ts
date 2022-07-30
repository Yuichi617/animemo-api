export type Post = {
  id: string;
  user: string;
  animeName: string;
  rating: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  deleteFlg?: boolean;
};

export type Posts = {
  posts: Post[];
};
