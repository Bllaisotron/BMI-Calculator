const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if((height === '') || (height < 0) || (isNaN(height))){
        //NaN !== NaN
        results.innerHTML = "Please provide a valid height";
        
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please provide a valid weight";
    } else {
    //calculate BMI
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    //display the results
    results.innerHTML = `<span>${bmi}</span>`
    }
    
    
});

//notes
//NaN !== NaN, use the isNaN() function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

.container {
    width: 375px;
    height: 525px;
    margin-left: 350px;
    margin-top: 65px;
    background-color: yellow;
    padding-left: 30px;
}
#height, #weight {
    width: 150px;
    height: 25px;
    margin-top: 30px;
}

#weight-guide{
    margin-left: 75px;
    margin-top: 25px;
}

////////////////
///////////////////////////
//////////////////////
////////////////////////////////////
/////////////////////
///////////////////
/////////////
////////////////////////
//////////////////////
///////////////////////////////////////
////////////////////
//////////////////////////////
.....................
.............
...................
