//when a nav item is hovered,
//add a class to it and show
//any child ULs(dropdowns)
$(function(){
    $('#nav li').hover(function(){
        $(this).toggleClass('hover')
        .children('ul').slideToggle();
    })
})