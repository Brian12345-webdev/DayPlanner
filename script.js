const localeSettings = {};
dayjs.locale(localeSettings);

function updateTime() {
// reset button state
  $("#reset-btn").on('click', function () {
    localStorage.clear();
  });

  var currentDateTime = dayjs().format('MMM DD, YYYY [at] hh:mm:ss');
  $('#current-dateTime').html(currentDateTime);
}
setInterval(updateTime, 1000);


$(function () {

  const currentHour = dayjs().format('HH');

  function colorByHour() {
    $('.time-block').each(function () {
      const blockHour = parseInt(this.id.split('-')[1]);
      
      if (blockHour < parseInt(currentHour)) {
        $(this).addClass('past');
      } else if (blockHour === parseInt(currentHour)) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    });
  }

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


  colorByHour();
  enterText();


});
