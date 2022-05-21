//1) Sum Zero

var numArr = [];

var sum = numArr.reduce(function(total, amount){
    return total + amount
});

console.log(sum)

if (sum === 0) {
    console.log('true the sum is 0')
} else if (sum != 0) {
    console.log('false the sum is not 0')
}
// runtime should be O(1) 

//2) Unique Characters

function isUnique(str) {
    return new Set(str).size == str.length;
}

console.log(isUnique('abc'));    //true
console.log(isUnique('abcabc')); //false
// runtime should be 0(n) linear amounts.

//3) Pangram Sentence

String str = "The five boxing wizard jump quickly."
str = str.toLowerCase();

boolean success = true;
for(char c = 'a';c <='z'; ++c) {
    if(!str.contains(String.valueOf(c))) {
        success = false;
        break;
    }
}

if (success) {
    System.out.println("String contains all alphabets");
} else {
    System.out.println("String Doesn't contain all alphabets")
}
//runtime should be O(n) I like the short sentence. I like the idea that it iterates over sentence
//changes all letter to lower case and then check to see if all alphabet is used.

//4) Longest Word


function findLongestWord(str) {
    var longestWord = str.split('').reduce(function(longest, currentWord) {
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord.length;
}
findLongestWord("Oh, supercalifragilisticexpialidocious Even though the sound of it Is something quite atrocious");
//runtime should be O(n) linear amounts. Thanks Marry Poppins 34 letters is an excited approval of number of letter in a word.
