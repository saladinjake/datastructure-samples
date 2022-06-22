//palindron: A palindrome is a word or
// phrase that reads the 
//same backward as forward. 
//Write a function that checks for this.

const palindrome = (string) =>{
	const isPassing = false
	for(let i=0;i<string.length;i++){
		if(string[i]== string[string.length -1 -i]){
			isPassing = true
		}else{
			isPassing = false
		}
	}
	return isPassing
}

//test 
 console.log(palindrone("level"))





const palindrone2 = (string) =>
 // split to array and prosper
  string.split().every( (character,index) => character=== string[string.length - 1 -index])