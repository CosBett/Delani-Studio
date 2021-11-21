
	$(function(){
    loopDown();
  });
  
  function loopDown(){
          $("#mouse_click").animate({
              marginTop : 10
              },
              500, function() {
              loopUp();
          });
      }
  
      function loopUp(){
          $("#mouse_click").animate({
              marginTop : 0
              },
              500, function() {
              loopDown();
          });
      }
  