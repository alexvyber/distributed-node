setTimeout(() => console.log("A"), 0)
console.log("B")

setTimeout(() => console.log("C"), 100)
setTimeout(() => console.log("J"), 200)
setTimeout(() => console.log("K"), 300)
setTimeout(() => console.log("KK"), 300)
setTimeout(() => console.log("KKK"), 300)
setTimeout(() => console.log("KKKK"), 300)
setTimeout(() => console.log("KKKKK"), 299)

setTimeout(() => console.log("D"), 0)
let i = 0

while (i < 1_000_000_000) {
  // Assume this takes ~500ms
  let _ignore = Math.sqrt(i)
  i++
}

console.log("E")

// "B"
// "E"
// "A"
// "D"
// "C"
