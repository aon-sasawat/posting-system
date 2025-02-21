import { FC } from "react";
import Button from "@/components/ui/button";

const Header: FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[60px] bg-green-500 flex items-center justify-between px-8">
      <p className="text-xl text-white italic font-castoro">a Board</p>
      <Button className="w-[105px] h-10">Sign In</Button>
    </div>
  );
};

export default Header;
