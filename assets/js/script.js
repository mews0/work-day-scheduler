// Display current day in jumbotron
let currentDay = moment().format(`dddd, MMMM do`);
$(`#currentDay`).text(currentDay);

let currentHour = moment().format(`H`);
for (hour = 0; hour < 9; hour++) {
  // Display text for event descriptions saved in local storage
  $(`.description`).eq(hour).val(localStorage.getItem($(`.description`).eq(hour).prev().text()))
  
  // Set background color of event description based on whether the hour is in the past, present, or future  
  if (hour + 9 < currentHour) {
    $(`.description`).eq(hour).addClass(`past`);
  }
  else if (hour + 9 == currentHour) {
    $(`.description`).eq(hour).addClass(`present`);
  }
  else {
    $(`.description`).eq(hour).addClass(`future`);
  }
}

// If user clicks on save button, then save text in event description to local storage
$(`.saveBtn`).click(function(event) {
  let lsKey = event.target.previousElementSibling.previousElementSibling.textContent;
  let lsValue = event.target.previousElementSibling.value;
  localStorage.setItem(lsKey, lsValue);
});
