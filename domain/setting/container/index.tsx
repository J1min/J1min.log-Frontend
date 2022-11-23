import React from "react";
import type { NextPage } from "next";
import { SettingWrapper, SettingTitle } from "./index.style";
import { Line } from "../components/index.style";
import Leads from "../components/leads";
import Script from "../components/script";

const SettingContainer: NextPage = () => {
  return (
    <SettingWrapper>
      <SettingTitle>경력, 명언을 추가하는 페이지입니다.</SettingTitle>
      <Script />
      <Line />
      <Leads />
      <Line />
    </SettingWrapper>
  );
};
export default SettingContainer;
