import { FC, useCallback, useMemo, useState } from "react";
import Button from "@/components/ui/button";
import Dropdown from "@/components/ui/dropdown";
import Input from "@/components/ui/input";
import Modal from "@/components/ui/modal";
import PostList from "@/components/ui/post-list";
import Search from "@/components/ui/search";
import Textarea from "@/components/ui/textarea";
import { useGetAllPostsQuery } from "@/redux/slice/post";
import { useGetAllTagsQuery } from "@/redux/slice/tag";

const HomePageComponent: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: tags } = useGetAllTagsQuery();
  const { data: posts } = useGetAllPostsQuery();
  const options = useMemo(() => tags?.data?.map((tag) => ({ label: tag.name, value: tag.id })) ?? [], [tags]);
  const postList = useMemo(
    () =>
      posts?.data?.map((post) => ({
        id: post.id,
        poster: post.user.username,
        tag: post.tag.name,
        title: post.title,
        content: post.content,
        commentCount: post.comments.length,
      })) ?? [],
    [posts],
  );

  const handleClickCreatePost = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full py-[35px]">
      <div className="flex justify-between w-[798px]">
        <Search />
        <Dropdown placeholder="Community" options={options} className="w-32 px-[14px]" />
        <Button className="w-[105px] h-10" onClick={handleClickCreatePost}>
          Create +
        </Button>
      </div>
      <div className="bg-white rounded-xl w-[798px]">
        <PostList posts={postList} mode="view" />
      </div>
      <Modal className="w-[685px] h-[510px]" isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <p className="text-[28px] font-semibold">Create Post</p>
        <div className="flex flex-col gap-[14px] mt-[30px] mb-[10px]">
          <Dropdown className="w-[195px]" placeholder="Choose a community" options={options} variant="button" />
          <Input placeholder="Title" />
          <Textarea className="h-[234px]" placeholder="What’s on your mind..." />
        </div>
        <div className="flex justify-end gap-3">
          <Button className="w-[105px] h-10" variant="outline" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button className="w-[105px] h-10" onClick={handleCloseModal}>
            Post
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default HomePageComponent;
