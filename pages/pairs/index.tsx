import { useRouter } from "next/router";
import FlatButton from "../../components/buttons/flatButton";

interface PairsProps {
    data: Pair[]
}


function Pairs({ data }: PairsProps) {
    function PairComponent({ pair }: { pair: Pair }) {
        const router = useRouter()
        
        return (
            <div style={{ justifySelf: 'center' }}>
                <FlatButton
                    onClick={() => router.push(router.route + `/${pair.pair}`)}
                    text={pair.pair}
                />
            </div>
        )
    }

    return (
        <div style={{ display: 'grid', gridGap: 8, gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {data.map((pair, idx) => <PairComponent pair={pair} key={idx} />)}
        </div>
    )
}

// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://api.btcturk.com/api/v2/ticker')
    const data = (await res.json()).data;

    // By returning { props: { posts } }, the Pairs component
    // will receive `posts` as a prop at build time
    return {
        props: {
            data,
        },
    }
}

export default Pairs