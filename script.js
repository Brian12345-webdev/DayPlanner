const localeSettings = {};
dayjs.locale(localeSettings);

function updateTime() {

  var resetScheduler = document.getElementById('.reset-btn');
  $(".reset-btn").on('click', function () {
    resetScheduler.removeChildren
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
      console.log(blockHour);
      console.log(parseInt(currentHour));
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
