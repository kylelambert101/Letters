import React from "react";
import { alphabet, getUnusedLetters } from "../Utilities";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import Letter from "./Letter";
import Stats from "./Stats";

const LetterGame = () => {
  /* How's about we have a horizontal stack of letters - I will probably want to 
     map an array of letters to an array of like "LetterItem" components. 
     Each one will need a letter prop.

     If I use redux to manage the state (sentence), then I can connect each letter and
     check whether the redux state.sentence contains the props.letter

     Below the stack, I'd have the text field that sets the sentence. 

     Below that, I have a couple of ideas for later
        - Leaderboard - this would require some kind of persistent storage
        - Suggestions - words that are dense with unused letters


    How about instead:
      - sentence in local state
      - usedLetters = local state array/string that gets passed to LetterItems
      - allLetters as a defined/exported constant somewhere

      Yeah this should be simpler than redux. 
      */

  const [sentence, setSentence] = React.useState("");

  const handleSentenceChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    setSentence(newValue || "");
  };

  console.log(JSON.stringify(alphabet, undefined, 4));
  return (
    <Stack style={{ margin: "5em" }}>
      <Stack
        horizontal
        horizontalAlign="space-between"
        style={{ marginBottom: "5em" }}
      >
        {alphabet.map((letter: string) => (
          <Letter letter={letter} sentence={sentence} />
        ))}
      </Stack>
      <TextField value={sentence} onChange={handleSentenceChange} />
      <Stats sentence={sentence} />
    </Stack>
  );
};

export default LetterGame;
