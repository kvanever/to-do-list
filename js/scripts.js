function Task(task, notes, date, completed) {
  this.task = task;
  this.notes = notes;
  this.date = date;
  this.completed = false;
}


$(document).ready(function(){

  $("#input").submit(function(event){
    event.preventDefault();
    var input = ($("#blank").val());

    var output = "";

    $('#output').text(output);

  });
});
