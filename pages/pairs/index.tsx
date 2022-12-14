import { GetStaticProps } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import FlatButton from "../../components/buttons/flatButton"

interface PairsProps {
    data: Pair[]
}

function Pairs({ data }: PairsProps) {
    function PairComponent({ pair }: { pair: Pair }) {
        const router = useRouter()

        return (
            <div style={{ justifySelf: 'center' }}>
                <Link href={'/pairs/' + pair.pair}>
                    <FlatButton
                        text={pair.pair}
                    />
                </Link>
            </div>
        )
    }

    return (
        <div style={{ display: 'grid', gridGap: 8, gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {data.map((pair, idx) => <PairComponent pair={pair} key={idx} />)}
        </div>
    )
}

export const getStaticProps: GetStaticProps<{ data: Pair[] }> = async (context) => {
    const res = await fetch('https://api.btcturk.com/api/v2/ticker')
    const data = (await res.json()).data as Pair[]

    return {
        props: {
            data,
        },
    }
}

export default Pairs