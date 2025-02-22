import { FC, InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
  return <input className={cn("border rounded-lg bg-transparent px-[14px] py-[10px]", className)} {...props} />;
};

export default Input;
