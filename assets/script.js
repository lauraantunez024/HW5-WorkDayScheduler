var container = document.querySelector(".container")

var time = moment().format('dddd, MM/DD/YYYY, h:mm');
  $("#currentDay").text(time)
var currentHour = new Date().getHours();

var hours = ['08', '09', '10', '11', '12', '13', '14', '15', '16','17', '18','19']



hours.forEach(hour=>{
    var row = document.createElement('div');
    row.classList.add('row', 'time-block');
    row.innerHTML = `
    <div class="col=md-1 hour">${hour}</div> 
        <textarea class="col-md-10 description" name="" id=""></textarea>
    <button class="col-md-1 btn saveBtn">
      <i class="fas fa-save"></i>
    </button>
    </div>
    <br>
    `

    if(currentHour == hour) {
        $(".time-block").addClass("present");
    } else if (hour > currentHour) {
        $(".time-block").addClass("past");
    } else if (hour < currentHour) {
        $(".time-block").addClass("future");

    }

    container.appendChild(row);





})

// function colorChange() {
//     var currentHour = new Date().getHours();
//     for (i=0; i<hours.length; i++) {
//        if(currentHour == hours[i]) {
//         $(".time-block").addClass("present");
//     } else if (currentHour > hours[i]) {
//         $(".time-block").addClass("future");
//     } else if (currentHour < hours[i]) {
//         $(".time-block").addClass("past");

//     }

// }
// }









