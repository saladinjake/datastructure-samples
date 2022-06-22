
   //max char in a string
const maximus = (str) =>{
	const data = {};
	for(let char of str){
     data[char] = data[char++] || 1
	}
	let max = 0;
	let ch = null;
	for(let scores in data){
	 	if(data[scores]> max){
	 		max = data[scores]
	 		ch =scores
	 	}
	}
   return ch
}

console.log(maximus("this is issy thisty this they dont this this the the"))




