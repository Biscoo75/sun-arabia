const stepMenuOne = document.querySelector('.formbold-step-menu1')
const stepMenuTwo = document.querySelector('.formbold-step-menu2')
const stepMenuThree = document.querySelector('.formbold-step-menu3')

const stepOne = document.querySelector('.formbold-form-step-1')
const stepTwo = document.querySelector('.formbold-form-step-2')
const stepThree = document.querySelector('.formbold-form-step-3')

const formSubmitBtn = document.querySelector('.formbold-btn')
const formBackBtn = document.querySelector('.formbold-back-btn')

formSubmitBtn.addEventListener("click", function (event) {
  event.preventDefault()
  if (stepMenuOne.className == 'formbold-step-menu1 active') {
    event.preventDefault()

    stepMenuOne.classList.remove('active')
    stepMenuTwo.classList.add('active')

    stepOne.classList.remove('active')
    stepTwo.classList.add('active')

    formBackBtn.classList.add('active')
    formBackBtn.addEventListener("click", function (event) {
      event.preventDefault()

      stepMenuOne.classList.add('active')
      stepMenuTwo.classList.remove('active')

      stepOne.classList.add('active')
      stepTwo.classList.remove('active')

      formBackBtn.classList.remove('active')

    })

  } else if (stepMenuTwo.className == 'formbold-step-menu2 active') {
    event.preventDefault()

    stepMenuTwo.classList.remove('active')
    stepMenuThree.classList.add('active')

    stepTwo.classList.remove('active')
    stepThree.classList.add('active')

    formBackBtn.classList.remove('active')
    formSubmitBtn.textContent = 'Submit'
  } else if (stepMenuThree.className == 'formbold-step-menu3 active') {
    document.querySelector('form').submit()
  }
})


function openNav() {
  if (window.innerWidth <= 768) {
    document.getElementById("sidebar").style.width = "100%";
  }
  else {
    document.getElementById("sidebar").style.width = "350px";

  }
  // document.getElementById("main-content").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main-content").style.marginLeft = "0";
}
function hideSideBarButton() {
  var sideBarButton = document.getElementById('sideBarButton');
  sideBarButton.style.display = 'none';
}


//& Function to move the li elements into the sidebar for small screens start
function moveLiToSidebar() {
  var searchGroupLi = document.getElementById('searchGroup');
  var transsLi = document.getElementById('transs');
  var carttLi = document.getElementById('cartt');
  var wishListtLi = document.getElementById('wishListt');
  var profileLi = document.getElementById('profile');
  var logOutLi = document.getElementById('logOut'); // New variable for logOut
  var iconContainer = document.getElementById('iconContainer');
  var searchInPhone = document.getElementById('searchInPhone');
  var mainContent = document.getElementById('main-content');

  if (window.innerWidth <= 991) {
    // Move searchGroupLi to searchInPhone
    if (searchGroupLi && !searchInPhone.contains(searchGroupLi)) {
      searchInPhone.appendChild(searchGroupLi);
    }
    // Move profileLi and logOutLi to iconContainer
    if (profileLi && !iconContainer.contains(profileLi)) {
      iconContainer.appendChild(profileLi);
    }
    if (logOutLi && !iconContainer.contains(logOutLi)) {
      iconContainer.appendChild(logOutLi);
    }
    // Move transsLi, carttLi, wishListtLi to iconContainer
    if (transsLi && !iconContainer.contains(transsLi)) {
      iconContainer.appendChild(transsLi);
    }
    if (carttLi && !iconContainer.contains(carttLi)) {
      iconContainer.appendChild(carttLi);
    }
    if (wishListtLi && !iconContainer.contains(wishListtLi)) {
      iconContainer.appendChild(wishListtLi);
    }
  } else {
    // Move all items back to mainContent
    if (searchGroupLi && !mainContent.contains(searchGroupLi)) {
      mainContent.appendChild(searchGroupLi);
    }
    if (profileLi && !mainContent.contains(profileLi)) {
      mainContent.appendChild(profileLi);
    }
    if (logOutLi && !mainContent.contains(logOutLi)) {
      mainContent.appendChild(logOutLi);
    }
    if (transsLi && !mainContent.contains(transsLi)) {
      mainContent.appendChild(transsLi);
    }
    if (carttLi && !mainContent.contains(carttLi)) {
      mainContent.appendChild(carttLi);
    }
    if (wishListtLi && !mainContent.contains(wishListtLi)) {
      mainContent.appendChild(wishListtLi);
    }
  }
}

// Call the function on page load and when the window is resized
window.addEventListener('load', moveLiToSidebar);
window.addEventListener('resize', moveLiToSidebar);



function handleDateInput(event) {
    const inputId = event.target.id;

    if (inputId === 'datepicker') {
        // Handle datepicker input
    } else if (inputId === 'another-datepicker') {
        // Handle another datepicker input
    }
    else if (inputId === 'another-datepicker-two') {
        // Handle another datepicker input
    }
    else if (inputId === 'datepicker-in-cat') {
        // Handle another datepicker input
    }
}
       // Initialize Flatpickr
                            flatpickr("#datepicker-in-cat", {
                                // Options for Flatpickr
                                dateFormat: "Y-m-d",
                                onChange: function(selectedDates, dateStr, instance) {
                                    handleDateInput(selectedDates, dateStr, instance);
                                }
                            });
                        
                            // Handle date input changes
                            function handleDateInput(selectedDates, dateStr, instance) {
                                console.log("Selected Date:", dateStr);
                                // Add custom logic to handle the date input
                            }
