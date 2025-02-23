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
    comments: [];
  }[];
}
