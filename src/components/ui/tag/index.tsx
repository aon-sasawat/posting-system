import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

const Tag: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return <div className={cn("inline-block rounded-2xl bg-[#F3F3F3] text-[#4A4A4A] text-xs text-center font-ibm px-2 py-1", className)} {...props} />;
};

export default Tag;
