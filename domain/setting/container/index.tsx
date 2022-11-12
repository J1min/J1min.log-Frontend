import React from "react";
import type { NextPage } from "next";
import { SettingProvider, SettingTitle } from "./index.style";
import { Line } from "../components/index.style";
import Leads from "../components/leads";
import Script from "../components/script";

const SettingContainer: NextPage = () => {
  return (
    <SettingProvider>
      <SettingTitle>경력, 명언을 추가하는 페이지입니다.</SettingTitle>
      <Script />
      <Line />
      <Leads />
      <Line />
    </SettingProvider>
  );
};
export default SettingContainer;
