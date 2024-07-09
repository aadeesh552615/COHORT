function checkAnagram(str1, str2){
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if(str1.length != str2.length) return false;
    for(let i = 0; i < str1.length; i++){
        let j = 0;
        while(j < str2.length){
            if(str1[i] == str2[j]) break;
            j++;
        }
        if (j == str2.length) return false;
    }
    return true;
}
console.log(checkAnagram("School MASTER!", "The ClassROOM")? "true":"false");