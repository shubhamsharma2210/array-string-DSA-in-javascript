let data = [
    {
        book: "hindi",
        amount : 44,
    },
    {
        book: "english",
        amount : 45,
    },
    {
        book: "math",
        amount : 12,
    },
]

let totalAmountOfBook = data.reduce((accum, item) => {
   return accum + item.amount
},0)
console.log(totalAmountOfBook)