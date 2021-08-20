 class EVTask{
    constructor(){
        this.S = createInput('Write Poem');
        this.U = createInput('Write Poem');
        this.N = createInput('Write Poem');
        this.L = createInput('Write Poem');
        this.I = createInput('Write Poem');
        this.G = createInput('Write Poem');
        this.H = createInput('Write Poem');
        this.T = createInput('Write Poem');
        this.state = {
        text:'',
           s:'',
           u:'',
           n:'',
           l:'',
           i:'',
           g:'',
           h:'',
           t:'',
          };
    }
    display(){
        this.S.position(500,210);        
        this.U.position(500,240);        
        this.N.position(500,270);      
        this.L.position(500,300);        
        this.I.position(500,330);
        this.G.position(500,360);        
        this.H.position(500,390);        
        this.T.position(500,420);
        fill('Black')
        textSize(20)
        strokeWeight(0);
        textStyle('bold','italic')
        text('S',430,210)
        text('U',430,240)
        text('N',430,270)
        text('L',430,300)
        text('I',430,330)
        text('G',430,360)
        text('H',430,390)
        text('T',430,420)

        //this.S = onchange;
        
          /*onchange={ text => {
            this.setState({ text: text });
          }}*/
          
          text => {
            this.setState({ text: this.state.S });
          }
        //value={this.state.text}
         EvDone.visiable=true;
          if(mousePressedOver(EvDone)){
            /*this.setState({ S: this.state.text });
            this.setState({ U: this.state.text });
            this.setState({ N: this.state.text });
            this.setState({ L: this.state.text });
            this.setState({ I: this.state.text });
            this.setState({ G: this.state.text });
            this.setState({ H: this.state.text });
            this.setState({ T: this.state.text });*/
            this.S.hide();
            this.U.hide();
            this.N.hide();
            this.L.hide();
            this.I.hide();
            this.G.hide();
            this.H.hide();
            this.T.hide();
            EvDone.visiable=false;
            gameState=7;
        }
         
          //
    
    }
}