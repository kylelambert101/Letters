import * as React from "react";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { getRepeatCounts } from "../Utilities";
import RepeatStat from "./RepeatStat";
type Props = {
  sentence: string;
};
const Stats = (props: Props) => {
  const { sentence } = props;
  console.log(JSON.stringify(getRepeatCounts(sentence), undefined, 4));
  return (
    <Stack>
      <div>{`Length: ${sentence.length}`}</div>
      {getRepeatCounts(sentence).filter((item) => item.count > 1).length > 0 ? (
        <>Repeats:</>
      ) : (
        <></>
      )}

      <div>
        {getRepeatCounts(sentence)
          .filter((item) => item.count > 1)
          .map((item) => (
            <RepeatStat letter={item.letter} count={item.count} />
          ))}
      </div>
    </Stack>
  );
};

export default Stats;
