const nextTickRecursive = (n: number) => {
  console.log("Stuck here forever... ", n)
  if (n > 10) throw new Error("Full stop!")
  process.nextTick(() => nextTickRecursive(n + 1))
}
nextTickRecursive(0) // setInterval will never run

const setIntervalRecursive = (): any => setImmediate(setIntervalRecursive)
setIntervalRecursive() // setInterval will run

setInterval(() => console.log("hi"), 10)
console.log("hey once")
