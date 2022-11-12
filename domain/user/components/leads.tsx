import React from "react";
import type { NextPage } from "next";
import { Li, Title, Ul } from "./index.style";
import { UserLeadsType } from "../interface";
import { getLeads } from "../api";

const Leads: NextPage = () => {
  const [leadsData, setLeadsData] = React.useState<UserLeadsType[] | undefined>(
    []
  );
  React.useEffect(() => {
    getLeads().then((response) => {
      setLeadsData(response.userData);
    });
  }, []);
  return (
    <section id={`leads`}>
      <Title>🏅 Leads</Title>
      <Ul>
        {leadsData?.map((data, idx) => {
          return (
            <Li key={idx}>
              {data.lead_name}
              <Ul>
                <Li>
                  {data.started_at} ~ {data.ended_at}
                </Li>
              </Ul>
            </Li>
          );
        })}
      </Ul>
    </section>
  );
};
export default Leads;
