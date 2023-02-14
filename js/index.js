console.log('loaded correctly!')

// $('#goHome').on('click', function () {
//    $(this).animate({ scrollTop: 0 }, 600);
//    return false;
    
//    });;
    

$(document).ready(function() {
   $("#goHome").click(function() {
     $("html, body").animate({ scrollTop: 0 }, 600);
     return false;
   });
 });
 