import { FC } from "react";
import Menu from "./menu";

const Sidebar: FC = () => {
  return (
    <div className="fixed left-0 w-[280px] h-full py-8 px-4">
      <Menu />
    </div>
  );
};

export default Sidebar;
