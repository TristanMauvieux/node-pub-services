var pub = require("./mocks/pub.json");
var time = require("moment");

function listePub(){
    console.log ("La liste est bars est :");
    for (let index = 0; index < pub.length; index++) {
        console.log(pub[index].name);        
    }
}

function pubOpen(){
    console.log ("La liste est bars ouvert est :");
    
    for (let index = 0; index < pub.length; index++) {
         for(let j = 0; j<pub[index].openDays.length; j++){
             if(pub[index].openDays[j] == time().format("dddd")){
                 if (parseInt(pub[index].openHours.start) <= parseInt(time().startOf('day').fromNow())){
                     console.log(pub[index].name);
                 }
             }
         }
    }

}

function momentTime(){
    console.log("test de moment.js");
    console.log("time.now = "+time.now());
    console.log("time().startOf('day').fromNow() = "+ parseInt(time().startOf('day').fromNow()));
    console.log("time.format() = "+ time().format("dddd"));  
}

module.exports = {
    listePub: listePub,
    momentTime: momentTime,
    pubOpen: pubOpen
}