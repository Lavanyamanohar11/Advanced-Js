// This might be a way of doing that challenge...but this is a worst approach LOL


var que0 = ["What's ur name?",'0 lav','1 mani','2 mano',0];
var que1 = ["Which yr?",'0 first','1 second','2 third',2];
var que2 = ["Like icecream?",'0 no','1 yes','2 maybe',1];
var score = 0;

function printQue(arr){
    for(var i=0;i< arr.length -1; i++){
        console.log(arr[i]);
    }
    var userAns = prompt("Write the crct ans number. Type 'exit' to stop.")
    if(userAns == arr[arr.length-1]){
        console.log('Correct Ans! :)')
        score++;   
    }
    else if(userAns.trim() === 'exit'){
        return;
    }
    else{
        console.log('Wrong ans :(')
    }
    console.log('Total Score: '+ score)
    calling();

}

function calling(){
    var randomNo = Math.floor(Math.random()*3);
    if(randomNo === 0){
        printQue(que0);
    }
    else if(randomNo === 1){
        printQue(que1);
    }
    else{
        printQue(que2);
    }
}
calling();
