interface BaseResponse {
  code: number;
  message: string;
}

export interface SignInResponse extends BaseResponse {
  data: {
    id: string;
    username: string;
  };
}

export interface GetAllTagsResponse extends BaseResponse {
  data: {
    id: string;
    name: string;
  }[];
}

export interface GetAllPostsResponse extends BaseResponse {
  data: {
    id: string;
    title: string;
    content: string;
    userId: string;
    tagId: string;
    user: {
      id: string;
      username: string;
    };
    tag: {
      id: string;
      name: string;
    };
    comments: { id: string; userId: string; content: string; postId: string }[];
  }[];
}

export interface GetPostByIdResponse extends BaseResponse {
  data: {
    id: string;
    title: string;
    content: string;
    userId: string;
    tagId: string;
    user: {
      id: string;
      username: string;
    };
    tag: {
      id: string;
      name: string;
    };
    comments: { id: string; userId: string; content: string; postId: string; user: { id: string; username: string } }[];
  };
}

export interface CreatePostResponse extends BaseResponse {
  id: string;
  title: string;
  content: string;
  userId: string;
  tagId: string;
}

export interface CreateCommentResponse extends BaseResponse {
  id: string;
  content: string;
  userId: string;
  postId: string;
}
