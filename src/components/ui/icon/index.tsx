import { FC, SVGProps } from "react";

interface IIconProps extends SVGProps<SVGSVGElement> {
  svg: FC<SVGProps<SVGSVGElement>>;
}

const Icon: FC<IIconProps> = ({ svg, stroke = "currentColor", ...props }) => {
  const Svg = svg;

  return <Svg stroke={stroke} {...props} />;
};
Icon.displayName = "Icon";

export { Icon };
