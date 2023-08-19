/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indexMap = new Map();
    for(let i=0; i< nums.length; i++){
        let otherNumber = target - nums[i];
        if(indexMap.has(otherNumber)){
            return [i,indexMap.get(otherNumber)];
        }
        indexMap.set(nums[i],i);
    }
    return null;
};


//Test Cases
//nums = [2,7,11,15]; target = 9; Output = [0,1]

//nums = [3,2,4]; target =6;  Output =[1,2]

//nums = [3,3] ; target = 6; Output = [0,1];