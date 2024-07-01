
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const parallax = document.getElementById("parallax");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});


// parallex-effects

window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;

  // Get references to all parallax sections
  var parallaxContent1 = document.getElementById('parallelContID');
  var parallaxContent2 = document.getElementById('parallelContID2');
  var parallaxContent3 = document.getElementById('parallelContID3');
  var parallaxContent4 = document.getElementById('parallelContID4');

  // Check if each parallax section exists before proceeding
  if (parallaxContent1 && parallaxContent2 && parallaxContent3 && parallaxContent4) {
    if (scrollPosition >= parallaxContent1.offsetTop) {
      parallaxContent1.classList.add('parallax-fixed');
      parallaxContent2.style.zIndex = '1000'; // Set zIndex for parallaxContent2 when parallaxContent1 is sticky
    } else {
      parallaxContent1.classList.remove('parallax-fixed');
      parallaxContent2.style.zIndex = '2000'; // Set higher zIndex for parallaxContent2 when parallaxContent1 is not sticky
    }

    if (scrollPosition >= parallaxContent2.offsetTop) {
      parallaxContent2.classList.add('parallax-fixed');
      parallaxContent3.style.zIndex = '1000'; // Set zIndex for parallaxContent3 when parallaxContent2 is sticky
    } else {
      parallaxContent2.classList.remove('parallax-fixed');
      parallaxContent3.style.zIndex = '2000'; // Set higher zIndex for parallaxContent3 when parallaxContent2 is not sticky
    }

    if (scrollPosition >= parallaxContent3.offsetTop) {
      parallaxContent3.classList.add('parallax-fixed');
      parallaxContent4.style.zIndex = '1000'; // Set zIndex for parallaxContent4 when parallaxContent3 is sticky
    } else {
      parallaxContent3.classList.remove('parallax-fixed');
      parallaxContent4.style.zIndex = '2000'; // Set higher zIndex for parallaxContent4 when parallaxContent3 is not sticky
    }
  }
});





// filters

function filterCards() {
var filterValue = document.getElementById('filterDropdown').value.trim().toLowerCase();
var cards = document.querySelectorAll('.card_first');
var foundMatch = false; // Flag to track if any card matches the filter

cards.forEach(function (card) {
var titleElement = card.querySelector('.card_title h2');
var titleText = titleElement.textContent.trim().toLowerCase();

if (filterValue === '' || titleText.includes(filterValue)) {
  card.style.display = 'block'; // or 'flex' depending on your layout
  foundMatch = true; // Set flag to true if at least one card matches
} else {
  card.style.display = 'none';
}
});

if (!foundMatch) {
 document.getElementById("nocoursesID").innerHTML = "No courses!";
}
}