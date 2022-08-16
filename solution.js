// 1. Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
function doubleValues(anArray){
	return anArray.map(item => item*2);
}
console.log( '1: ',doubleValues([5,1,2,3,10]))

//2.

function onlyEvenValues(anArray){
return anArray.filter(item=>item%2==0)
}
console.log('2: ',onlyEvenValues([5,1,2,3,10]))

//3.

function showFirstAndLast(anArray){
return anArray.map(item => item[0] + item.slice(-1))
}

console.log('3: ',showFirstAndLast(['hi', 'goodbye', 'smile']));

//4.
function addKeyAndValue (entriesArray, key, value){
return entriesArray.map(item => { item[key] = value;
return item;})
}

function addKeyAndValue (entriesArray, key, value){
entriesArray.forEach(item => item[key] = value);
return entriesArray;
}


console.log('4: ',addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') ) ;

//5.

function vowelCount (aString) {
vowels = 'aeiou'.split('');
anObject = {};
aString = aString.toLowerCase();

vowels.forEach(vowel =>{
if(aString.split(vowel).length-1 > 0)
  anObject[vowel] = aString.split(vowel).length-1;
})
return anObject;
}

console.log('5:\n','vowelCount("Elie"):', vowelCount("Elie"), '\n', 'Tim: ' , vowelCount("Tim"), '\n' , 'Matt: ', vowelCount("Matt"),'vC(hmmm): '   ,vowelCount("hmmm"));
