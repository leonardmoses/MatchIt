import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import styleCards from "../styles/Cards.module.scss"



export const getStaticProps = async () => {
    const res = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=4');
    const data = await res.json();

    return {
        props: { deckInfo: data}
    }
}


const Cards = ({ deckInfo }) => {

    let predeck = []
    let deck = []
    let deckDouble = []

    const [cards, setCards] = useState(() => {
        predeck = deckInfo.cards
        deck = predeck
        deckDouble = []
    
        deck.forEach(card => {
    
            card.visible = false
            deckDouble.push(card)
            let copy = Object.assign({}, card)
            card.code2 = card.code+"-"+"1"
            copy.code2 = card.code+"-"+"2"
            deckDouble.push(copy)
            
        });


        return deckDouble
    });

    

    // console.log(deckInfo)
    // console.log(deck1 , deck2)
    
//#region --------- separating into 2 decks --------------


    

//#endregion --------- separating into 2 decks --------------

//#region ------------ mapping and doubling card ------------

    // let deck = predeck.flatMap(card => {

    //     card.visible = false;
    //     const doublecard1 = [card, card]

    //     return (
    //         doublecard1 
    //     )
    // });

    // console.log(deck)

    // deck.forEach(element => {

    // });

//#endregion ---------- mapping and doubling card ------------

//#region ------------ shuffle deck function -----------------

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    shuffle(deckDouble)

//#endregion ------------ shuffle deck function ---------------

    function clickHandle(code2) {
        
        const newCards = cards.map( card => {
            if(card.code2 === code2) {
                card.visible = !card.visible
            }
            return card
        })

        setCards(newCards)
    }

    return ( 

        <Layout>
        
        <div className={styleCards.body}>
            <div className={styleCards.cardinfo}>
                <h1>You are playing with {deckDouble.length} cards</h1>
                <h2>Click on a card to flip</h2>
                <h2 hidden>Remaining Cards in the Deck: {deckInfo.remaining}</h2>
            </div>

            <div className={styleCards.container}>
                    
                    <div className={styleCards.grid}>
                    {cards.map((card, idx) => (  
                        <div key={idx}  >
                            <div>
                                {/*<h5>{card.code}</h5>
                                <h4>{`${card.visible}`}</h4>
                                <h4>{card.value} of {card.suit}</h4>
                              */}
                            </div>

                            <div onClick={ () => clickHandle(card.code2) } className={styleCards.cardcontainer}>

                                {card.visible ? 
                                    <img src={card.image} className={styleCards.cardfront} /> : 
                                    <img src="https://media.istockphoto.com/photos/bicycle-rider-back-playing-card-design-picture-id157772536?k=20&m=157772536&s=170667a&w=0&h=46bM0a2wuwcddiOzNOHTfS9PcUzjXwNTTCy33SrkC_0=" className={styleCards.cardback} />
                                }
                                
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </Layout>
     );
}
 
export default Cards;