import React, { FC } from "react";
import { Props as ReactModalProps } from "react-modal";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { useDeletePostMutation } from "@/redux/slice/post";

interface Props extends ReactModalProps {
  postId: string;
  onRequestClose: () => void;
}

const DeletePostModal: FC<Props> = ({ isOpen, onRequestClose: handleCloseModal, postId }) => {
  const router = useRouter();
  const [deletePost] = useDeletePostMutation();

  const onSubmit = async () => {
    await deletePost(postId);
    router.refresh();
  };

  return (
    <Modal className="w-[400px] h-[248px] px-6 py-[30px]" isOpen={isOpen} onRequestClose={handleCloseModal}>
      <p className="font-semibold text-lg text-center">Please confirm if you wish to delete the post</p>
      <p className="text-[#475467] text-center mt-2 mb-8">Are you sure you want to delete the post? Once deleted, it cannot be recovered.</p>
      <div className="flex items-center justify-center gap-3">
        <Button variant="outline-secondary" className="w-[170px] h-11" onClick={handleCloseModal}>
          Cancel
        </Button>
        <Button variant="danger" className="w-[170px] h-11" onClick={onSubmit}>
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default DeletePostModal;
