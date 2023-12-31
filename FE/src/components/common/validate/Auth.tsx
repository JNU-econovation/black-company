"use client";

import ROUTES from "@/constants/ROUTES";
import { deleteTokenInfo } from "@/utils/authWithStorage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthValidate = () => {
  const router = useRouter();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const tokenExpiration = localStorage.getItem("tokenExpiration");

    if (!accessToken || !tokenExpiration) {
      deleteTokenInfo();
      router.push(ROUTES.LOGIN);
    }
  }, []);

  return <></>;
};
export default AuthValidate;
