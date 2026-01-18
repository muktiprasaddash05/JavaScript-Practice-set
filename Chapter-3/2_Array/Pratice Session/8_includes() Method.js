//The Array contain specify value or not  (or) incudes() Method : 
//------------------------------------------------------------------
const taskStatus = ["Pending", "In Progress", "Completed", "On Hold"];
const newTaskStatus1 = taskStatus.includes("Pending")
const newTaskStatus2 = taskStatus.includes("Running")
const newTaskStatus3 = taskStatus.includes("On Hold")
const newTaskStatus4 = taskStatus.includes("in progress")
console.log(taskStatus)
console.log(newTaskStatus1)
console.log(newTaskStatus2)
console.log(newTaskStatus3)
console.log(newTaskStatus4)