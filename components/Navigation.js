import Link from 'next/link';
import styles from '../styles/navigation.module.css';
import "animate.css";
import {useRouter} from 'next/router'

export default function Navigation(){

    const router = useRouter();
    
    return (
        <ul className = {styles.nav}>
            <li>
                <Link href = "/projects">
                    <a className = {router.pathname === "/projects" ? "active" : ""}>Projects</a>
                </Link>
            </li>
            <li>
                <Link href = "/skills">
                    <a className = {router.pathname === "/skills" ? "active" : ""}>Skills</a>
                </Link>
            </li>
            <li>
                <Link href = "/education">
                    <a className = {router.pathname === "/education" ? "active" : ""}>Education</a>
                </Link>
            </li>
            <li>
                <Link href = "/about">
                    <a className = {router.pathname === "/about" ? "active" : ""}>About</a>
                </Link>
            </li>
            <li>
                <Link href = "/contact">
                    <a className = {router.pathname === "/contact" ? "active" : ""}>Contact</a>
                </Link>
            </li>
        </ul>
    )
}