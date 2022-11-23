import React from "react";
import type { NextPage } from "next";
import { UserWrapper } from "./index.style";
import Leads from "../components/leads";
import Profile from "../components/profile";
import Contact from "../components/contact";
import Career from "../components/carrer";
import Prize from "../components/prize";
import Certificate from "../components/certificate";
import Project from "../components/project";
import Skill from "../components/skill";

const UserContainer: NextPage = () => {
  return (
    <section id={`resume`}>
      <UserWrapper>
        <Profile />
        <Leads />
        <Contact />
        <Career />
        <Prize />
        <Certificate />
        <Project />
        <Skill />
      </UserWrapper>
    </section>
  );
};
export default UserContainer;
