import React from "react";
import type { NextPage } from "next";
import {
  DangerZone,
  UserInput,
  SettingButton,
  Line,
  DangerZoneTitle,
} from "./index.style";
import { useForm } from "react-hook-form";
import { postAllScriptDataButton } from "../api";

const Script: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  return (
    <main>
      <form onSubmit={handleSubmit((data) => {})}>
        <UserInput
          type={`text`}
          {...register("script")}
          placeholder={`대사가 뭔가요?`}
        />
        <UserInput
          type={`text`}
          {...register("author")}
          placeholder={`말한 사람은 누구인가요?`}
        />
        <SettingButton>명언 데이터 개별 추가</SettingButton>
      </form>
      <Line />
      <DangerZone>
        <DangerZoneTitle>Danger</DangerZoneTitle>
        <SettingButton onClick={postAllScriptDataButton}>
          명언 데이터 전체 추가
        </SettingButton>
      </DangerZone>
    </main>
  );
};

export default Script;
