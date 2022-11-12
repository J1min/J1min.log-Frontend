import React from "react";
import type { NextPage } from "next";
import { Resume } from "./index.style";
import Leads from "../components/leads";
import Profile from "../components/profile";
import Contact from "../components/contact";
import Career from "../components/carrer";
import Prize from "../components/prize";
import Certificate from "../components/certificate";
import Project from "../components/project";
import Skill from "../components/skill";

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
