var card2 = 0;
var card1 = 1;
var card3 =0;
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
         $('.s_b3').remove();
    
        $('.card2').css({border:'2px solid black'})
        $('.card3').css({border:'2px solid black'})
        
    
    card1++;
    card2=0;
    card3=0;
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
    card3=0;
      $('.s_b').remove();
      $('.s_b3').remove();
    
        $('.card1').css({border:'2px solid black'})
        $('.card3').css({border:'2px solid black'})
    cards=["colodes/coloda2/1.png", "colodes/coloda2/2.png", "colodes/coloda2/3.png", "colodes/coloda2/4.png", "colodes/coloda2/5.png", "colodes/coloda2/6.png", "colodes/coloda2/7.png", "colodes/coloda2/8.png", "colodes/coloda2/9.png","colodes/coloda2/10.png","colodes/coloda2/11.png","colodes/coloda2/12.png","colodes/coloda2/13.png","colodes/coloda2/14.png","colodes/coloda2/15.png", "colodes/coloda2/16.png","colodes/coloda2/17.png","colodes/coloda2/18.png","colodes/coloda2/19.png","colodes/coloda2/20.png","colodes/coloda2/21.png", "colodes/coloda2/22.png", "colodes/coloda2/23.png", "colodes/coloda2/24.png", "colodes/coloda2/25.png", "colodes/coloda2/26.png","colodes/coloda2/27.png","colodes/coloda2/28.png","colodes/coloda2/29.png", "colodes/coloda2/30.png","colodes/coloda2/31.png", "colodes/coloda2/32.png", "colodes/coloda2/33.png","colodes/coloda2/34.png","colodes/coloda2/35.png","colodes/coloda2/36.png", "colodes/coloda2/37.png", "colodes/coloda2/38.png", "colodes/coloda2/39.png","colodes/coloda2/40.png","colodes/coloda2/41.png","colodes/coloda2/42.png","colodes/coloda2/43.png","colodes/coloda2/44.png", "colodes/coloda2/45.png","colodes/coloda2/46.png","colodes/coloda2/47.png","colodes/coloda2/48.png", "colodes/coloda2/49.png", "colodes/coloda2/50.png", "colodes/coloda2/51.png","colodes/coloda2/52.png"];
    
    
    rub = "colodes/coloda2/rubashka.png";
    
})
$('.card3').click(function(){
    
    $('.card3').css({border:'6px solid green'})
    if (card3==0){
        $('.card3').after("<h3  style='color:green; margin-left:20px;' class='s_b3'>SELECTED</h3>")
      
    }
     
    
    
  
    card3++;
    card1=1;
    card2=0;
      $('.s_b').remove();
      $('.s_b2').remove();
    
        $('.card1').css({border:'2px solid black'})
        $('.card2').css({border:'2px solid black'})
    cards=["colodes/coloda3/1.png", "colodes/coloda3/2.png", "colodes/coloda3/3.png", "colodes/coloda3/4.png", "colodes/coloda3/5.png", "colodes/coloda3/6.png", "colodes/coloda3/7.png", "colodes/coloda3/8.png", "colodes/coloda3/9.png","colodes/coloda3/10.png","colodes/coloda3/11.png","colodes/coloda3/12.png","colodes/coloda3/13.png","colodes/coloda3/14.png","colodes/coloda3/15.png", "colodes/coloda3/16.png","colodes/coloda3/17.png","colodes/coloda3/18.png","colodes/coloda3/19.png","colodes/coloda3/20.png","colodes/coloda3/21.png", "colodes/coloda3/22.png", "colodes/coloda3/23.png", "colodes/coloda3/24.png", "colodes/coloda3/25.png", "colodes/coloda3/26.png","colodes/coloda3/27.png","colodes/coloda3/28.png","colodes/coloda3/29.png", "colodes/coloda3/30.png","colodes/coloda3/31.png", "colodes/coloda3/32.png", "colodes/coloda3/33.png","colodes/coloda3/34.png","colodes/coloda3/35.png","colodes/coloda3/36.png", "colodes/coloda3/37.png", "colodes/coloda3/38.png", "colodes/coloda3/39.png","colodes/coloda3/40.png","colodes/coloda3/41.png","colodes/coloda3/42.png","colodes/coloda3/43.png","colodes/coloda3/44.png", "colodes/coloda3/45.png","colodes/coloda3/46.png","colodes/coloda3/47.png","colodes/coloda3/48.png", "colodes/coloda3/49.png", "colodes/coloda3/50.png", "colodes/coloda3/51.png","colodes/coloda3/52.png"];
    
    
    rub = "colodes/coloda3/rubashka.png";
    
})
