import { FC, useCallback, useMemo, useState } from "react";
import Button from "@/components/ui/button";
import Dropdown from "@/components/ui/dropdown";
import PostList from "@/components/ui/post-list";
import Search from "@/components/ui/search";
import { useGetAllPostsQuery } from "@/redux/slice/post";
import { useGetAllTagsQuery } from "@/redux/slice/tag";
import CreatePostModal from "./modal/create-post-modal";

const HomePageComponent: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: tags } = useGetAllTagsQuery();
  const options = useMemo(() => tags?.data?.map((tag) => ({ label: tag.name, value: tag.id })) ?? [], [tags]);
  const { data: posts } = useGetAllPostsQuery();
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
      <CreatePostModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </div>
  );
};

export default HomePageComponent;
