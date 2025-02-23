import { FC } from "react";
import ReactModal, { Props } from "react-modal";
import CrossIcon from "@/assets/svg/cross-icon.svg";
import { cn } from "@/utils/cn";
import { Icon } from "../icon";

const Modal: FC<Props> = ({ className, children, onRequestClose, ...props }) => {
  return (
    <ReactModal
      className={cn("relative bg-white p-5 rounded-xl", className)}
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50"
      onRequestClose={onRequestClose}
      {...props}
    >
      <Icon svg={CrossIcon} width={13} height={13} strokeWidth={2} className="absolute top-4 right-4 cursor-pointer" onClick={onRequestClose} />
      {children}
    </ReactModal>
  );
};

export default Modal;
