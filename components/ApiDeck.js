import Layout from "../components/Layout";
import styleCards from "../styles/Cards.module.scss"

export const getStaticProps = async () => {
    const res = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=8');
    const data = await res.json();

    return {
        props: { deckInfo: data }
    }
}