import { postSlackLogin } from "@/apis/auth";
import ROUTES from "@/constants/ROUTES";
import {
  deleteTokenInfo,
  setAccessToken,
  setTokenExpiration,
} from "@/utils/authWithStorage";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useSlackLoginMutation = () => {
  const router = useRouter();
  return useMutation(
    ["slackLogin"],
    async ({ code, redirect_uri }: { code: string; redirect_uri: string }) => {
      return await postSlackLogin(code, redirect_uri);
    },
    {
      onSuccess: (data) => {
        const { accessToken, accessExpiredTime } = data;
        setAccessToken(accessToken);
        setTokenExpiration(accessExpiredTime);

        router.replace(ROUTES.MAIN);
      },
      onError: (error) => {},
    },
  );
};

export const useLogoutMutation = () => {
  return { mutate: deleteTokenInfo };
};
