import { FC, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";

const Header: FC = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.user);
  const handleClickSignIn = useCallback(() => {
    router.push("/sign-in");
  }, [router]);

  return (
    <div className="fixed top-0 left-0 w-full h-[60px] bg-green-500 flex items-center justify-between px-8">
      <p className="text-xl text-white italic font-castoro">a Board</p>
      {user.username ? (
        <div className="flex items-center gap-5">
          <p className="text-white font-medium">{user.username}</p>
          <Image src="/assets/images/avatar.png" alt="avatar" width={40} height={40} />
        </div>
      ) : (
        <Button className="w-[105px] h-10" onClick={handleClickSignIn}>
          Sign In
        </Button>
      )}
    </div>
  );
};

export default Header;
