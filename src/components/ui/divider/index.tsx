import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

const Divider: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return <div className={cn("w-full border-b-[0.5px] border-gray-100", className)} {...props} />;
};

export default Divider;
