// const addtargetNumber = (nums , target) => {
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i + i; j < nums.length; j++){
//             if(nums[i] + nums[j] === target ){
//                 return [i, j]
//             }
//         }
        
//     }
//     return null
// }

// const number = [2,3,5,4]
// const target = 6
// console.log(addtargetNumber(number, target))



const addtargetNumber = (nums, target) => {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
    return null
}