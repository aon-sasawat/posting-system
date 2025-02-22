import { FC } from "react";
import Button from "@/components/ui/button";
import Dropdown from "@/components/ui/dropdown";
import PostList from "@/components/ui/post-list";
import Search from "@/components/ui/search";

const HomePageComponent: FC = () => {
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
    {
      id: "3",
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
      id: "4",
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
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full">
      <div className="flex justify-between w-[798px]">
        <Search />
        <Dropdown
          placeholder="Community"
          options={[
            { value: "All", label: "All" },
            { value: "Community", label: "Community" },
          ]}
        />
        <Button className="w-[105px] h-10">Create +</Button>
      </div>
      <div className="bg-white rounded-xl w-[798px]">
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default HomePageComponent;
