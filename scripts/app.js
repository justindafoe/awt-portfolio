


let isOpen = false;
let lines = $('.line');


function ToggleNav(){
    
    if(isOpen){
        $('#navLink').animate({
            right: -250
        }, 300, 'swing');   
        $(lines[1]).attr('style', 'opacity: 1');
    }
    else{
        $('#navLink').animate({
            right: 0
        }, 300, 'swing');
        $(lines[0]).attr('style', 'transform: rotate(45 deg);');
        $(lines[1]).attr('style', 'opacity: 0;');
        $(lines[2]).attr('style', 'transform: rotate(-45 deg);');

               
    }
    isOpen = !isOpen
}


//carousel code//
let slideTimer = setInterval("Slide()", 3000);
let slidePos = 0;
let slideWidth = 300;
let targetPos = 0;

function Slide()
{

    slidePos++;
    if(slidePos > 4)
        slidePos = 0;
    targetPos = slideWidth * slidePos; // this will determine the distance is has to slide
    $('#sImage').animate({
        marginLeft: -targetPos
    }, 400, 'swing');
}