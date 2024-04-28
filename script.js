let displayValue = "";

function addkeynum(value){
    displayValue += value;
    document.getElementById('display').value = displayValue;
}


function calculate(){
    try{
        const rlt = eval(displayValue);  //eval does the math calculation
        displayValue = rlt.toString(); // convert the result to string to display it as a text
        document.getElementById('display').value = displayValue;   // shows the calculated value from eval on display
    } catch (error){
        displayValue = '';
        document.getElementById('display').value = 'Error'  
    }
}





function clearall(){
    displayValue = '';
    console.log("value nhi ja rhi")
    document.getElementById('display').value= displayValue ;
}   
