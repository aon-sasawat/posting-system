export interface CreatePostRequest {
  title: string;
  content: string;
  userId: string;
  tagId: string;
}

export interface UpdatePostRequest {
  id: string;
  title: string;
  content: string;
  userId: string;
  tagId: string;
}

export interface CreateCommentRequest {
  content: string;
  userId: string;
  postId: string;
}
