/**
 * 프로그램 정보 조회
 */

import API from "../constants/API";
import { AttendStatus } from "../types/member";
import {
  ProgramCategory,
  ProgramInfo,
  ProgramListInfo,
  ProgramStatus,
} from "../types/program";
import { https } from ".";

interface GetProgramByIdResponse {
  data: ProgramInfo;
}

export const getProgramById = async (programId: number) => {
  const { data } = await https<GetProgramByIdResponse>({
    url: API.PROGRAM.GET(programId),
  });
  return data.data;
};

/**
 * 프로그램 리스트 조회
 */

interface GetProgramListResponse {
  data: ProgramListInfo[];
}
export const getProgramList = async (
  category: ProgramCategory,
  programStatus: ProgramStatus,
  size: number,
  page: number,
) => {
  const { data } = await https<GetProgramListResponse>({
    url: API.PROGRAM.GET_LIST,
    method: "GET",
    params: {
      category,
      programStatus,
      size,
      page,
    },
  });
  return data.data;
};

/**
 * 프로그램 삭제
 */

export const deleteProgram = async (programId: number) => {
  const { data } = await https({
    url: API.PROGRAM.DELETE(programId),
    method: "DELETE",
  });
  return data.data;
};

/**
 * 프로그램 생성 및 대상자 선정
 */

interface PostProgramRequest extends Omit<ProgramInfo, "programId"> {
  members: { memberId: string }[];
}

export const postProgram = async (body: PostProgramRequest) => {
  const { data } = await https({
    url: API.PROGRAM.CREATE,
    method: "POST",
    data: body,
  });
  return data.data;
};

/**
 * 프로그램 수정 및 참여 대상자/참여 상태 수정
 */

interface PatchProgramRequest extends Omit<ProgramInfo, "programId"> {
  members: {
    memberId: string;
    beforeAttendStatus: AttendStatus;
    afterAttendStatus: AttendStatus;
  }[];
}

export const patchProgram = async (
  programId: number,
  body: PatchProgramRequest,
) => {
  const { data } = await https({
    url: API.PROGRAM.UPDATE(programId),
    method: "PATCH",
    data: body,
  });
  return data.data;
};
