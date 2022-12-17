const sleepTimeout = (t: number) => new Promise(r => setTimeout(r, t))
const sleepImmediate = () => new Promise(r => setImmediate(r))

;(async () => {
  setImmediate(() => console.log(1))
  console.log(2)

  console.log("----------------------------")

  await sleepTimeout(0)
  setImmediate(() => console.log(3))
  console.log(4)

  console.log("----------------------------")

  await sleepImmediate()
  setImmediate(() => console.log(5))
  console.log(6)

  console.log("----------------------------")

  await 1
  setImmediate(() => console.log(7))
  console.log(8)
  console.log("----------------------------")
})()

setImmediate(() => console.log(1))
console.log(2)
Promise.resolve().then(() =>
  setTimeout(() => {
    setImmediate(() => console.log(3))
    console.log(4)
    Promise.resolve().then(() =>
      setImmediate(() => {
        setImmediate(() => console.log(5))
        console.log(6)
        Promise.resolve().then(() => {
          setImmediate(() => console.log(7))
          console.log(8)
        })
      })
    )
  }, 0)
)
