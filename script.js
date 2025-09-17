// script.js (optional)
// Add JavaScript for dynamic features like AJAX requests, animations, etc.// script.js (optional)
// Add JavaScript for dynamic features like AJAX requests, animations, etc.
 // Redirect to the sign-in page when "Join Now" is clicked
 document
 .querySelector(".Home button")
 .addEventListener("click", function () {
   window.location.href = "signup.html"; // Redirect to sign-in page
 });

document
 .querySelector(".contentBx button")
 .addEventListener("click", function () {
   window.location.href = "readmore.txt";
 });

// Search box functionality
document
 .querySelector("#searchBx")
 .addEventListener("keypress", function (e) {
   if (e.key === "Enter") {
     let searchQuery = e.target.value;
     if (searchQuery) {
       alert("Searching for: " + searchQuery);
       e.target.value = ""; // Clear the search box
     } else {
       alert("Please enter a search term.");
     }
   }
 });

 // JavaScript for filtering functionality
 const filters = document.querySelectorAll('.list');
 const cards = document.querySelectorAll('.card');

 filters.forEach(filter => {
   filter.addEventListener('click', () => {
     const filterValue = filter.getAttribute('data-filter');

     // Remove 'active' class from all filters
     filters.forEach(f => f.classList.remove('active'));

     // Add 'active' class to clicked filter
     filter.classList.add('active');

     // Show or hide cards based on the filter selected
     cards.forEach(card => {
       if (filterValue === 'all') {
         card.classList.remove('hide');
       } else if (card.getAttribute('data-item') !== filterValue) {
         card.classList.add('hide');
       } else {
         card.classList.remove('hide');
       }
     });
   });
 });