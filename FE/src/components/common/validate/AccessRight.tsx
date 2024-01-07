"use client";

import MESSAGE from "@/constants/MESSAGE";
import ROUTES from "@/constants/ROUTES";
import { useGetProgramAccessRight } from "@/hooks/query/useProgramQuery";
import { useRouter } from "next/navigation";

const AccessRightValidate = ({ programId }) => {
  const router = useRouter();
  const { data, isLoading, isError } = useGetProgramAccessRight(programId);

  if (isLoading) {
    return <></>;
  }
  if (isError) {
    return <></>;
  }

  if (data.accessRight !== "edit") {
    alert(MESSAGE.EDIT_DISABLED.NO_RIGHT);
    router.push(ROUTES.MAIN);
  }

  return <></>;
};
export default AccessRightValidate;
