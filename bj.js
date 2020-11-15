function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
$('.exit_m').hover(function(){
    $('.txt').css({display:"block"})
})
$('.exit_m').mouseleave(function(){
    $('.txt').css({display:"none"})
})
window.onload=function(){
   
    $('.main_menu').animate({height:'450px'},1500)
    
   
}
function show_menu(){
    $('.main').css({display:"block"})
    $('.main').animate({width:'100%',height:'100vh'},1000)
}
$('.setting').click(function(){
    $('.setting_menu').css({display:'block'})
    $('.setting_menu').animate({width:'450px',height:'600px'},500)
})
$('.close_s').click(function(){
    $('.setting_menu').animate({width:'0px',height:'0px'},500)
    
    sleep(500).then(() => {
    $('.setting_menu').css({display:'none'})
});
})








$('.game').click(function(){
    $('.game_on').css({display:"block"})
    $('.game_on').animate({width:'100%',height:'100vh'},500)
    $('.main').css({display:"none"})
    start_game();
})

var global_x = 2;
function return_arrow(){
    if (global_x%2==0){
        
        $('.arrow_k').css({"transform":"rotate(90deg)"})
    
       
    }
    else {
        
        $('.arrow_k').css({"transform":"rotate(-90deg)"})

        
    
    }
    global_x++;
    
}
function again(){
    if($('.winner_st_p').text()=='LOSER'){
        $('.win').css({"color":"red","text-shadow":"2.5px 2.5px darkred"})
    }
    else if($('.winner_st_p').text()==' WINNER ' || ($('.winner_st_p').text()=='BLACK JACK' )){
        $('.win').css({"color":"lawngreen","text-shadow":"2.5px 2.5px darkgreen"})
       }
    else if (($('.winner_st_p').text()=='REMIS')){
        $('.win').css({"color":"gold","text-shadow":"2.5px 2.5px darkgoldenrod"})
       }
        
    
    
    $('.win').text($('.winner_st_p').text())
    $('.play_again').css({"display":"flex"})
    $('.play_again').animate({width:'100%',height:'100vh'},500)
    
}










