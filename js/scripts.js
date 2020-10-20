const sentence = prompt("What is your sentence?");
//alert(sentence);

function lettersToUpper(string) {
  const firstLetter = string.charAt(0);
  const lastLetter = string.charAt(string.length - 1);

  return firstLetter.toUpperCase() + lastLetter.toUpperCase();
}

function switchLetters(string) {
  return string.charAt(1) + string.charAt(0);
}

function newSentence(string, fullSentence) {
  return fullSentence + string;
}

function middleLetter(string, sentence) {
  return sentence.charAt(sentence.length / 2) + string;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const upperLetters = lettersToUpper(sentence);
//alert(upperLetters);

const switchedLetters = switchLetters(upperLetters);
//alert(switchedLetters);

const bigSentence = newSentence(switchedLetters, sentence);
//alert(bigSentence);

const biggerSentence = middleLetter(bigSentence, sentence);
//alert(biggerSentence);

const reversed = reverseString(biggerSentence);
//alert(reversed);

$(document).ready(function() {
  $(".click-me").click(function() {
    $(".original").slideToggle();
    $(".sentence").html(sentence);
  });
  $(".title").click(function() {
    $(".new").slideToggle();
    $(".sentence").html(reversed);
  });
});