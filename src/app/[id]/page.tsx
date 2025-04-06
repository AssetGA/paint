import React from "react";
import Galery from "../components/section/Galery";
import WorkDetailCard from "../components/section/WorkDetailCard";

type Props = {};

const Work = (props: Props) => {
  return (
    <div className="px-5">
      <WorkDetailCard />
      <Galery />
    </div>
  );
};

export default Work;
