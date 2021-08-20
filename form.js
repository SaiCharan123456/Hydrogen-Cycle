class Form{
    constructor(){
       
        
    }
start(){
   
    
  
    
    if(mousePressedOver(character1)) {
        character1.visible=false;
     iconCh1.visible=true;
     character2.visible = false;
     character1.remove();
     gameState = 3
     if(gameState === 3){
        
        //iconCh1.visible=true;
        character1.remove();
        character2.remove();
        }
     chter1.visible=false;
     chter2.remove();
      if(gameState === 4){
        chter1.visible=true;
        chter2.remove();
          
        iconCh1.visible=false; 
        }
    
     
    }
    if(mousePressedOver(character2)) {
        character2.visible = false; 
        iconCh2.visible=true;
        character1.visible = false;
        chter1.remove();
        chter2.visible = false; 
        gameState = 3;
        character1.remove();
        character2.remove();
        if(gameState === 3){
           
            character1.remove();
        character2.remove();
            //iconCh2.visible=true;   
            }
        if(gameState === 4){
            chter2.visible = true; 
            chter1.remove();
          iconCh2.visible=false;
        }
    
       }
}



}