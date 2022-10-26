import React from "react";
import type { NextPage } from "next";
import { UserInput, SettingButton } from "./index.style";
import { postLeads } from "../../function/setting";
import { UserLeadsRequestType } from "../../interface/setting";

const Leads: NextPage = () => {
  const [userData, setUserData] = React.useState<UserLeadsRequestType>({
    lead_name: "",
    started_at: "",
    ended_at: "",
    user_id: 1,
  });

  const onSubmitName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => {
      return { ...prev, lead_name: event.target.value };
    });
  };

  const onSubmitStartedAt = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => {
      return { ...prev, started_at: event.target.value };
    });
  };

  const onSubmitEndedAt = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => {
      return { ...prev, ended_at: event.target.value };
    });
  };

  return (
    <main>
      <UserInput
        type={`text`}
        placeholder={`직책이 뭐였나요?`}
        onChange={onSubmitName}
      />
      <UserInput
        type={`text`}
        placeholder={`시작 날짜 (YYYY.MM.DD)`}
        onChange={onSubmitStartedAt}
      />
      <UserInput
        type={`text`}
        placeholder={`끝난 날짜 (YYYY.MM.DD)`}
        onChange={onSubmitEndedAt}
      />
      <SettingButton
        onClick={() => {
          postLeads(userData);
        }}
      >
        Leads 추가
      </SettingButton>
    </main>
  );
};
export default Leads;
