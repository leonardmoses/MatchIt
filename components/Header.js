import Link from 'next/link'
import styleheader from '../styles/Header.module.scss'


const Header = () => {
    return ( 
        <nav className={styleheader.Body}>
            <div className={styleheader.Title}>
                <Link href="/"><a><h1>Match It</h1></a></Link>
            </div>
            <div className={styleheader.NavLinks}>
                <Link href="/Home"><a>Game Rules</a></Link>
                <Link href="/Cards"><a>Play</a></Link>
            </div>

        </nav>
     );
}
 
export default Header;