import { FC } from "react";
import Image from "next/image";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

const SignInPageComponent: FC = () => {
  return (
    <div className="fixed flex justify-between bg-green-500 min-h-screen w-full">
      <div className="flex items-center justify-center w-full">
        <div className="w-[384px]">
         <p className="text-[28px] text-white font-semibold">Sing in</p>
          <Input className="bg-white w-[384px] mt-10 mb-5" placeholder="Username" />
          <Button className="w-[384px] h-10">Sign In</Button>
        </div>
      </div>
      <div className="flex flex-col gap-[42px] items-center justify-center bg-green-300 min-w-[632px] rounded-tl-[36px] rounded-bl-[36px]">
        <Image src="/assets/images/a-board-logo.png" alt="logo" width={300} height={230} />
        <p className="text-white font-castoro italic text-[28px]">a Board</p>
      </div>
    </div>
  );
};

export default SignInPageComponent;
