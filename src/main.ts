function checkPalindrome( palindrome: string){
   let original: string = "";
   let reverse: string = "";

   original = palindrome;

   let length1:number = original.length;

   for (let i = length1 - 1; i >= 0; i--){
    reverse = reverse + original.charAt(i);
   }

   if( original == reverse)
        console.log("Entered string is a Palindrome");
    
    else
        console.log("Entered string is not Palindrome");
        
}

console.log(checkPalindrome("mum"));