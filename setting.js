var card2 = 0;
var card1 = 1;
$('.card1').click(function(){

    $('.card1').css({border:'6px solid green'})
    if (card1==1){
        $('.card1').after("<h3  style='color:green; margin-left:20px;' class='s_b'>SELECTED</h3>")
      
    }
     
    
    
    /*if(card1%2==0){
         $('.s_b').remove();
    
        $('.card1').css({border:'2px solid black'})
    }*/
    
         $('.s_b2').remove();
    
        $('.card2').css({border:'2px solid black'})
        
    
    card1++;
    card2=0;
    
    cards=["colodes/coloda1/1.png", "colodes/coloda1/2.png", "colodes/coloda1/3.png", "colodes/coloda1/4.png", "colodes/coloda1/5.png", "colodes/coloda1/6.png", "colodes/coloda1/7.png", "colodes/coloda1/8.png", "colodes/coloda1/9.png","colodes/coloda1/10.png","colodes/coloda1/11.png","colodes/coloda1/12.png","colodes/coloda1/13.png","colodes/coloda1/14.png","colodes/coloda1/15.png", "colodes/coloda1/16.png","colodes/coloda1/17.png","colodes/coloda1/18.png","colodes/coloda1/19.png","colodes/coloda1/20.png","colodes/coloda1/21.png", "colodes/coloda1/22.png", "colodes/coloda1/23.png", "colodes/coloda1/24.png", "colodes/coloda1/25.png", "colodes/coloda1/26.png","colodes/coloda1/27.png","colodes/coloda1/28.png","colodes/coloda1/29.png", "colodes/coloda1/30.png","colodes/coloda1/31.png", "colodes/coloda1/32.png", "colodes/coloda1/33.png","colodes/coloda1/34.png","colodes/coloda1/35.png","colodes/coloda1/36.png", "colodes/coloda1/37.png", "colodes/coloda1/38.png", "colodes/coloda1/39.png","colodes/coloda1/40.png","colodes/coloda1/41.png","colodes/coloda1/42.png","colodes/coloda1/43.png","colodes/coloda1/44.png", "colodes/coloda1/45.png","colodes/coloda1/46.png","colodes/coloda1/47.png","colodes/coloda1/48.png", "colodes/coloda1/49.png", "colodes/coloda1/50.png", "colodes/coloda1/51.png","colodes/coloda1/52.png"];
    rub= "colodes/coloda1/rubashka.png"
})
$('.card1').trigger("click")

$('.card2').click(function(){
    
    $('.card2').css({border:'6px solid green'})
    if (card2==0){
        $('.card2').after("<h3  style='color:green; margin-left:20px;' class='s_b2'>SELECTED</h3>")
      
    }
     
    
    
  
    card2++;
    card1=1;
    
      $('.s_b').remove();
    
        $('.card1').css({border:'2px solid black'})
    cards=["colodes/coloda2/1.png", "colodes/coloda2/2.png", "colodes/coloda2/3.png", "colodes/coloda2/4.png", "colodes/coloda2/5.png", "colodes/coloda2/6.png", "colodes/coloda2/7.png", "colodes/coloda2/8.png", "colodes/coloda2/9.png","colodes/coloda2/10.png","colodes/coloda2/11.png","colodes/coloda2/12.png","colodes/coloda2/13.png","colodes/coloda2/14.png","colodes/coloda2/15.png", "colodes/coloda2/16.png","colodes/coloda2/17.png","colodes/coloda2/18.png","colodes/coloda2/19.png","colodes/coloda2/20.png","colodes/coloda2/21.png", "colodes/coloda2/22.png", "colodes/coloda2/23.png", "colodes/coloda2/24.png", "colodes/coloda2/25.png", "colodes/coloda2/26.png","colodes/coloda2/27.png","colodes/coloda2/28.png","colodes/coloda2/29.png", "colodes/coloda2/30.png","colodes/coloda2/31.png", "colodes/coloda2/32.png", "colodes/coloda2/33.png","colodes/coloda2/34.png","colodes/coloda2/35.png","colodes/coloda2/36.png", "colodes/coloda2/37.png", "colodes/coloda2/38.png", "colodes/coloda2/39.png","colodes/coloda2/40.png","colodes/coloda2/41.png","colodes/coloda2/42.png","colodes/coloda2/43.png","colodes/coloda2/44.png", "colodes/coloda2/45.png","colodes/coloda2/46.png","colodes/coloda2/47.png","colodes/coloda2/48.png", "colodes/coloda2/49.png", "colodes/coloda2/50.png", "colodes/coloda2/51.png","colodes/coloda2/52.png"];
    
    
    rub = "colodes/coloda2/rubashka.png";
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})