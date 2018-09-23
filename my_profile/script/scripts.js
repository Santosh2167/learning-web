// function openCity(evt, cityName) {
//     // Declare all variables
//     var i, tabcontent, tablinks;

//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }

var displayEducation = document.getElementById("link-education");
var displayWork = document.getElementById("link-work")
var workTable = document.getElementsByClassName("work-table");
var educationTable = document.getElementsByClassName("education-table");

displayEducation.onclick = function(){
    educationTable[0].style.display="block";
    workTable[0].style.display="none";
}
 
displayWork.onclick = function(){
    educationTable[0].style.display="none";
    workTable[0].style.display="block";
}

var typed = new Typed('#typed-strings', {
	strings: ['I am Santosh.', 'I am a: <strong>Web Developer</strong>', 'I am a: <strong>Dad</strong>'],
	typeSpeed: 100,
    backDelay: 3000

});
