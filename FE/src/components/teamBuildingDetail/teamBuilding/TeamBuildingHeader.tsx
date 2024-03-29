"use client";

import Title from "@/components/common/Title";
import {
  useCompleteTeamBuildingMutation,
  useDeleteTeamBuildingMutation,
} from "@/hooks/query/useTeamBuildingQuery";
import { AccessRight } from "@/types/program";

interface TeamBuildingHeaderProps {
  title: string;
  accessRight: AccessRight;
}

const TeamBuildingHeader = ({
  title,
  accessRight,
}: TeamBuildingHeaderProps) => {
  return (
    <section className="flex justify-between border-b-2 py-4">
      <Title text={title} />
      <div className="flex gap-6">
        {accessRight === "read_only" && <ProgressDisplay />}
        {accessRight === "edit" && <CloseBtn />}
      </div>
    </section>
  );
};

const ProgressDisplay = () => {
  return (
    <div className="flex items-center gap-3">
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-action-20 opacity-40"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-action-20"></span>
      </span>
      <p className="text-lg font-bold text-action-20">진행중</p>
    </div>
  );
};

const CloseBtn = () => {
  const { mutate: completeTeamBuilding } = useCompleteTeamBuildingMutation();
  const { mutate: deleteTeamBuilding } = useDeleteTeamBuildingMutation();

  const handleCompleteButtonClick = () => {
    if (confirm("팀빌딩을 완료하시겠습니까?")) {
      completeTeamBuilding();
    }
  };

  const handleDeleteButtonClick = () => {
    if (confirm("팀빌딩을 삭제하시겠습니까?")) {
      deleteTeamBuilding();
    }
  };

  return (
    <>
      <button
        className="text-lg font-bold text-gray-30 transition-colors duration-300 hover:text-stroke-30"
        onClick={handleCompleteButtonClick}
      >
        완료하기
      </button>
      <button
        className="text-lg font-bold text-gray-30 transition-colors duration-300 hover:text-error"
        onClick={handleDeleteButtonClick}
      >
        삭제하기
      </button>
    </>
  );
};

export default TeamBuildingHeader;
