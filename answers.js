//Let's a go!


//Print positives exercise
function printPos(array){
    array.forEach(function(num){
        if(num >= 0){
            console.log(num);
        }
        //the if statement tests whether or not the num is greater than or equal to zero
        //i.e. if the num is positive
    });
    //end of forEach function              
};
//end of printPos function
printPos([-1, 10, 9, -4, 0, 3]);



//Get positives 
//get positives function using filter method
function getPos(array){
    var posNums = [];
    //have a new empty array ready before filtering
        //must be outside of the filter
    array.filter(function(value) {
        if(value >= 0){
           posNums.push(value);
        };
        //always have a boolean test for filters
    })
    //end of filter function for finding positive values
    return posNums;
    //return our filled up new array that has the filtered data
        //make sure this is outside of the filter function!
};
getPos([-10,10,-5,5,4]);



//Exercise 2b, redo the first exercise with the filter method
//as well as returning the filtered array by accessing the filter function

function printPositives(array){
    return array.filter(function(value){
        return value >= 0
        //only return values that are higher than, or are, zero
    }).forEach(function(value){
    //end of filter Start of forEach    
        console.log(value);
        //for each value, print the value
    });
    //end of forEach
};
//end of printPositives function
printPositives([-1,2,-3,4,-6,5]);



//Use the reduce method to find the longest word in a string
//Remember, reduce needs three parameters to work
function longestWord(string){
    string = string.split(' ');
    //make string into an array with each word as an element
    
    //Below, don't forget to make your reduce function equal to something
    //reduce returns a value and needs a place to spit it out, in this case thelongestWord
    var thelongestWord = string.reduce(function(longest, currentWord){
        if(currentWord.length > longest.length){
            return currentWord;
        }
        else{
            return longest;
        }
        
    }, "");
    //End of reduce function
    //don't forget to have your reduce with a starting value
    //since we're dealing with strings, an empty string works.
    
    return thelongestWord;
    //return the value of out string.reduce function
    
};
//end of longestWord function
longestWord("Aside of programming at my PC");


