 function checkString(a: string, b: string ){
     if(a.charAt(a.length -1) == b.charAt(b.length -1))
        return true;
    else
        return false;
 }

 console.log(checkString("jj", "hhg"));