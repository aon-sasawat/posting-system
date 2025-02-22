import { FC, InputHTMLAttributes, ReactNode } from "react";
import Image from "next/image";
import Divider from "../divider";
import { Icon } from "../icon";
import Tag from "../tag";
import CommentIcon from "@/assets/svg/comment-icon.svg";
import { cn } from "@/utils/cn";

interface Props extends InputHTMLAttributes<HTMLDivElement> {
  posts: {
    id: string;
    poster: string;
    tag: ReactNode;
    title: string;
    content: string;
    commentCount: number;
  }[];
}

const PostList: FC<Props> = ({ posts, className, ...props }) => {
  return posts.map((post, index) => (
    <>
      {index !== 0 && <Divider />}
      <div key={post?.id} className={cn("p-5 w-full", className)} {...props}>
        <div className="flex items-center gap-[10px]">
          <Image src="/assets/images/avatar.png" alt="avatar" width={30} height={30} />
          <p className="text-gray-300 text-sm">{post?.poster}</p>
        </div>
        <Tag className="mt-[15px] mb-[5px]">{post?.tag}</Tag>
        <p className="font-semibold">{post?.title}</p>
        <p className="text-xs mt-[2px] mb-[10px] line-clamp-2">{post?.content}</p>
        <div className="flex gap-[5px] text-gray-300 text-xs">
          <Icon svg={CommentIcon} width={12} strokeWidth={1} />
          {post?.commentCount} Comments
        </div>
      </div>
    </>
  ));
};

export default PostList;
