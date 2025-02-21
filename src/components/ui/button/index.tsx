import { FC, HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonVariants = cva("font-ibm font-semibold rounded-lg text-sm", {
  variants: {
    variant: {
      default: "bg-success text-white",
      outline: "bg-white text-success border border-success",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
interface props extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button: FC<props> = ({ variant, className, ...props }) => {
  return <button className={cn(buttonVariants({ variant, className }))} {...props} />;
};

export default Button;
