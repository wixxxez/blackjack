var cards = ["colodes/coloda1/1.png", "colodes/coloda1/2.png", "colodes/coloda1/3.png", "colodes/coloda1/4.png", "colodes/coloda1/5.png", "colodes/coloda1/6.png", "colodes/coloda1/7.png", "colodes/coloda1/8.png", "colodes/coloda1/9.png","colodes/coloda1/10.png","colodes/coloda1/11.png","colodes/coloda1/12.png","colodes/coloda1/13.png","colodes/coloda1/14.png","colodes/coloda1/15.png", "colodes/coloda1/16.png","colodes/coloda1/17.png","colodes/coloda1/18.png","colodes/coloda1/19.png","colodes/coloda1/20.png","colodes/coloda1/21.png", "colodes/coloda1/22.png", "colodes/coloda1/23.png", "colodes/coloda1/24.png", "colodes/coloda1/25.png", "colodes/coloda1/26.png","colodes/coloda1/27.png","colodes/coloda1/28.png","colodes/coloda1/29.png", "colodes/coloda1/30.png","colodes/coloda1/31.png", "colodes/coloda1/32.png", "colodes/coloda1/33.png","colodes/coloda1/34.png","colodes/coloda1/35.png","colodes/coloda1/36.png", "colodes/coloda1/37.png", "colodes/coloda1/38.png", "colodes/coloda1/39.png","colodes/coloda1/40.png","colodes/coloda1/41.png","colodes/coloda1/42.png","colodes/coloda1/43.png","colodes/coloda1/44.png", "colodes/coloda1/45.png","colodes/coloda1/46.png","colodes/coloda1/47.png","colodes/coloda1/48.png", "colodes/coloda1/49.png", "colodes/coloda1/50.png", "colodes/coloda1/51.png","colodes/coloda1/52.png"];
var rub = "colodes/coloda1/rubashka.png"

function getRandomCard(){
    
     
    var index = Math.floor(Math.random()*51)
    
    
    
    return [cards[index], index];
}

function getPlayerCards(){
    var card1p = getRandomCard()
    
     $('.card_1_p').attr("src",card1p[0])
    var card2p = getRandomCard()
    $('.card_2_p').attr("src",card2p[0])
    
    return [card1p[1],card2p[1]]
}
function getPriceCard(index){

    var price = index+1;
    if (price <= 13 ) {
        if(price == 11 || price==12 || price ==13){
            return 10;
        }
         if (price == 1) {
            return 11;
        }
        else {
            return price;
        }
    
    }
    if (price > 13 && price <=26) {
        price = price-13
        if(price == 11 || price==12 || price ==13){
            return 10;
        }
        if (price == 1) {
            return 11;
        }
        else {
            return price;
        }
    }
    if (price > 26 && price <=39) {
        price = price - 26;
        if(price == 11 || price==12 || price ==13){
            return 10;
        }
         if (price == 1) {
            return 11;
        }
        else {
            return price;
        }
    }
    if (price > 39 && price <=52) {
        price = price - 39;
        if(price == 11 || price==12 || price ==13){
            return 10;
        }
         if (price == 1) {
            return 11;
        }
        else {
            return price;
        }
    }
}





function show_price_enemy(priceEnemy) {
    $('.price1').text(priceEnemy+"+ ?")
   
    
}

function show_price_player(somes){
    $('.price2').text(somes)
}











function getEnemyCards(){
    var card1e = getRandomCard()
    
     $('.card_1_e').attr("src",card1e[0])
    var card2e = getRandomCard()
    $('.card_2_e').attr("src",rub)
    
    return [card1e[1],card2e[1]]
}

var EnemyImCard = []
var EnemyCardsG = []
var PlayerCardsG = []
function show_enemy_card(){
    var x = get_sum(EnemyCardsG)
    $('.price1').text(x)
    for (var i = 0; i < EnemyImCard.length;i++){
        $('.card_'+(i+2)+'_e').attr("src",EnemyImCard[i])
    }
}
function if_tuz(array) {
    var tuz_status = false;
    for(var i=0; i < array.length; i++){
        if(array[i]==11){
            tuz_status=true;
        }
        
    }
    
    if(tuz_status==true){
        return tuz_status;
    }
    else{
        return tuz_status;
    }
    
}
function get_sum(array) {
    var sum = 0;
    var tuz = if_tuz(array)   
    for(var i=0; i < array.length; i++){
      
        sum += array[i]
    }
    if(tuz == true){
        if(sum>21){
            sum=sum-10;
        }
    }
    
    return sum;
    
}

var statusOfPlayer =true;
var statusOfEnemy =true;
var GlobalYCard = 2 
function get_enemy_card() {
    var cards = getRandomCard();
    if(GlobalYCard==7){
        statusOfPlayer=false
        
    }
    else {
       var card = "<img class='card_"+(GlobalYCard)+"_e' src='"+rub+"'>"
        $('.card_'+(GlobalYCard-1)+'_e').after(card)
    EnemyCardsG.push(getPriceCard(cards[1]))
    EnemyImCard.push(cards[0])
    GlobalYCard++; 
    }
    
}
function enemy_move(cards_in_hand){
    var e_c = cards_in_hand;
    if (e_c > 16) {
        statusOfEnemy = false
        return 0;
    }
    if (e_c == 16){
        var x_k = Math.floor(Math.random()*100)
        if(x_k > 51) {
            get_enemy_card()
        }
        else {
            statusOfEnemy =false;
            return 0;
        }
    }
    else {
        get_enemy_card();
    }
}
function winner(ea,pa){
    
    if( ea > 21 && pa > 21 ){
        $('.winner_st_e').text("REMIS")
        $('.winner_st_p').text("REMIS")
    }
    if(ea <= 21 && pa <= 21 ) {
        
        if( ea > pa) {
            $('.winner_st_p').text("LOSER")
             $('.winner_st_e').text(" WINNER ")
        }
        else {
             $('.winner_st_e').text("LOSER")
             $('.winner_st_p').text(" WINNER ")
        }
        
    }
    
    if ( ea > 21 && pa < 21) {
        $('.winner_st_e').text("LOSER")
             $('.winner_st_p').text(" WINNER ")
    }
    if (pa > 21 && ea < 21) {
       $('.winner_st_p').text("LOSER")
             $('.winner_st_e').text(" WINNER ")
    }
    if (pa == 21) {
        $('.winner_st_p').text("BLACK JACK")
    }
    if (ea == 21) {
        $('.winner_st_e').text("BLACK JACK")
    }
    if( ea == pa) {
             $('.winner_st_p').text("REMIS")
             $('.winner_st_e').text("REMIS")
    }
     
    show_enemy_card()
    again();
}
function game_main() { 
    
    var sum_e = get_sum(EnemyCardsG)
    
    var sum_p = get_sum(PlayerCardsG)
    
    show_price_player(sum_p)
    if(sum_p>=21){
        if(sum_p==21){
            $('.winner_st_p').text("BLACK JACK") 
            statusOfEnemy =false 
            statusOfPlayer = false 
        }
        else{
            $('.winner_st_p').text("So much cards...")  
        }
        statusOfPlayer = false;
    }
    
    sleep(1000).then(() => {
        enemy_move(sum_e);
        return_arrow()
        if(sum_e>=21){
        if(sum_e==21){
            $('.winner_st_e').text("BLACK JACK")   
            statusOfEnemy =false 
            statusOfPlayer = false 
        }
        else{
            $('.winner_st_e').text("")  
        }
        statusOfEnemy = false;
    }
    
         if(statusOfEnemy == false && statusOfPlayer ==false) {
        winner(sum_e,sum_p)
    }
    if (statusOfEnemy == true && statusOfPlayer ==false) {
        game_main()
    }
    });
   
    
    
   
}

function start_game() {
    
    var EnemyCards = getEnemyCards();
    var PlayerCards = getPlayerCards();
    
    var price = getPriceCard(EnemyCards[0]);
    show_price_enemy(price)
    var priceP1 = getPriceCard(PlayerCards[0])
    
    var priceP2 = getPriceCard(PlayerCards[1]);
    EnemyCardsG.push(price)
    
    PlayerCardsG.push(priceP1)
    PlayerCardsG.push(priceP2)
    
    game_main()
    
}
    var GlobalXCard = 2;
$('.getCard').click(function(){
    
    if(GlobalXCard==7){
        statusOfPlayer=false
        
    }
    if(statusOfPlayer==true){
        cardP = getRandomCard();
        var card = "<img class='card_"+(GlobalXCard+1)+"_p' src='"+cardP[0]+"'>"
        $('.card_'+GlobalXCard+'_p').after(card)
        PlayerCardsG.push(getPriceCard(cardP[1]))
        
        return_arrow();
        GlobalXCard++;
        game_main();
    }
    
    else {
        
    }
    
})
$('.StopCard').click(function(){
    statusOfPlayer = false;
    game_main()
})
function clear(){
    $('.card_3_p').remove()
    $('.card_4_p').remove()
    $('.card_5_p').remove()
    $('.card_6_p').remove()
    $('.card_7_p').remove()
    $('.card_3_e').remove()
    $('.card_4_e').remove()
    $('.card_2_e').remove()
    $('.card_5_e').remove()
    $('.card_6_e').remove()
    $('.card_7_e').remove()
    GlobalXCard = 2
    GlobalYCard = 2
    statusOfPlayer =true;
    statusOfEnemy =true;
    EnemyImCard = []
    EnemyCardsG = []
    PlayerCardsG = []
    $('.winner_st_e').text("")
    $('.winner_st_p').text("")
            $('.arrow_k').css({"transform":"rotate(-90deg)"})
}
$('.exit_m').click(function(){
    $('.game_on').animate({width:'0px',height:'0px'},500)
    clear()
    sleep(500).then(() => {
    $('.game_on').css({display:'none'})
    });
    show_menu();
})
$('.again').click(function(){
    clear()
    start_game();
    $('.play_again').animate({width:'0px',height:'0px'},500)
    sleep(500).then(()=>{
           $('.play_again').css({"display":"none"})
    })
 
})