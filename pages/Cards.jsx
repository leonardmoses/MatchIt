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

    let predeck = deckInfo.cards

    // console.log(deckInfo)
    // console.log(deck1 , deck2)
    
//#region --------- separating into 2 decks --------------
    let deck = predeck
    let deckDouble = []

    deck.forEach(card => {
        card.visible = false
        deckDouble.push(card)
        let copy = Object.assign({}, card)
        card.code2 = card.code+"-"+"1"
        copy.code2 = card.code+"-"+"2"
        deckDouble.push(copy)
    });

    // console.log(deckDouble)

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

    // function shuffle(array) {
    //     array.sort(() => Math.random() - 0.5);
    // }
    // shuffle(deckDouble)

//#endregion ------------ shuffle deck function ---------------

    
    function clickHandle(card , idx) {
        
        console.log(deckDouble)
        console.log(card)
        card.visible = true

    }

    

    return ( 
        <Layout>
            <div className={styleCards.cardinfo}>
                <h1>{deckDouble.length} cards</h1>
                <h3 hidden>Remaining Cards in the Deck: {deckInfo.remaining}</h3>
            </div>

            <div className={styleCards.container}>
                    <div className={styleCards.grid}>
                    {deckDouble.map((card, idx) => (  
                        <div key={idx} className={styleCards.cardcontainer} onClick={ () => clickHandle(card, idx)}>
                            <div>
                                <h4>{card.code}</h4>
                                <h4>{`${card.visible}`}</h4>
                                <h4>{card.value} of {card.suit}</h4>
                                <button>flip</button>
                            </div>

                            <div>
                                {card.visible ? 
                                    <img src={card.image} className={styleCards.cardfront} /> : 
                                    <img src="https://media.istockphoto.com/photos/bicycle-rider-back-playing-card-design-picture-id157772536?k=20&m=157772536&s=170667a&w=0&h=46bM0a2wuwcddiOzNOHTfS9PcUzjXwNTTCy33SrkC_0=" className={styleCards.cardback} />
                                }
                                
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>


        </Layout>
     );
}
 
export default Cards;