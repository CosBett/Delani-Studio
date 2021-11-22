// What we do Description- Design
  $(document).ready(function(){
   $("#design").click(function(){
      $("#design").slideDown().hide();
      $("#designdes").slideUp().show();
    });
    $("#designdes").click(function(){
      $("#designdes").slideDown().hide();
      $("#design").slideUp().show();
    });
  });  
// What we Do Description- Development
  $(document).ready(function(){
    $("#development").click(function(){
       $("#development").slideDown().hide();
       $("#developmentdes").slideUp().show();
     });
     $("#developmentdes").click(function(){
       $("#developmentdes").slideDown().hide();
       $("#development").slideUp().show();
     });
   });
//what we do Description - Product Management
$(document).ready(function(){
  $("#product").click(function(){
     $("#product").slideDown().hide();
     $("#productdes").slideUp().show();
   });
   $("#productdes").click(function(){
     $("#productdes").slideDown().hide();
     $("#product").slideUp().show();
   });
 });

//   $(document).ready(function () {
//     $("#blank").hover(function () {
//         $("blank-t").addClass("active");  //Add the active class to the area is hovered
//     }, function () {
//         $("blank").addClass("not-active");
//     });
// });
// $(document).ready(function(){
//   $("#blank").(function(){
//     $("#blank-t").show();
//   }).mouseout(function(){
//     $("#blank-t").hide();
//   });
// });

$("#blank").hover(
  function() {
    $("#blank").animate({ opacity: "0.35" });
    $("#blank-t").toggle("#blank");
  },
  function() {
    $("#blank").animate({ opacity: "1" });
    $("#blank-t").toggle("#blank");
  }
);
/*$(document).ready(function(){
  $(document).ready(function(){
    $("#development").mouseenter(function(){
      $("#development").slideDown().hide();
      $("#developmentdes").show();
    });
    $("#developmentdes").mouseleave(function(){
      $("#evelopmentdes").slideUp();
      $("#development").slideDown();
    });
  });
})
$(document).ready(function(){
  $(document).ready(function(){
    $("#product").mouseenter(function(){
      $("#product").slideDown().hide();
      $("#productdes").show();
    });
    $("#productdes").mouseleave(function(){
      $("#productdes").slideUp();
      $("#product").slideDown();
    });
  });
 })* */