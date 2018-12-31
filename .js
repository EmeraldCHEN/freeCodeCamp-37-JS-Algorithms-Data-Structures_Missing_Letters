/***************   Solution #1   ***********************************************************************************************/

function fearNotLetter(str) {
   for(let i = 0; i < str.length-1; i++){
      if(str.charCodeAt(i+1) - str.charCodeAt(i) !== 1){// Also could check if the difference in char codes between adjacent characters in str is more than 1
         return String.fromCharCode(str.charCodeAt(i+1) - 1); // Return the missing character( -1 from where the gap was detected)
      }
   }   
   return undefined;   
}
fearNotLetter("abcdeg"); // return "f"


 
/***************   Solution #2   ***********************************************************************************************/

function fearNotLetter(str){
    for(let i = 0; i < str.length; i++){
        if (str.charCodeAt(i) !== str.charCodeAt(0) + i) { //  If the UTF-16 code of encountered character is not equal to first character's code + its index, 
                                                           //  hence the character at that index has been escaped 
            return String.fromCharCode(str.charCodeAt(i) - 1);
        }
    }
    return undefined;
}




// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters/
