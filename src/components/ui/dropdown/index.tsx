import { FC } from "react";
import Select, { Props } from "react-select";
import ChevronDownIcon from "@/assets/svg/chevron-down-icon.svg";
import { Icon } from "../icon";

const Dropdown: FC<Props> = ({ placeholder, ...props }) => {
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
        backgroundColor: "black",
        color: "white",
      },
    }),
    dropdown: () => ({
      backgroundColor: "red",
    }),
    placeholder: () => ({
      color: "black",
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
      className="w-32 px-[14px] py-2 cursor-pointer z-0"
      placeholder={
        <div className="flex items-center justify-center gap-[5px] font-ibm font-semibold text-sm">
          {placeholder} <Icon svg={ChevronDownIcon} width={15} strokeWidth={1.7} />
        </div>
      }
      styles={customStyles}
      isSearchable={false}
      {...props}
    />
  );
};

export default Dropdown;
