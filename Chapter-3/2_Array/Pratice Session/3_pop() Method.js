// Delete element  in an array (or) pop() method
//--------------------------------------------------
const colorSplash = ["Red", "Blue", "Violet", "Turquoise", "Green"]
const removeColor = colorSplash.pop()
console.log(removeColor) // Green
console.log(colorSplash)

console.log("----------------------------------------------------------------")

const emptyArr = []
const result = emptyArr.pop()
console.log(result) // undefined
console.log(emptyArr)