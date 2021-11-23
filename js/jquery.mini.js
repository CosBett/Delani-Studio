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
 //portfolio- blank project animation 
$("#blank").hover(
  function() {
    $("#blank").animate({ opacity: "0.3" });
    $("#blank-t").toggle("#blank");
  },
  function() {
    $("#blank").animate({ opacity: "1" });
    $("#blank-t").toggle("#blank");
  }
);
 //portfolio- ontario project animation 
 $("#ontario").hover(
  function() {
    $("#ontario").animate({ opacity: "0.3" });
    $("#ontario-t").toggle("#ontario");
  },
  function() {
    $("#ontario").animate({ opacity: "1" });
    $("#ontario-t").toggle("#ontario");
  }
);
 //portfolio- yellow pyramid project animation 
 $("#yellow").hover(
  function() {
    $("#yellow").animate({ opacity: "0.3" });
    $("#yellow-t").toggle("#yellow");
  },
  function() {
    $("#yellow").animate({ opacity: "1" });
    $("#yellow-t").toggle("#yellow");
  }
);
 //portfolio- jim carrey app project animation 
 $("#jim ").hover(
  function() {
    $("#jim").animate({ opacity: "0.3" });
    $("#jim-t").toggle("#jim ");
  },
  function() {
    $("#jim ").animate({ opacity: "1" });
    $("#jim-t").toggle("#jim ");
  }
);
 //portfolio- Have a good day project animation 
 $("#have").hover(
  function() {
    $("#have").animate({ opacity: "0.35" });
    $("#have-t").toggle("#have");
  },
  function() {
    $("#have").animate({ opacity: "1" });
    $("#have-t").toggle("#have");
  }
);
 //portfolio- calculator project animation 
 $("#calculator").hover(
  function() {
    $("#calculator").animate({ opacity: "0.35" });
    $("#calculator-t").toggle("#calculator");
  },
  function() {
    $("#calculator").animate({ opacity: "1" });
    $("#calculator-t").toggle("#calculator");
  }
);
 //portfolio- burned app project animation 
 $("#burned").hover(
  function() {
    $("#burned").animate({ opacity: "0.35" });
    $("#burned-t").toggle("#burned");
  },
  function() {
    $("#burned").animate({ opacity: "1" });
    $("#burned-t").toggle("#burned");
  }
);
 //portfolio- Girraffe Restaurant project animation 
 $("#girraffe").hover(
  function() {
    $("#girraffe").animate({ opacity: "0.35" });
    $("#girraffe-t").toggle("#girraffe");
  },
  function() {
    $("#girraffe").animate({ opacity: "1" });
    $("#girraffe-t").toggle("#girraffe");
  }
);
