exports.palindrome = function(word) {
    let word2=[]
    let word3=[]
    //console.log(typeof(word))
    if(typeof(word)===typeof('')){
        word=word.toLowerCase()
        //console.log(word)
        for(i=0;i<word.length;i++){
            if(/[^a-z0-9]/g.test(word[i])){
                //console.log(i, word[i])
                continue
            }
            else{
                word2.push(word[i])
                word3.unshift(word[i])
            }
        }
        word2=word2.join('')
        word3=word3.join('')
        return word2==word3 ? true:false
    }
    else{
        word=word.toString()
        //console.log(word)
        for(i=0;i<word.length;i++){
            //console.log(word[i])
            word2.unshift(word[i])
        }
        word2=word2.join('')
        return word == word2 ? true:false
    }
};

// console.log(palindrome(434))
