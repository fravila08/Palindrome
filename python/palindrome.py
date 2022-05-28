def palindrome(word):
    word2=[]
    word=str(word)
    for i in word:
        if i.isalnum()==False:
            continue
        else:
            word2.append(i.lower())
    if word2== word2[::-1]:
        return True
    else:
        return False
