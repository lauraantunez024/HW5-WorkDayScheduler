
var container = document.querySelector(".container")
var userInput = [];

var time = moment().format('dddd, MM/DD/YYYY, h:mm');
  $("#currentDay").text(time)
var currentHour = new Date().getHours();

var hours = ['08', '09', '10', '11', '12', '13', '14', '15', '16','17', '18','19', '20', '21']


//Dynamically create trim
hours.forEach(hour=>{
    var row = document.createElement('div');
    row.classList.add('row', 'time-block');
    row.innerHTML = `
    <div class="col=md-1 hour">${hour}</div> 
        <textarea class="col-md-10 description" name="" id="input"></textarea>
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
    // colorChange();
 
});




// function getlocalStorage(hour){
//     let inputval = localStorage.getItem(hour)
//     if(true){
//       $("input").data(`input${hour}`)
//      var text= $(`input#inputText${hour}`).val(inputval)
//      console.log(text)
//     }
//   }

  // getlocalStorage();
function storeInput() {
 
    $(".saveBtn").on("click",handleSave)

};

storeInput();


function handleSave(event) {
  // get the id of our parent
  var hourId = $(this).parent().attr("id");
  // save data in textarea in local storage
  localStorage.setItem(moment().format("DDDYYYY") + hourId, $("#" + hourId + " textarea").val());
};

// function colorChange() {
//     var currentHour = new Date().getHours();
//     for (i=0; i>hours.length; i++) {
//        if(currentHour == hours[i]) {
//         $(".time-block").addClass("present");
//     } else if (currentHour < hours[i]) {
//         $(".time-block").addClass("future");
//     } else if (currentHour > hours[i]) {
//         $(".time-block").addClass("past");

//     }

// }
// }









