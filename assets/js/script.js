// Display current day in jumbotron
let currentDay = moment().format(`dddd, MMMM do`);
$(`#currentDay`).text(currentDay);

// Set background color of description based on whether the hour is in the past, present, or future
let currentHour = moment().format(`H`);
for (hour = 0; hour < 9; hour++) {
  if (hour + 9 < currentHour) {
    // then description background color = gray
    $(`.description`).eq(hour).addClass(`.past`);
  }
  if (hour + 9 == currentHour) {
    // then description background color = red
    $(`.description`).eq(hour).addClass(`.present`);
  }
  else {
    // then description background color = green 
    $(`.description`).eq(hour).addClass(`.future`);
  }
}
