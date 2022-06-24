import React from "react";
import { ProjectGroupRes } from "@/api/project";

import Css from "@/styles/modules/profile.module.scss";

interface IProps {
  list: ProjectGroupRes[];
}

const GroupList: React.FC<IProps> = ({ list }) => {
  return (
    <>
      {list.map((vo, index) => {
        return (
          <div key={vo.groupName + index} className={Css.item}>
            <p>{vo.groupName}</p>
            <p>{vo.status}</p>
            <p>{vo.version}</p>
          </div>
        );
      })}
    </>
  );
};

export default GroupList;
