import Link from "next/link";


const Header = () => {
    return(
        <header>
            <nav> 
                <Link href="/">Home</Link> |{" "}
                <Link href="/about">About me</Link> |{" "}
                <Link href="/gallery">Gallery</Link>
            </nav>
        </header>)
}
export default Header;