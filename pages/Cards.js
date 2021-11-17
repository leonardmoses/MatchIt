import Layout from "../components/Layout";

export const getStaticProps = async () => {
    const res = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=16');
    const data = await res.json();

    return {
        props: { deckInfo: data }
    }
}



const Cards = ({ deckInfo }) => {
    // console.log(deckInfo)
    const deck = deckInfo.cards
    console.log(deck)
    console.log(deck.length)


    return ( 
        <Layout>
            <h1>Deck of Cards</h1>
            <h3>{deckInfo.remaining}</h3>
            {deck.map(card => (  
                <div key={card.code}>
                    <h4>{card.value} of {card.suit}</h4>
                    <img src={card.image} alt={`The ${card.value} of ${card.suit}`}/>
                </div>
            ))}
        </Layout>
     );
}
 
export default Cards;