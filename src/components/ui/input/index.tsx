import { FC, InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const inputVariants = cva("border rounded-lg bg-transparent px-[14px] py-[10px]", {
  variants: {
    variant: {
      default: "",
      outline: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
interface props extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}

const Input: FC<props> = ({ variant, className, ...props }) => {
  return <input className={cn(inputVariants({ variant, className }))} {...props} />;
};

export default Input;
