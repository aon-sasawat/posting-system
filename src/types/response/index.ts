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
