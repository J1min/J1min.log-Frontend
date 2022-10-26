import React from "react";
import type { NextPage } from "next";
import Script from "../components/setting/script";
import Leads from "../components/setting/leads";
import { Setting } from "./settingContainer.style";

const SettingContainer: NextPage = () => {
  return (
    <Setting>
      <Script />
      <Leads />
    </Setting>
  );
};
export default SettingContainer;
