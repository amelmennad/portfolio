/* var imageProject = document.getElementById('imgProject2');
var decription = document.getElementById('descriptProjet2');
var close = document.getElementById('close2');



var dataImg = imageProject.dataset.item;
var dataDescript = decription.dataset.item;

imageProject.addEventListener('click', function(){
    imageProject.classList.toggle('hidden')
    decription.classList.toggle('hidden')
})

close.addEventListener('click', function(){
    imageProject.classList.toggle('hidden')
    decription.classList.toggle('hidden')
}) */


document.getElementById('portfolio').addEventListener('click',function(event){

    
    console.log(event.target);
    console.log(event.target.getAttribute('class'));
    console.log(event.target.dataset.item);

        
});