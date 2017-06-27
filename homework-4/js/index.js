console.log(5);
//should change style to Nav links
$("a").click(function(){
  $("a").addClass("link");
  console.log("testing");
});

//Pop up widow when you click the button
/*
$("#noInfo").click(popUpWindow);

function popUpWindow(){
  alert("We arent ready for this info yet!");
}
*/

//reveal mast

$("#hide").click(function(){
  $(".mast").hide(2500);
  $("#reveal").addClass("reveal");
});

$("#reveal").click(function(){
  $(".mast").show(500);
  $("#reveal").removeClass("reveal");
});

//not ready for you info yet window

$("#noInfo").click(function(){
  $("#notReady").addClass("move-forward");
});

$("#removeWindow").click(function(){
  $("#notReady").removeClass("move-forward");
});
/*
$("#fade").mouseenter(function (){
  $("#fade").hide(1000);
  $("#fade").mouseleave(function (){
    $("#fade").show(1000);
  });
});
*/

$("#readMore1").click(function(event){
  event.preventDefault();
  $("#moreBlog1").slideDown("slow");
  $("#readMore1").hide();
  $("#moreBlog1").show();
})

$("#readLess1").click(function(event){
  event.preventDefault();
  $('#moreBlog1').slideUp('slow');
  $('#lessBlog1').hide();
  $('#readMore1').show();
})



$("#readMore2").click(function(event){
  event.preventDefault();
  $("#moreBlog2").slideDown("slow");
  $("#readMore2").hide();
  $("#moreBlog2").show();
})

$("#readLess2").click(function(event){
  event.preventDefault();
  $('#moreBlog2').slideUp('slow');
  $('#lessBlog2').hide();
  $('#readMore2').show();
})
