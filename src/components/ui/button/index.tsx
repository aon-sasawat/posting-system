import { FC, HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonVariants = cva("font-ibm font-semibold rounded-lg text-sm", {
  variants: {
    variant: {
      default: "bg-success text-white",
      danger: "bg-danger text-white",
      outline: "bg-white text-success border border-success hover:bg-success hover:text-white transition-colors",
      "outline-secondary": "bg-white text-placeholder border border-[#DADADA] hover:bg-placeholder hover:text-white transition-colors",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
interface Props extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button: FC<Props> = ({ variant, className, ...props }) => {
  return <button className={cn(buttonVariants({ variant, className }))} {...props} />;
};

export default Button;
