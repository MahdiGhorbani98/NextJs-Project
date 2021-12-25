import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return (
        <div>
            {/* <img src="/next.jpg" /> */}
            <Image src="/next.jpg" width={102} height={102}/>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/datalist"><a>nextData</a></Link>
            <p>Welcome to Next.js</p>
        </div>
    );
}

export default Navbar;