import { FC, InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

const Textarea: FC<InputHTMLAttributes<HTMLTextAreaElement>> = ({ className, ...props }) => {
  return <textarea className={cn("border rounded-lg bg-transparent px-[14px] py-[10px] resize-none", className)} {...props} />;
};

export default Textarea;
