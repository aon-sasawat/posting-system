import { FC, InputHTMLAttributes } from "react";
import SearchIcon from "@/assets/svg/search-icon.svg";
import { cn } from "@/utils/cn";
import { Icon } from "../icon";

const Search: FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
  return (
    <div className={cn("border border-green-100 flex items-center gap-2 rounded-lg px-[14px] py-[10px] w-[535px] h-10", className)}>
      <Icon svg={SearchIcon} strokeWidth={1.6} width={15} height={15} />
      <input className="bg-transparent border-none outline-none placeholder-placeholder w-full" placeholder="Search" {...props} />
    </div>
  );
};

export default Search;
