'use stric'


let popUp = document.getElementsByClassName('popUp')
let closed = document.getElementById('close')
let detailProject = document.querySelectorAll('.detailProject');
console.log(detailProject)

let screens = document.querySelectorAll('.screens');



function hide(e) {
    var number = e.currentTarget.getAttribute('id')
    console.log(e.currentTarget);
    console.log(number + 'nombre');
/*     if(!isNaN(number)){

    } */
}


for (var i = 0; i < screens.length; i++) {
    screens[i].addEventListener('click', hide, false);
    detailProject.classList.remove('hidden')

}

document.body.addEventListener('click', hide, false);


/*
screens.addEventListener('click', function (event){
    var number = document.querySelectorAll(this).getAttribute('id')
    console.log(number)
    //popUp.classList.remove('hidden')
});

closed.addEventListener('click', function() {
    popU
p.classList.add('hidden').blind(this)
}); */