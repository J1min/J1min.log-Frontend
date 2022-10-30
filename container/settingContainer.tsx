import React from "react";
import type { NextPage } from "next";
import Script from "../components/setting/script";
import Leads from "../components/setting/leads";
import { Setting, SettingTitle } from "./settingContainer.style";
import { Line } from "../components/setting/index.style";

const SettingContainer: NextPage = () => {
  return (
    <Setting>
      <SettingTitle>경력, 명언을 추가하는 페이지입니다.</SettingTitle>
      <Script />
      <Line />
      <Leads />
      <Line />
    </Setting>
  );
};
export default SettingContainer;
