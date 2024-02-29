function translatePigLatin(str) {
  let words= str.split(" ");
  
function translateWord(word) {
  if (word == "" || word.length === 1){
    return "input can't be translated."
  }
  let vowels = ["a","e","i","o","u","A","E","I","O","U"];
  function isVowel(letter) {
    return vowels.indexOf(letter);
  }
  for (let i = 0; i < word.length; i++) {
    let firstLetter = word[0];
    let individualLetter = word[i];
    if (vowels.indexOf(firstLetter) === -1 && i === 1) {
      return word.slice(1) + firstLetter + "ay";
    }
    if (vowels.indexOf(individualLetter) != -1 && i === 0) {
      return word + "way";
    }
    if (vowels.indexOf(individualLetter) != -1) {
      return word.slice(i) + word.slice(0, i) + "ay";
    }
  }
  return word + "ay";
}
let translatedWords = words.map(translateWord);
return translatedWords.join(" ");
}
console.log(translatePigLatin(prompt()));