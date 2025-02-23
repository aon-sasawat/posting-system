import { FC, useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/slice/user";

const InitialState: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const id = localStorage.getItem("userId");
    const username = localStorage.getItem("username");

    if (id && username) {
      dispatch(setUser({ id, username }));
    }
  }, [dispatch]);

  return null;
};

export default InitialState;
