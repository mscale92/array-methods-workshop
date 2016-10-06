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