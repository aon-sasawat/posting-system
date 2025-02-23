import { FC, useCallback, useState } from "react";
import Button from "@/components/ui/button";
import Dropdown from "@/components/ui/dropdown";
import Input from "@/components/ui/input";
import Modal from "@/components/ui/modal";
import PostList from "@/components/ui/post-list";
import Search from "@/components/ui/search";
import Textarea from "@/components/ui/textarea";

const OurBlogPageComponent: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const posts = [
    {
      id: "1",
      poster: "Wittawat",
      tag: "History",
      title: "The Beginning of the End of the World",
      content: `The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having
    lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer, they are weary. It
    is time for it all to end. The show’s solution to this perpetual happiness-cum-weariness is extinction. When you have had enough, when you are
    utterly sated by love and joy and pleasure, you can walk through a passage to nothingness. And Chidi has had enough.`,
      commentCount: 32,
    },
    {
      id: "2",
      poster: "Wittawat",
      tag: "History",
      title: "The Beginning of the End of the World",
      content: `The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having
    lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer, they are weary. It
    is time for it all to end. The show’s solution to this perpetual happiness-cum-weariness is extinction. When you have had enough, when you are
    utterly sated by love and joy and pleasure, you can walk through a passage to nothingness. And Chidi has had enough.`,
      commentCount: 32,
    },
  ];

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
        <PostList posts={posts} mode="manage" />
      </div>
      <Modal className="w-[685px] h-[510px]" isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <p className="text-[28px] font-semibold">Create Post</p>
        <div className="flex flex-col gap-[14px] mt-[30px] mb-[10px]">
          <Dropdown className="w-[195px]" placeholder="Choose a community" options={[]} variant="button" />
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

export default OurBlogPageComponent;
