import React, { FC, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { Props as ReactModalProps } from "react-modal";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "@/components/ui/button";
import Dropdown from "@/components/ui/dropdown";
import Input from "@/components/ui/input";
import Modal from "@/components/ui/modal";
import Textarea from "@/components/ui/textarea";
import { useAppSelector } from "@/redux/hooks";
import { useGetPostByIdQuery, useUpdatePostMutation } from "@/redux/slice/post";
import { useGetAllTagsQuery } from "@/redux/slice/tag";

const editPostSchema = z.object({
  tag: z.object({ value: z.string().min(1, "tag is required") }),
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
});

interface Props extends ReactModalProps {
  postId: string;
  onRequestClose: () => void;
}

const EditPostModal: FC<Props> = ({ isOpen, onRequestClose: handleCloseModal, postId }) => {
  const router = useRouter();
  const { data: post } = useGetPostByIdQuery(postId);
  const { data: tags } = useGetAllTagsQuery();
  const options = useMemo(() => tags?.data?.map((tag) => ({ label: tag.name, value: tag.id })) ?? [], [tags]);
  const [updatePost] = useUpdatePostMutation();
  const user = useAppSelector((state) => state.user);
  const form = useForm<z.infer<typeof editPostSchema>>({
    resolver: zodResolver(editPostSchema),
  });

  form.setValue("tag", { value: post?.data?.tagId as string });
  form.setValue("title", post?.data?.title as string);
  form.setValue("content", post?.data?.content as string);

  const onSubmit = async (formValue: z.infer<typeof editPostSchema>) => {
    await updatePost({ id: postId, title: formValue.title, content: formValue.content, userId: user?.id as string, tagId: formValue.tag.value });
    router.refresh();
  };

  const handleRequestClose = () => {
    form.reset();
    handleCloseModal();
  };

  return (
    <Modal className="w-[685px] h-[510px]" isOpen={isOpen} onRequestClose={handleRequestClose}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <p className="text-[28px] font-semibold">Edit Post</p>
        <div className="flex flex-col gap-[14px] mt-[30px] mb-[10px]">
          <Controller
            name="tag"
            control={form.control}
            render={({ field }) => <Dropdown {...field} className="w-[195px]" placeholder="Choose a community" options={options} variant="button" />}
          />
          {form.formState.errors.tag && <p className="text-red-500 text-sm">{form.formState.errors.tag.message}</p>}
          <Input placeholder="Title" {...form.register("title")} />
          {form.formState.errors.title && <p className="text-red-500 text-sm">{form.formState.errors.title.message}</p>}
          <Textarea className="h-[234px]" placeholder="What’s on your mind..." {...form.register("content")} />
          {form.formState.errors.content && <p className="text-red-500 text-sm">{form.formState.errors.content.message}</p>}
        </div>
        <div className="flex justify-end gap-3">
          <Button className="w-[105px] h-10" variant="outline" onClick={handleRequestClose}>
            Cancel
          </Button>
          <Button className="w-[105px] h-10" type="submit">
            Post
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EditPostModal;
