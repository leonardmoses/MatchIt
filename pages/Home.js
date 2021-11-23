import Header from '../components/Header'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'

const Home = () => {
    return ( 
        
            <Layout>
                <main className={styles.main}>
                    <h1>How to play</h1>
                    <div className={styles.tableWood}>
                        <div className={styles.rules}>
                            <p>These are the game rules. In order to play Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita perspiciatis minus esse quam rem consectetur delectus iste numquam voluptatibus dolores maiores perferendis, ab necessitatibus quasi ullam quidem voluptatum recusandae. Quibusdam.</p>
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita perspiciatis minus esse quam rem consectetur delectus iste numquam voluptatibus dolores maiores perferendis, ab necessitatibus quasi ullam quidem voluptatum recusandae. Quibusdam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita perspiciatis minus esse quam rem consectetur delectus iste numquam voluptatibus dolores maiores perferendis, ab necessitatibus quasi ullam quidem voluptatum recusandae.</p>
                        </div>
                    </div>

                    
                </main>
            </Layout>
        

     );
}
 
export default Home;