import { FC } from "react";
import Select, { Props as SelectProps } from "react-select";
import { cva, VariantProps } from "class-variance-authority";
import ChevronDownIcon from "@/assets/svg/chevron-down-icon.svg";
import { cn } from "@/utils/cn";
import { Icon } from "../icon";

const selectVariants = cva("py-2 cursor-pointer z-0", {
  variants: {
    variant: {
      default: "",
      button: "border border-green-100 rounded-lg placeholder-success",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface Props extends SelectProps, VariantProps<typeof selectVariants> {}

const Dropdown: FC<Props> = ({ placeholder, variant, className, ...props }) => {
  const customStyles = {
    control: () => ({
      maxHeight: "40px",
      fontWeight: "semibold",
    }),
    option: () => ({
      backgroundColor: "white",
      color: "black",
      fontWeight: "semibold",
      padding: "8px 16px",
      "&:hover": {
        backgroundColor: "#D8E9E4",
      },
    }),
    dropdownIndicator: () => ({
      display: "none",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  return (
    <Select
      className={cn(selectVariants({ variant, className }))}
      placeholder={
        <div className={cn("flex items-center justify-center gap-[5px] font-ibm font-semibold text-sm text-black", variant === "button" && "text-success")}>
          {placeholder} <Icon svg={ChevronDownIcon} width={15} strokeWidth={1.7} className={cn("text-black", variant === "button" && "text-success")} />
        </div>
      }
      styles={customStyles}
      isSearchable={false}
      {...props}
    />
  );
};

export default Dropdown;
