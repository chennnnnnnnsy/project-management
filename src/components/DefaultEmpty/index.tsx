import React from "react";

import { Empty } from "antd";

interface IProps {
  isEmpty: boolean;
}

function DefaultEmpty<T extends IProps>(fc: React.FC<T>) {
  return (props:T) => {
    return props.isEmpty ? (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    ) : (
      fc(props)
    );
  };
}

export default DefaultEmpty;
