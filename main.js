const player ='X'
const bot = '0'
$(document).ready(function(){
  const grid = [
    [' ', ' ', ' ' ],
    [' ', ' ', ' ' ],
    [' ', ' ', ' ' ]
  ];

  function isGameOver() {
   // ROW CHECK
   for(var i = 0; i < 3; i++) {
     if(grid[i][0] !== ' ' &&
       grid[i][0] === grid[i][1] &&
       grid[i][0] === grid[i][2]) {
         return grid[i][0];
       }
   }
   // COLUMN CHECK
   for(var j = 0; j < 3; j++) {
     if(grid[0][j] !== ' ' &&
       grid[0][j] === grid[1][j] &&
       grid[0][j] === grid[2][j]) {
         return grid[0][j];
       }
   }
   // 1st DIAGONAL CHECK
   if(grid[0][0] !== ' ' &&
     grid[0][0] === grid[1][1] &&
     grid[0][0] === grid[2][2]) {
       return grid[0][0];
   }
   // 2nd DIAGONAL CHECK
   if(grid[2][0] !== ' ' &&
     grid[2][0] === grid[1][1] &&
     grid[2][0] === grid[0][2]) {
       return grid[2][0];
   }
   // EMPTY SPOT CHECK
   for(var i=0; i<3; i++) {
     for(var j=0; j<3; i++) {
       if(grid[i][j] === ' ') {
         return false;
       }
     }
   }
   // IF NOBODY WON
   return null;
 }

 function bota(){
   for(var i=0; i<3; i++) {
     for(var j=0; j<3; i++) {
       if(grid[i][j] === ' ') {
         
         return {
           i: i,
           j: j
         };
       }
     }
   }
   return null;
 }


  $('.c').click(function(){
    $(this).html(player); //change
    const i = $(this).data('i');//saved
    const j = $(this).data('j');
    grid[i][j] = player;

    if (isGameOver()){
    }
    else{
      const move = bota();
      grid[move.i][move.j] = bot;
      //$('.c[data-i='+ move.i +'][data-j' + move.j + ']').html(bot);
      $('.c[data-i=' + move.i + '][data-j=' + move.j + ']').html(bot);
    }
    if(isGameOver()){
      alert('game over. the winner is ' + isGameOver());
    }
  });

  $('#restart').click(function() {
    for(var i = 0; i < 3; i++) {
      for(var j = 0; j < 3; j++) {
        grid[i][j] = ' ';
        $('.col[data-i=' + i + '][data-j=' + j + ']').html('');
        }
    }
  });
});
