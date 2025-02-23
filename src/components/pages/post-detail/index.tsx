import { FC, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import LeftArrow from "@/assets/svg/left-arrow-icon.svg";
import Button from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import PostDetail from "@/components/ui/post-detail";
import { useGetPostByIdQuery } from "@/redux/slice/post";

interface Props {
  id: string;
}

const PostDetailPageComponent: FC<Props> = ({ id }) => {
  const router = useRouter();
  const { data: post } = useGetPostByIdQuery(id);
  const comments = useMemo(
    () => post?.data?.comments.map((comment) => ({ id: comment.id, commentator: comment.user.username, content: comment.content })) ?? [],
    [post],
  );

  const handleClickBack = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="fixed top-[60px] left-[280px] right-0 bottom-0 overflow-auto">
      <div className="flex flex-col gap-10 bg-white w-full min-h-screen px-36 py-9">
        <Button className="rounded-full w-11 h-11 flex items-center justify-center bg-green-100" onClick={handleClickBack}>
          <Icon svg={LeftArrow} width={14} height={14} strokeWidth={2} />
        </Button>
        <PostDetail
          poster={post?.data?.user?.username as string}
          tag={post?.data?.tag?.name}
          title={post?.data?.title as string}
          content={post?.data?.content as string}
          comments={comments}
        />
      </div>
    </div>
  );
};

export default PostDetailPageComponent;
