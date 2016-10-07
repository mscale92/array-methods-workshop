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



//Count vowels function with the reduce method
function countVow(string){
    string = string.split('');

    var vowArray = ["a","e","i","o","u"];
    var vowelCount = string.reduce(function(totalVow, letters){
        
        if(vowArray.indexOf(letters) >= 0){
            return totalVow + 1;
        }
        else{
            return totalVow;
        }
    
    }, 0);
    
    return vowelCount;
};
//end of countVow function

countVow("hello darling");



//Write a function called high low that takes an array of numbers
//and returns and object with the highest and lowest values via reduce
function highLow(array){
    var Container = function(high,low){
        this.highest = high;
        this.lowest = low;
    }
    //we have a container constructor that will hold our highest and lowest values
    
    var highest = array.reduce(function(higher, num){
        if(num > higher){
            return num;
        }
        else{
            return higher;
        }
    }, -Infinity);
    //highest reduce function, always higher than -infinity
    
    var lowest = array.reduce(function(lower, num){
        if(num < lower){
            return num;
        }
        else{
            return lower;
        }
    }, Infinity);
    //lowest reduce function, always less than infinity
    
    var valuesHL = new Container(highest,lowest);
    return valuesHL;
};
//end highLow function

highLow([1,10,5,0]);



//Write a function that returns the highest and lowest values of an array
//as well as the second highest and second lowest values as well with reduce
function highLow2(array){
    var ValueContainer = function(highest, secondHigh, lowest, secondLow){
        this.highestNum = highest;
        this.secondHighNum = secondHigh;
        this.lowestNum = lowest;
        this.secondLowNum = secondLow;
    }
    
    var highest = array.reduce(function(higher, num){
        if(num > higher){
            return num;
        }
        else{
            return higher;
        }
    }, -Infinity);
    //end of highest reduce function
    
    var lowest = array.reduce(function(lower, num){
        if(num < lower){
            return num;
        }
        else{
            return lower;
        }
    }, Infinity);
    //end of lowest reduce function
    
    var secondHigh = array.reduce(function(secHigh, num){
        if(num > secHigh && num < highest){
            return num;
        }
        else{
            return secHigh;
        }
    },-Infinity);
    //end of secondHigh reduce function
    //the second highest has to be higher than the others but must be lower than highest
    //thus the variable highest is used in our if statement
    
    var secondLow = array.reduce(function(secLow, num){
        if(num < secLow && num > lowest){
            return num;
        }
        else{
            return secLow;
        }
    }, Infinity);
    //end of secondLow reduce function
    //the second lowest must be lower than the others but bigger than the lowest
    //so, like with the highest, we constrict our if statement with our lowest variable
    
    var totalValues = new ValueContainer(highest, secondHigh, lowest, secondLow);
    //let's make a new object and shove our values into them all at once. 

    
    return totalValues;
    //and return our completed list of all the highest, lowest, and 2nd highest, and 2nd lowest values.
};
//end of highLow2

highLow2([1,2,3,4,5]);


//Write a function that takes a string and counts the strings characters and
//spits out an object with the letters and the count of each letter
//If a string has the same letter more than once, the count should adjust accordingly

function countChars(string){
    var container = {
    };
    //an empty Object to store our info in.
    
    string = string.split(''); 
    //our string becomes an array

    var createKeyCopy = string.forEach(function(letter){
        return container[letter] = 0;
    });
    //end of forEach function createKeyCopy
    //This creates a key of each letter for the container.
    //any double letters are overridden by each other.
    
    console.log(container);
    

    var counted = string.reduce(function(match, letter, i){
        if(letter !== string[i]){
            match = letter; 
        }
        else{
            container[letter] += 1;
            return;
        }
    }, "");
    //end of reduce counted function
    //this reduce function requires i, increment, in order to work
    //when a reduce method returns a value, it shifts to the next element in the array
    //in this case, the next letter
    //in order to loop the array before shifting, i is required
    //i represents the intervals of the reduce function, the max is the length of the array
    //the current value, match, the slot in which reduce holds a value
    
    //If the letter that is accessed does not equal the element in position i of the same array,
    //then match, the current value, equals the accessed letter.
    //Nothing is returned
    //the current value is tested in place of the array element until there is a return.
    
    //If the current value does match the element in position i,
    //then the container object takes the letter's value, an array string, as a key
    //so that the container can access the key slot of the same name.
    //It then adds 1 by using the += comparison, aka x =+ y same as x = x + y
    //finally the letter is returned allowing reduce to switch to the next array element,
    //the next letter.

console.log(container);
  
};

countChars("helloll");



//Making an Index of people

function idGen(){
    var idSize = [0,1,2,3,4,5];
        //here is an array with a length of 6.
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVXYZ".split('');
    var digits = "0123456789".split('');
        //here I made two different arrays from strings using the split method
        //one hold all twenty-six letters to the alphabet, the other all ten digits
    
    var id = idSize.reduce(function(array,value){
        if(typeof value === false || typeof value !== "number"){
            value = idSize.indexOf(value);
            //this is just to ensure that our code will still run even if someone
            //has messed with our ID size array
            //if the value is false or the value of out element is not a number,
            //then value takes on the number of its position as its value, solved.
            
            if(value % 2 === 0 ){
                value = Math.floor(Math.random() * alphabet.length);
                var letter = alphabet[value];
                array.push(letter);
                return array;
            }
            
            else{
                value = Math.floor(Math.random() * digits.length);
                var number = digits[value];
                array.push(number);
                return array;
            }

        }
        //this is the end of our error checking if statement

        else if(value % 2 === 0 ){
            value = Math.floor(Math.random() * alphabet.length);
            var letter = alphabet[value];
            array.push(letter);
            return array;
        }
        //the if assigns letters to the id
        //the .length is key since it grabs a random number between, and including, zero
        //and the length of the array, not including the length of the array.
        //floor rounds down to the nearest integer

        else{
            value = Math.floor(Math.random() * digits.length);
            var number = digits[value];
            array.push(number);
            return array;
        }
        //the else has all elements that have a modulo of 2 that is not zero,
        //so all odd numbers ;)
        //the value takes a random number
        //the digits array uses the random number value to select one of its elements
        //our empty array then pushes the element number from digits
        //finally we return our array

    }, []);
    
    return id;
};
//end of idGen


var people = [];
//here's an empty array that we will store our people information

function Person(id, first, last, email){
    this.id = id;
    this.firstName = first;
    this.lastName = last;
    this.email = email;
};
//a Person constructor is used to create new objects that will fill the people array
//but, a constructor needs a value that it uses as a name in order to name and separate new objects. Can't have unknown objects on the loose!
//so...we're going to use the array positions of the empty array to name the objects whilst dumping the object info into each position.


//Reduce to the rescue!
function addPerson(firstName, lastName, email){
// console.log(people[0] = new Person(0, firstName, lastName, email));
    var count = people.reduce(function(position,element){
        if(false){
            return position;
        }
        else if(typeof element === "object"){
            return position += 1;
        }
    }, 0);
    //this reduce function takes our empty array's element, as element, and if falsy, in this case
    //null, it will output position, position starting at the value of zero
    
    //in order to prevent our people from being overridden accidentally, we have an else if
    //that sees if the element is an object
    //if there is an object there, position adds one to its value and is returned
    //override denied!
    

    people[count] = new Person(idGen(),firstName, lastName, email);
    return people;
    //here, our new Person objects take the name of person[count], count being our value
    //from our reduce function above.
    //thanks to our reduce function, no person will have their spot taken, the array can store
    //them all!
    //yay!!!
};

addPerson("Mary", "Scale", "scalemary@gmail.com");
addPerson("Mickey", "Mouse", "mm@gmail.com");
addPerson("Mary", "Addams", "maddams@gmail.com");