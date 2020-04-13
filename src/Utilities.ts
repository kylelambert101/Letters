export const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");

export function getUnusedLetters(sentence: string): string[] {
  return alphabet.filter((letter) => !sentence.includes(letter));
}

const caseSensitive = false;
export function isLetterInSentence(letter: string, sentence: string) {
  return caseSensitive
    ? sentence.includes(letter)
    : sentence.toLowerCase().includes(letter.toLowerCase());
}

function onlyUnique(value: string, index: number, self: string[]) {
  return self.indexOf(value) === index;
}

export function getRepeatCounts(sentence: string) {
  let letters = sentence
    .split("")
    .filter(onlyUnique)
    .filter((item) => alphabet.includes(item));
  return letters
    .map((letter: string) => ({
      letter,
      count: (sentence.match(new RegExp(letter, "g")) || []).length,
    }))
    .sort((a, b) => (a.count > b.count ? -1 : 1));
}
