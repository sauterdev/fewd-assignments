console.log(5);
//should change style to Nav links
$("#navOption").click(styleLink);

function styleLink(){
  $("#navOption").addClass("link");
}
//Pop up widow when you click the button
$("#noInfo").click(popUpWindow);

function popUpWindow(){
  alert("We arent ready for this info yet!");
}

//reveal mast

$("#hide").click(function(){
  $(".mast").hide(2500);
  $("#reveal").addClass("reveal");
});

$("#reveal").click(function(){
  $(".mast").show(500);
  $("#reveal").removeClass("reveal");
});
