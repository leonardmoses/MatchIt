import Link from 'next/link'

const Footer = () => {
    return ( 
        <div>
            <ul>
                <li><Link href='https://www.linkedin.com/in/leonard-moses/'><a target="_blank">Linked In</a></Link></li>
                <li><Link href='https://github.com/leonardmoses'><a target="_blank">Github</a></Link></li>
            </ul>
        </div>
     );
}
 
export default Footer;