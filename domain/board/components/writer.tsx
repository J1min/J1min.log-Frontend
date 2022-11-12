import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import UserProfile from "../../assets/image/user/profile.svg";
import { WriterContainer, WriterName } from "./writer.style";

const Writer: NextPage = () => {
  return (
    <section id={`writer`}>
      <WriterContainer>
        <Image
          src={UserProfile}
          alt={`프사입니다`}
          width={`64px`}
          height={`64px`}
          style={{
            borderRadius: "50%",
          }}
        />
        <Link href="/about">
          <WriterName>J1min</WriterName>
        </Link>
      </WriterContainer>
    </section>
  );
};
export default Writer;
