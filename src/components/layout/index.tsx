import { FC, HTMLAttributes } from "react";
import Header from "@/components/layout/header";
import Sidebar from "./sidebar";

const Layout: FC<HTMLAttributes<HTMLElement>> = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="mt-[60px] ml-[280px] pt-[35px] pl-[40px]">{children}</div>
    </>
  );
};

export default Layout;
