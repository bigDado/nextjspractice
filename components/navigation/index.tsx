import Link from "next/link";

export default function Navigation() {
    return (
        <nav style={{ backgroundColor: 'gray', height: 32, position: 'fixed', width: '100%', display: 'flex' }}>
            <Link href="/pairs"><div>Pairs</div></Link>
        </nav>
    )
}