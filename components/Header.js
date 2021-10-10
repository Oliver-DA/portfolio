import styles from '../styles/header.module.css';
import Link from 'next/link';
import Navigation from './Navigation';


export default function Header(){

    return (
        <div className= {styles.header}>
            <Link href = "/">
                <a>
                    <h1 className = {styles.title}>PortFolio</h1>
                </a>
            </Link>
            <Navigation />
        </div>
    )
}