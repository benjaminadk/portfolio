import React,{Component} from 'react';
import  {Button, Collapse, Image, Col, Label } from 'react-bootstrap';

class Fun extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      card1In: false,
      card2In: false,
      userTotal: 0,
      compTotal: 0,
      statusc: "HOWDIE PARTNER",
      statusp: "PRESS SHOW CARDS",
      playerHits: 0,
      hit1: false,
      hit2: false,
      hit3: false,
      compHits: 0,
      hit1C: false,
      hit2C: false,
      hit3C: false,
      playAgain: false,
      scoreP: 0,
      scoreC: 0
    };
    this.cardsInit = this.cardsInit.bind(this);
    this.showCards = this.showCards.bind(this);
    this.cardVal = this.cardVal.bind(this);
    this.checkComp = this.checkComp.bind(this);
    this.checkPlayer = this.checkPlayer.bind(this);
    this.handlePlayerHits = this.handlePlayerHits.bind(this);
    this.handlePlayerHold = this.handlePlayerHold.bind(this);
  }
  cardVal(card){
    if(card==='KING'||card==='QUEEN'||card==='JACK'){
      return card = 10;
    }
    else if(card==='ACE'){
      return card = 11;
    }
    else{
      return card = parseInt(card,10);
    }
  }
  showCards(){
    let card1 = this.cardVal(this.state.cards[0].value)
    let card2 = this.cardVal(this.state.cards[1].value)
    let card3 = this.cardVal(this.state.cards[2].value)
    let card4 = this.cardVal(this.state.cards[3].value)
    
    this.setState({
      card1In: !this.state.card1In,
      card2In: !this.state.card2In,
      userTotal: card1 + card2,
      compTotal: card3 + card4
    },function(){
     this.checkComp();
  })}
  
  checkComp(){
    if(this.state.compTotal===21){
      this.setState({
        statusc: "DEALER HAS 21",
        statusp: "YOU LOSE",
        playAgain: true,
        scoreC: this.state.scoreC+1
      });
    }else if(this.state.compTotal>21){
      this.setState({
        statusc: "DEALER BUST",
        statusp: "PLAYER WINS",
        playerAgain: true,
        scoreP: this.state.scoreP+1
      });
    }
    else if(this.state.compTotal>=17){
      this.setState({
        statusc: "I HAVE TO HOLD"
      });
    }else{
      this.setState({
        statusc: "I HAVE TO DRAW"
      });
    }
  }
  checkPlayer(){
        if(this.state.userTotal===21 && this.state.compTotal!==21){
      this.setState({
        statusc: 'I FAVOR HUMANS, SCREW THE RULES',
        statusp: 'YOU WIN',
        playAgain: true,
        scoreP: this.state.scoreP+1
      }); 
      }else if(this.state.userTotal>21){
        this.setState({
          statusc: "YOU OVER 'REACTED'...",
          statusp: "YOU BUSTED & YOU LOSE"
        },function(){
          this.setState({
            playAgain: true,
            scoreC: this.state.scoreC+1
          })
        });
      }else{
        this.setState({
          statusp: "YOU ARE STILL ALIVE"
        });
      }
    }
  handlePlayerHits(){
    this.setState({playerHits: this.state.playerHits+1}, function(){
      if(this.state.playerHits===1){
        let card5 = this.cardVal(this.state.cards[4].value)
        this.setState({
          hit1: true,
          userTotal: this.state.userTotal + card5
        },function(){
          setTimeout(this.checkPlayer,1000);
        });
      }else if(this.state.playerHits===2){
        let card6 = this.cardVal(this.state.cards[5].value)
        this.setState({
          hit2: true,
          userTotal: this.state.userTotal + card6
        },function(){
          setTimeout(this.checkPlayer,1000);
        });
      }else if(this.state.playerHits===3){
        let card7 = this.cardVal(this.state.cards[6].value)
        this.setState({
          hit3: true,
          userTotal: this.state.userTotal + card7
        },function(){
          setTimeout(this.checkPlayer,1000);
        });
      }
    })}
    handlePlayerHold(){
      if(this.state.userTotal===21){
        this.setState({
          statusp: "YOU WIN",
          statusc: "PLAYER HAS 21!",
          playAgain: true,
          scoreP: this.state.scoreP+1
        });
      }
      else if(this.state.compTotal>=17){
        if(this.state.compTotal>=this.state.userTotal && this.state.compTotal<=21){
          this.setState({
            statusc: "DEALER HAS "+this.state.compTotal,
            statusp: "DEALER WINS",
            playAgain: true,
            scoreC: this.state.scoreC+1
          });
        }else{
          this.setState({
            statusc: "PLAYER HAS "+this.state.userTotal,
            statusp: "PLAYER WINS",
            playAgain: true,
            scoreP: this.state.scoreP+1
          });
        }
      }
      else{
         this.setState({compHits: this.state.compHits+1}, function(){
      if(this.state.compHits===1){
        let card10 = this.cardVal(this.state.cards[9].value)
        this.setState({
          hit1C: true,
          compTotal: this.state.compTotal + card10
        },function(){
          this.handlePlayerHold();
        });
      }
      else if(this.state.compHits===2){
         let card9 = this.cardVal(this.state.cards[8].value)
        this.setState({
          hit2C: true,
          compTotal: this.state.compTotal + card9
        },function(){
          this.handlePlayerHold();
        });
      }else if(this.state.compHits===3){
         let card8 = this.cardVal(this.state.cards[7].value)
        this.setState({
          hit3C: true,
          compTotal: this.state.compTotal + card8
        },function(){
          this.handlePlayerHold();
        });
      }
    });
      }}
  componentWillMount(){
     this.cardsInit()
  }
  cardsInit(){
    let cards;
     fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=10')
     .then( res => res.json() )
     .then( data => cards = data.cards)
     .then( data => this.setState({
      cards: cards,
      card1In: false,
      card2In: false,
      userTotal: 0,
      compTotal: 0,
      statusc: "HOWDIE PARTNER",
      statusp: "NEW GAME",
      playerHits: 0,
      hit1: false,
      hit2: false,
      hit3: false,
      compHits: 0,
      hit1C: false,
      hit2C: false,
      hit3C: false,
      playAgain: false
     }))
     .catch( err => console.log(err))
  }
  
  render(){
    
    return(
      <div id="funWrapper">
      <h1><span className="score">{this.state.scoreP}</span>BLACKJACK<span className="score">{this.state.scoreC}</span></h1>
      <Collapse in={this.state.playAgain}>
      <Button onClick={this.cardsInit}>PLAY AGAIN</Button>
      </Collapse>
      <h3>DEALER: {this.state.statusc}</h3>
      <h3>STATUS: {this.state.statusp}</h3>
      <Col className="card-game" md={6}>
      <h2>YOUR HAND</h2>
     
      
      <Collapse in={this.state.card1In}>
      <div className='card-collapse'>
      
      <Image src={this.state.cards.length>0 ? this.state.cards[0].image : ""} height={100}/>
      <Image src={this.state.cards.length>0 ? this.state.cards[1].image : ""} height={100}/>
      <Image src={this.state.hit1 ? this.state.cards[4].image : null} height={100}/>
      <Image src={this.state.hit2 ? this.state.cards[5].image : null} height={100}/>
      <Image src={this.state.hit3 ? this.state.cards[6].image : null} height={100}/>
      <br/>
      <Label className="labelWrapper">{this.state.userTotal}</Label>
      <br/>
      <div>
      
      <Button onClick={this.handlePlayerHits} disabled={this.state.playAgain}>HIT ME</Button>
      <Button onClick={this.handlePlayerHold} disabled={this.state.playAgain}>HOLD</Button>
      </div>
      </div>
      
      </Collapse>
      
      <Button onClick={this.showCards}>SHOW CARDS</Button>
      
      </Col>
      
      <Col className="card-game" md={6}>
      <h2>DEALER HAND</h2>
      
      <Collapse in={this.state.card2In}>
      <div className='card-collapse'>
    
      <Image src={this.state.cards.length>0 ? this.state.cards[2].image : ""} height={100}/>
      <Image src={this.state.cards.length>0 ? this.state.cards[3].image : ""} height={100}/>
      <Image src={this.state.hit1C ? this.state.cards[9].image : null} height={100}/>
      <Image src={this.state.hit2C ? this.state.cards[8].image : null} height={100}/>
      <Image src={this.state.hit3C ? this.state.cards[7].image : null} height={100}/>
      
      <br/>
      <div className="labelWrapper">
      <Label>{this.state.compTotal}</Label>
      <br/>
      </div>
      </div>
      </Collapse>
      
      <Button onClick={this.showCards}>SHOW CARDS</Button>
      
      </Col>
    
      </div>
      );

}
}
export default Fun;
