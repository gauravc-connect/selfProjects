//palindrom
/*const checkPalindrome = (str) => {
   const reverseStr = str.split('').reverse().join('');
   console.log("Reversed string is :",reverseStr);
   return str === reverseStr;
}

console.log(checkPalindrome("eabcdcbae"));*/

//Convert each word's first letter to caps
// my name is gaurav

const capitalizeFistLetter = (str) => {
    console.log("The original words were =>", str);

    const wordsArray = str.split(' ');

    console.log("words",wordsArray);

    const result = wordsArray.map( word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ');

    return result;
}

console.log(capitalizeFistLetter("my name is gaurav"));