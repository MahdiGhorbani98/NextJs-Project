import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>
            {/* <img src="/next.jpg" /> */}
            <Image src="/next.jpg" width={80} height={80}/>
            <div className={styles.Link}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/datalist"><a>nextData(getStaticProps)</a></Link>
            <Link href="/getServer"><a>nextData(getServerSideProps)</a></Link>
            </div>
            <p>Welcome to Next.js</p>
        </div>
    );
}

export default Navbar;