import { FC, useCallback, useMemo, useState } from "react";
import Button from "@/components/ui/button";
import Dropdown from "@/components/ui/dropdown";
import CreatePostModal from "@/components/ui/modal/create-post-modal";
import PostList from "@/components/ui/post-list";
import Search from "@/components/ui/search";
import { useAppSelector } from "@/redux/hooks";
import { useGetPostByUserIdQuery } from "@/redux/slice/post";

const OurBlogPageComponent: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useAppSelector((state) => state.user);
  const { data: posts } = useGetPostByUserIdQuery(user?.id as string);
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
        <Dropdown
          placeholder="Community"
          options={[
            { value: "All", label: "All" },
            { value: "Community", label: "Community" },
          ]}
          className="w-32 px-[14px]"
        />
        <Button className="w-[105px] h-10" onClick={handleClickCreatePost}>
          Create +
        </Button>
      </div>
      <div className="bg-white rounded-xl w-[798px]">
        <PostList posts={postList} mode="manage" />
      </div>
      <CreatePostModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </div>
  );
};

export default OurBlogPageComponent;
