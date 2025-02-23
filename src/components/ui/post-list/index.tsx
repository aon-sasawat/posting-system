import { FC, InputHTMLAttributes, ReactNode, useCallback, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CommentIcon from "@/assets/svg/comment-icon.svg";
import EditIcon from "@/assets/svg/edit-icon.svg";
import TrashIcon from "@/assets/svg/trash-icon.svg";
import { cn } from "@/utils/cn";
import Divider from "../divider";
import { Icon } from "../icon";
import DeletePostModal from "../modal/delete-post-modal";
import EditPostModal from "../modal/edit-post-modal";
import Tag from "../tag";

interface Props extends InputHTMLAttributes<HTMLDivElement> {
  posts: {
    id: string;
    poster: string;
    tag: ReactNode;
    title: string;
    content: string;
    commentCount: number;
  }[];
  mode: "view" | "manage";
}

const PostList: FC<Props> = ({ posts, mode, className, ...props }) => {
  const router = useRouter();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleClickPost = useCallback(
    (id: string) => {
      if (mode !== "view") return;
      router.push(`/post-detail/${id}`);
    },
    [mode, router],
  );

  const handleClickEditPost = useCallback(() => {
    setIsEditModalOpen(true);
  }, []);

  const handleCloseEditModal = useCallback(() => {
    setIsEditModalOpen(false);
  }, []);

  const handleClickDeletePost = useCallback(() => {
    setIsDeleteModalOpen(true);
  }, []);

  const handleCloseDeleteModal = useCallback(() => {
    setIsDeleteModalOpen(false);
  }, []);

  return posts.map((post, index) => (
    <>
      {index !== 0 && <Divider />}
      <div
        key={post?.id}
        className={cn("p-5 w-full", mode === "view" && "cursor-pointer", className)}
        onClick={() => handleClickPost(post?.id)}
        {...props}
      >
        <div className="flex justify-between">
          <div className="flex items-center gap-[10px]">
            <Image src="/assets/images/avatar.png" alt="avatar" width={30} height={30} />
            <p className="text-gray-300 text-sm">{post?.poster}</p>
          </div>
          {mode === "manage" && (
            <div className="flex gap-[15px]">
              <Icon svg={EditIcon} width={15} height={15} strokeWidth={1.5} className="cursor-pointer" onClick={handleClickEditPost} />
              <Icon svg={TrashIcon} width={15} height={15} strokeWidth={1.5} className="cursor-pointer" onClick={handleClickDeletePost} />
            </div>
          )}
        </div>
        <Tag className="mt-[15px] mb-[5px]">{post?.tag}</Tag>
        <p className="font-semibold">{post?.title}</p>
        <p className="text-xs mt-[2px] mb-[10px] line-clamp-2">{post?.content}</p>
        <div className="flex gap-[5px] text-gray-300 text-xs">
          <Icon svg={CommentIcon} width={12} strokeWidth={1} />
          {post?.commentCount} Comments
        </div>
        <EditPostModal isOpen={isEditModalOpen} onRequestClose={handleCloseEditModal} postId={post?.id} />
        <DeletePostModal isOpen={isDeleteModalOpen} onRequestClose={handleCloseDeleteModal} postId={post?.id} />
      </div>
    </>
  ));
};

export default PostList;
