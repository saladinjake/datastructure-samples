//reverse each words eg
// assert.equal(reverseWords("I love JavaScript!"),
// "I evol !tpircSavaJ");


const reversalHelper = array =>{
  for (let i = 0; i < array.length / 2; i++) {
    const temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}
const reverseWords = str =>{
	const words = str.split(" ");
    const result = []
    for(let wordings of words){
    	
    	//console.log(reversalHelper(wordings.split("")))
    	const res = reversalHelper(wordings.split("")).join("");
    	console.log(res)
    	result.push(res)
    }
    return result.join(" ")
}

console.log(reverseWords("Testing my Javascript algorithms and datastructures!"))
console.log(reverseWords("Testing my Javascript algorithms and datastructures!"))