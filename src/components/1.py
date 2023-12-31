def arrayStringsAreEqual(word1, word2) :
        str1 = ''.join(word1)
        str2 = ''.join(word2)
        print(str1, str2)
        if str1 == str2:
            return True
        return False

word1 = ["ab", "c"]
word2 = ["a", "bc"]
print(arrayStringsAreEqual(word1,word2))