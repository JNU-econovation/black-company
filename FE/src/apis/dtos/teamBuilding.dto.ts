import type {
  InputStatus,
  TeamBuildingInfo,
  TeamBuildingResult,
  TeamBuildingResultList,
  UserInputStatusInfo,
} from "@/types/teamBuilding";

export class TeamBuildingInfoDto {
  public readonly title: string;
  public readonly content: string;

  constructor(data: TeamBuildingInfo) {
    this.title = data.title;
    this.content = data.content;
  }
}

export class UserInputStatusInfoDto {
  public readonly status: InputStatus;

  constructor(data: UserInputStatusInfo) {
    this.status = data.status;
  }
}

export class TeamBuildingResultListDto {
  public readonly result: TeamBuildingResult;

  constructor(data: TeamBuildingResultList) {
    this.result = data.result;
  }
}

export class TeamBuildingIdDto {
  public readonly teamBuildingId: number;

  constructor(data: { teamBuildingId: number }) {
    this.teamBuildingId = data.teamBuildingId;
  }
}