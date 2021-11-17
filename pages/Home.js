import Header from '../components/Header'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'

const Home = () => {
    return ( 
        <div className={styles.home}>
            <Header/>
            <main className={styles.main}>
                <h1>How to play</h1>
                <div className={styles.rules}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita perspiciatis minus esse quam rem consectetur delectus iste numquam voluptatibus dolores maiores perferendis, ab necessitatibus quasi ullam quidem voluptatum recusandae. Quibusdam.</p>
                </div>
            </main>
            <Footer className={styles.footer}/>
        </div>

     );
}
 
export default Home;