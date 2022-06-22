// find the character with the minimum no of occurence
const minimus = (str) => {
	const table = {}
	for (let char of str)
		table[char] = table[char++] || 1
    let max = Math.max(Object.values(table))
    let min  = Math.min(Object.values(table))
    for(let char in table)
    	if(min===table[char])
    		return char
}

console.log(minimus("this lifes th"))