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
    var currentElement = event.target;
    console.log(currentElement);
    console.log(currentElement.getAttribute('class'));
    console.log(currentElement.dataset.item);

    var brother = currentElement.nextElementSibling;
    console.log(brother);    
    console.log(brother.dataset.item);
            
});

