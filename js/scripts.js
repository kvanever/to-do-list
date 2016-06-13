function Task(task, notes, date, completed) {
  this.task = task;
  this.notes = notes;
  this.date = date;
  this.completed = false;
}

Task.prototype.markCompleted = function(task) {
  this.completed = true;
}

$(document).ready(function(){

  $("form#input").submit(function(event){
    event.preventDefault();

    var task = ($("input#task").val());
    var notes = ($("input#notes").val());
    var date = ($("input#date").val());
    var completed = false;

    var output = new Task(task, notes, date, completed);

    $("div#output ul").append("<li><span class='task " + output.task + "'>" + output.task + "</span></li>");

    $(".task").last().click(function() {
    $("#full-detail").show();
    $("#full-detail h2").text(output.task);
    $(".notes").text(output.notes);
    $(".date").text(output.date);
    });

    $("#full-detail h2").click(function () {
      $("#full-detail").hide();
      $("li." + output.task).remove();

    })
  });
});
