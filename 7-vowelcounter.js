
const vowels = (str) =>{
	const vowels = "aeiou"
	const count =0 ;

	for (let char of str){
		if(vowels.includes(char)) count++
	}
    return count
}

console.log(vowels("hello world"))