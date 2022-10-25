import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import UserProfile from "../../public/assets/image/user/profile.svg";

const Writer: NextPage = () => {
  return (
    <>
      <section id={`Writer`}>
        <Image
          src={UserProfile}
          alt={`프사입니다`}
          width={`64px`}
          height={`64px`}
          style={{
            borderRadius: "50%",
          }}
        />
        <Link href="/about">J1min</Link>
      </section>
    </>
  );
};
export default Writer;
