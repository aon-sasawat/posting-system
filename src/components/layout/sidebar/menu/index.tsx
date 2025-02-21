import { FC, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BlogIcon from "@/assets/svg/blog-icon.svg";
import HomeIcon from "@/assets/svg/home-icon.svg";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/utils/cn";

const Menu: FC = () => {
  const pathname = usePathname();
  const menuList = useMemo(
    () => [
      {
        name: "Home",
        icon: HomeIcon,
        path: "/",
      },
      {
        name: "Our Blog",
        icon: BlogIcon,
        path: "/our-blog",
      },
    ],
    [],
  );

  return menuList.map(({ name, icon, path }) => {
    const isActive = pathname === path;

    return (
      <Link key={name} href={path} className={cn("flex items-center gap-3 px-3 py-2 text-green-500", isActive ? " font-extrabold" : " font-medium")}>
        <Icon svg={icon} strokeWidth={isActive ? 2 : 1.5} width={18} height={18} />
        {name}
      </Link>
    );
  });
};

export default Menu;
