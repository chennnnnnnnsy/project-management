import React from "react";
import DefaultEmpty from "@/components/DefaultEmpty";

import { ProjectGroupRes } from "@/api/project";
import Css from "@/styles/modules/profile.module.scss";

interface IProps {
  list: ProjectGroupRes[];
  texts: IProfileLT;
  isEmpty: boolean;
  itemClick: (id: string) => void;
}

const GroupList: React.FC<IProps> = ({ list, texts, itemClick }) => {
  const classMap: IObject = {
    start: "gray-bg",
    develop: "orange-bg",
    maintaining: "blue-bg",
    end: "red-bg",
  };

  const getClass = (status: string) => {
    const name = classMap[status];
    return Css.status + " " + name;
  };

  return (
    <div className={Css.list}>
      {list.map((vo, index) => {
        return (
          <div
            onClick={() => itemClick(vo.id)}
            key={vo.groupName + index}
            className={Css.item}
          >
            <div className={Css.col1}>
              <p className={Css.groupName}>{vo.groupName}</p>
              <p className={getClass(vo.status)}>{texts[vo.status]}</p>
            </div>
            <p className={Css.texts}>
              {texts.version}：v{vo.version}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default DefaultEmpty<IProps>(GroupList);
