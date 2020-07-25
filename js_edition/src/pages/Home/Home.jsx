import React from "react";

import useMembersAbsences from "../../hooks/useMembersAbsences";

import * as Style from "./Home.style";

export default function Home() {
  const { members } = useMembersAbsences();

  console.log(members);

  return <Style.MainWrapper>Home</Style.MainWrapper>;
}
