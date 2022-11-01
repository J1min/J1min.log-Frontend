import React from "react";
import type { NextPage } from "next";
import Profile from "../components/user/profile";
import Leads from "../components/user/leads";
import Contact from "../components/user/contact";
import Career from "../components/user/carrer";
import Prize from "../components/user/prize";
import Certificate from "../components/user/certificate";
import Project from "../components/user/project";
import Skill from "../components/user/skill";
import { Resume } from "./resumeContainer.style";

const ResumeContainer: NextPage = () => {
  return (
    <section id={`resume`}>
      <Resume>
        <Profile />
        <Leads />
        <Contact />
        <Career />
        <Prize />
        <Certificate />
        <Project />
        <Skill />
      </Resume>
    </section>
  );
};
export default ResumeContainer;
