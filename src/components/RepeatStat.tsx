import * as React from "react";

type Props = {
  letter: string;
  count: number;
};

const RepeatStat = (props: Props) => {
  const { letter, count } = props;
  return <div>{`${count} ${letter}'s`}</div>;
};

export default RepeatStat;
