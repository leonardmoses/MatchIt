import Layout from "../components/Layout";
import styleCards from "../styles/Cards.module.scss"

export const getStaticProps = async () => {
    const res = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=8');
    const data = await res.json();

    return {
        props: { deckInfo: data }
    }
}



const Cards = ({ deckInfo }) => {

    let predeck = deckInfo.cards

    // console.log(predeckInfo)
    let deck = [];

    predeck.forEach(element => {
        deck.push(element);
        deck.push(element);
    });

    // console.log(deck)
    // console.log(deck.length)

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    shuffle(deck)

    console.log(deck)


    return ( 
        <Layout>
            <div className={styleCards.cardinfo}>
                <h1>{deck.length} cards</h1>
                <h3 hidden>Remaining Cards in the Deck: {deckInfo.remaining}</h3>
            </div>

            <div className={styleCards.grid}>
                {deck.map(card => (  
                    <div key={card.code} className={styleCards.cardcontainer}>
                        <h4>{card.value} of {card.suit}</h4>
                        <img src={card.image} alt={`The ${card.value} of ${card.suit}`} className={styleCards.cardfront}/>
                        <img src="https://media.istockphoto.com/photos/bicycle-rider-back-playing-card-design-picture-id157772536?k=20&m=157772536&s=170667a&w=0&h=46bM0a2wuwcddiOzNOHTfS9PcUzjXwNTTCy33SrkC_0=" className={styleCards.cardback}/>
                    </div>
                ))}
            </div>

        </Layout>
     );
}
 
export default Cards;