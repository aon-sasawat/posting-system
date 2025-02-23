import { FC, useCallback } from "react";
import { useRouter } from "next/navigation";
import LeftArrow from "@/assets/svg/left-arrow-icon.svg";
import Button from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import PostDetail from "@/components/ui/post-detail";

interface Props {
  id: string;
}

const PostDetailPageComponent: FC<Props> = () => {
  const router = useRouter();
  const comments = [
    {
      id: "1",
      commentator: "Wittawat",
      content:
        "Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed sagittis convallis auctor.",
    },
    {
      id: "2",
      commentator: "Wittawat",
      content:
        "Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed sagittis convallis auctor.",
    },
    {
      id: "3",
      commentator: "Wittawat",
      content:
        "Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed sagittis convallis auctor.",
    },
    {
      id: "4",
      commentator: "Wittawat",
      content:
        "Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed sagittis convallis auctor.",
    },
    {
      id: "5",
      commentator: "Wittawat",
      content:
        "Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed sagittis convallis auctor.",
    },
    {
      id: "6",
      commentator: "Wittawat",
      content:
        "Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed sagittis convallis auctor.",
    },
  ];
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
          poster="Zach"
          tag="History"
          title="The Big Short War"
          content="Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid other kids loved to hate and just the type to make a big wager with no margin for error. But on the night before the S.A.T., his father took pity on him and canceled the bet. “I would’ve lost it,” Ackman concedes. He got a 780 on the verbal and a 750 on the math. “One wrong on the verbal, three wrong on the math,” he muses. “I’m still convinced some of the questions were wrong."
          comments={comments}
        />
      </div>
    </div>
  );
};

export default PostDetailPageComponent;
