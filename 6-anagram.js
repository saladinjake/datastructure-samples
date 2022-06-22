//anagram: Anagrams are words or phrases 
//that contain the same number of characters. 
//Create a function that checks for this.


const helperCount = (str) =>{
	const table = {}
	for (let char of str.replace(/\W/g,""))
		table[char] = table[char]+1 || 1
	return table
}
const anagram = (str,str2) =>{
   const tableA = helperCount(str)
   const tableB = helperCount(str2)

   if(Object.values(tableA).length!==Object.values(tableB).length)
   	 return false
   let isPassing = false 
    for (let char in tableA){
      if ( Object.keys(tableB).includes(char) ){
         isPassing = true
       } else{
    	 isPassing = false
       }
   }
   return isPassing 	
}

 console.log(anagram("hello world", "world hello"))