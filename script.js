const localeSettings = {};
dayjs.locale(localeSettings);

function updateTime() {

  var currentDateTime = dayjs().format('MMM DD, YYYY [at] hh:mm:ss');
  $('#current-dateTime').html(currentDateTime);
  
  }
  setInterval(updateTime, 1000);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  const currentHour = dayjs().format('HH');

  function colorByHour() {
    $('.time-block').each(function () {
      const blockHour = parseInt(this.id.split('-')[1]);
      console.log(blockHour);
      console.log(parseInt(currentHour));
      if (blockHour < parseInt(currentHour)){
        $(this).addClass('past');
      } else if (blockHour === parseInt(currentHour)) {
         $(this).addClass('present');
      }else {
        $(this).addClass('future');
      }
    });
  }



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function enterText() {
    $('.saveBtn').on('click', function () {
      const key = $(this).parent().attr('id');
      const value = $(this).siblings('.description').val();
      localStorage.setItem(key, value);
    });
  }

  $('.time-block').each(function () {
    const key = $(this).attr('id');
    const value = localStorage.getItem(key);
    $(this).children('.description').val(value);
  });
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  function updateTime() {
    const currentDate = dayjs().format('dddd, MMMM D, YYYY');
    const currentTime = dayjs().format('hh:mm:ss A');
    const date = $('.date');
    const time = $('.time');
    date.text(date);
    time.text(time);
    $('.date').text(currentDate);
    $('.time').text(currentTime);
  }

  colorByHour();
  enterText();
  

});
