function countWords(text) {
  const words = text.split(" ");
  const wordCount = new Map();

  for (let word of words) {
    if (wordCount.has(word)) {
      wordCount.set(word, wordCount.get(word) + 1);
    } else {
      wordCount.set(word, 1);
    }
  }

  return wordCount;
}

const text = "PWSKILLS IS THE BEST SCHOOL , THE HIGH";
const wordCount = countWords(text);

for (let [word, count] of wordCount) {
  console.log(`${word}: ${count}`);
}
