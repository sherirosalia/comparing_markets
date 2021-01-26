


 
$(document).ready(function() {
  $('#piggy').html('<img src="../images/piggy_bank_cropped.png">');
});

$(document).ready(function(){

    $("#piggy").click(function(){
    $(".piggy").effect( "bounce", {times:3}, 300 );
});
  });


// $(document).ready(function() {
//   var image = new Image();
//   image.src = url;
//   $('#piggy').append(image);
// });


//    $('<img src="images/piggy_bank_cropped.png"  alt="piggy bank" width="40px;" height="60px;">').load(function()
//  {
//     $(this).appendTo('#piggy');
//   });

// $(document).ready(function(){
//     $("#piggy").click(function(){
//       $(this).hide();
//     });
//   });

// $( window ).on( "load", function() {
    
//     console.log( "window loaded" );
//     function loadImage() {
//         $('<img src="images/piggy_bank_cropped.png"  alt="piggy bank" width="40px;" height="60px;">').load(function() {
//           $(this).width(width).height(height).appendTo(target);
//         });
//     }
// });