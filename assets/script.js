var container = document.querySelector(".container")

var time = moment().format('dddd, MM/DD/YYYY, h:mm');
  $("#currentDay").text(time)


var hours = ['08', '09', '10', '11', '12', '13', '14', '15', '16','17', '18', '19', '20']



hours.forEach(hour=>{
    console.log(hour)
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
    container.appendChild(row);

    



})

