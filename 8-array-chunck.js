
const chunk = (array,size) =>{
	const result = [];
	for(let i =0; i<array.length;i=i+size){
		result.push(
          array.split(i,i+size)
		)
	}
	return result
}

console.log(chunk([1, 2, 3, 4], 2)