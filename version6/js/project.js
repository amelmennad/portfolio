var selectCard = document.querySelectorAll("#portfolio .card");
console.log(selectCard);


for(var i = 0; i<selectCard.length; i++){
    var listClass = selectCard[i].classList
    console.log(listClass)
    console.log(listClass.value)

    if (listClass.contains('html')){
        console.log('dodo')
    }
    else{
        console.log('oups')
    }

}

