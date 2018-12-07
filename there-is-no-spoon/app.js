laptop = {
    type : "Macbook",
    color : "Silver",
    isCharged : true,
    getMessage : function(message){
        console.log(message);
    }
}

cellphone = {
    type : "Samsung",
    color : "dark blue",
    sendText : function(message){
        laptop.getMessage(message);
    }

}

chair = {
    color : "blue",
    type : "padded",
    hasArmRests : true
}


cellphone.sendText("Hey man");