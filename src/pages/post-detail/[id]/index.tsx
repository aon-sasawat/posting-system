import { FC } from "react";
import { useParams } from "next/navigation";
import PostDetailPageComponent from "@/components/pages/post-detail";

const PostDetail: FC = () => {
  const param = useParams();
  return <PostDetailPageComponent id={param?.id as string} />;
};

export default PostDetail;
