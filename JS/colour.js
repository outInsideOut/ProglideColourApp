
$(document).ready(function() {
  console.log("ready");

  setColours();
});


function setColours() {
  console.log("coloursSetting");

// loops through .colourdivs setting bgcolor to id value
    $(".colourBox .colour").each(function() {
      var colour = $(this).data("colour");
      $(this).css("background-color", colour);
      console.log(colour);
    });
}

var prev;
var colour;
$(document).ready(function(){
  $(".colour").click(function(){
    console.log("click");
    colour = $(this).data("colour");

    console.log(colour);
    $(".customDoor").css("background-color", colour);
    $(this).addClass("selected");
    $("#" + prev).removeClass("selected");
    prev = $(this).attr("id");

    var data = $(this).data("name");
    console.log(data);

    $(".colourName").empty().text("" + data);
  })
});
