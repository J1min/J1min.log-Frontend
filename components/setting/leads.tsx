import React from "react";
import type { NextPage } from "next";
import { UserInput, SettingButton } from "./index.style";
import { postLeads } from "../../function/setting";
import { LeadsFormValue, UserLeadsRequestType } from "../../interface/setting";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const Leads: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LeadsFormValue>();
  const router = useRouter();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        const userData: UserLeadsRequestType = {
          user_id: 1,
          lead_name: data.lead_name,
          started_at: data.started_at,
          ended_at: data.ended_at,
        };
        postLeads(userData);
        router.reload();
      })}
    >
      <UserInput
        type={`text`}
        placeholder={`직책이 뭐였나요?`}
        {...register("lead_name")}
      />
      <UserInput
        type={`text`}
        placeholder={`시작 날짜 (YYYY.MM.DD)`}
        {...register("started_at")}
      />
      <UserInput
        type={`text`}
        placeholder={`끝난 날짜 (YYYY.MM.DD)`}
        {...register("ended_at")}
      />
      <SettingButton>Leads 추가</SettingButton>
    </form>
  );
};
export default Leads;
