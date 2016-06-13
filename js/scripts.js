function Task(task, notes, date) {
  this.task = task;
  this.notes = notes;
  this.date = date;
}


$(document).ready(function(){

  $("form#input").submit(function(event){
    event.preventDefault();

    var task = ($("input#task").val());
    var notes = ($("input#notes").val());
    var date = ($("input#date").val());

    var output = new Task(task, notes, date);

    $("div#output ul").append("<li class='task'><h2>Task: " + output.task + "</h2><p>Notes: " + output.notes + "</p><p>Date: " + output.date + "</p></li>");

    $(".task").click(function () {
      this.remove();
    })
  });
});
