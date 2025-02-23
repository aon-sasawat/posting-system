import { FC, InputHTMLAttributes, ReactNode, useCallback, useState } from "react";
import Image from "next/image";
import Button from "../button";
import { Icon } from "../icon";
import Tag from "../tag";
import Textarea from "../textarea";
import CommentIcon from "@/assets/svg/comment-icon.svg";
import { cn } from "@/utils/cn";

interface Props extends InputHTMLAttributes<HTMLDivElement> {
  poster: string;
  tag: ReactNode;
  title: string;
  content: string;
  comments: {
    id: string;
    commentator: string;
    content: string;
  }[];
}

const PostDetail: FC<Props> = ({ poster, tag, title, content, comments, className, ...props }) => {
  const [isAddComment, setIsAddComment] = useState(false);

  const handleClickAddComment = useCallback(() => {
    setIsAddComment(true);
  }, []);

  const handleClickCancelComment = useCallback(() => {
    setIsAddComment(false);
  }, []);

  return (
    <div className={cn("w-full", className)} {...props}>
      <div className="flex items-center gap-[10px]">
        <Image src="/assets/images/avatar.png" alt="avatar" width={48} height={48} />
        <p className="text-sm">{poster}</p>
      </div>
      <Tag className="mt-[10px] mb-[16px]">{tag}</Tag>
      <p className="font-semibold text-[28px]">{title}</p>
      <p className="text-xs mt-4 mb-7">{content}</p>
      <div className="flex gap-[5px] text-gray-300 text-xs">
        <Icon svg={CommentIcon} width={12} strokeWidth={1} />
        {comments.length} Comments
      </div>
      {!isAddComment && (
        <Button variant="outline" className="w-[132px] h-10 mt-8" onClick={handleClickAddComment}>
          Add Comments
        </Button>
      )}
      {isAddComment && (
        <div className="flex flex-col gap-[10px] mt-8">
          <Textarea className="h-[100px] placeholder-placeholder font-ibm" placeholder="What’s on your mind..." />
          <div className="flex justify-end gap-3">
            <Button variant="outline" className="w-[105px] h-10" onClick={handleClickCancelComment}>
              Cancel
            </Button>
            <Button className="w-[105px] h-10">Post</Button>
          </div>
        </div>
      )}
      {comments.map((comment) => (
        <div key={comment?.id} className="flex flex-col gap-2 mt-6">
          <div className="flex items-center gap-[10px]">
            <Image src="/assets/images/comment-avatar.png" alt="avatar" width={40} height={40} />
            <p className="font-medium text-sm">{comment?.commentator}</p>
          </div>
          <p className="text-xs pl-[50px]">{comment?.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostDetail;
