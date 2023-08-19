/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(uniqueNums) {
    var result = [];
    uniqueNums.sort(function(a, b){return a-b});
    for(var i = 0; i < uniqueNums.length; i++){
        if(uniqueNums[i] > 0)
        {
            continue;
        }
        else if(uniqueNums[i] === uniqueNums[i-1]){
            continue;
        }
        else{
            let lowerIndex = i+1;
            let higherIndex = uniqueNums.length-1;
            while(lowerIndex < higherIndex){
                let targetSum = uniqueNums[i] + uniqueNums[lowerIndex] + uniqueNums[higherIndex];
                if(targetSum < 0){
                    lowerIndex++;
                }
                else if(targetSum > 0){
                    higherIndex--;
                }
                else{
                    result.push([uniqueNums[i] , uniqueNums[lowerIndex] , uniqueNums[higherIndex]]);
                    lowerIndex++;
                    higherIndex--;
                    while(uniqueNums[lowerIndex] == uniqueNums[lowerIndex - 1] && lowerIndex < higherIndex){
                    lowerIndex++;
                    }
                }
            }
        }
    }
    return result;
};


//Test Cases

// nums =[-1,0,1,2,-1,-4]; Output = [[-1,-1,2],[-1,0,1]];
// nums = [0,1,1]; Output = [];
// nums = [0,0,0]; Output = [[0,0,0]] ; 
//nums =[3,0,-2,-1,1,2]; Ouput = [[-2,-1,3],[-2,0,2],[-1,0,1]];
// nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4]; Output = [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]