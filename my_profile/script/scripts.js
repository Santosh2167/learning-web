// var displayEducation = document.getElementById("link-education");
// var displayWork = document.getElementById("link-work")
// var workTable = document.getElementsByClassName("work-table");
// var educationTable = document.getElementsByClassName("education-table");

// displayEducation.onclick = function(){
//     educationTable[0].style.display="block";
//     workTable[0].style.display="none";
// }
 
// displayWork.onclick = function(){
//     educationTable[0].style.display="none";
//     workTable[0].style.display="block";
// }

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 100,
    backDelay: 3000
});

$(".diamond-grid").diamonds({
    size : 200, // Size of diamonds in pixels. Both width and height. 
    gap : 5, // Pixels between each square.
    hideIncompleteRow : false, // Hide last row if there are not enough items to fill it completely.
    autoRedraw : true, // Auto redraw diamonds when it detects resizing.
    itemSelector : ".items" // the css selector to use to select diamonds-items.
});