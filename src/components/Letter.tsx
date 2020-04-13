import * as React from "react";
import { Text } from "office-ui-fabric-react/lib/Text";
import { isLetterInSentence } from "../Utilities";

type Props = {
  letter: string;
  sentence: string;
};

const Letter = (props: Props) => {
  const { letter, sentence } = props;

  const style = isLetterInSentence(letter, sentence)
    ? { color: "honeydew" }
    : { color: "red" };
  return (
    <>
      <Text variant={"mega"} style={style}>
        {letter}
      </Text>
    </>
  );
};

export default Letter;
