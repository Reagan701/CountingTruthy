const values = [true,true,false,true,true,false,false,false,true];

let truthAmount = 0;
let falseAmount = 0;

for(let i = 0;i<values.length;i++){
    if(values[i] == true){
        truthAmount++;
    }else{
        falseAmount++
    }
}

document.write(`<br><p>[${values}]</p> <br> <p>There are ${truthAmount} true values in the array</p> <br> <p>There are ${falseAmount} false values in the array</p>`);