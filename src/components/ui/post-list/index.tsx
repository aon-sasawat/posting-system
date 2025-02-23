import { FC, InputHTMLAttributes, ReactNode, useCallback, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CommentIcon from "@/assets/svg/comment-icon.svg";
import EditIcon from "@/assets/svg/edit-icon.svg";
import TrashIcon from "@/assets/svg/trash-icon.svg";
import { cn } from "@/utils/cn";
import Button from "../button";
import Divider from "../divider";
import Dropdown from "../dropdown";
import { Icon } from "../icon";
import Input from "../input";
import Modal from "../modal";
import Tag from "../tag";
import Textarea from "../textarea";

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
      </div>
      <Modal className="w-[685px] h-[510px]" isOpen={isEditModalOpen} onRequestClose={() => setIsEditModalOpen(false)}>
        <p className="text-[28px] font-semibold">Edit Post</p>
        <div className="flex flex-col gap-[14px] mt-[30px] mb-[10px]">
          <Dropdown className="w-[195px]" placeholder="Choose a community" options={[]} variant="button" />
          <Input placeholder="Title" />
          <Textarea className="h-[234px]" placeholder="What’s on your mind..." />
        </div>
        <div className="flex justify-end gap-3">
          <Button className="w-[105px] h-10" variant="outline" onClick={handleCloseEditModal}>
            Cancel
          </Button>
          <Button className="w-[105px] h-10" onClick={handleCloseEditModal}>
            Post
          </Button>
        </div>
      </Modal>
      <Modal className="w-[400px] h-[248px] px-6 py-[30px]" isOpen={isDeleteModalOpen} onRequestClose={() => setIsDeleteModalOpen(false)}>
        <p className="font-semibold text-lg text-center">Please confirm if you wish to delete the post</p>
        <p className="text-[#475467] text-center mt-2 mb-8">Are you sure you want to delete the post? Once deleted, it cannot be recovered.</p>
        <div className="flex items-center justify-center gap-3">
          <Button variant="outline-secondary" className="w-[170px] h-11" onClick={handleCloseDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" className="w-[170px] h-11" onClick={handleCloseDeleteModal}>
            Delete
          </Button>
        </div>
      </Modal>
    </>
  ));
};

export default PostList;
