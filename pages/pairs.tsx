interface PairsProps {
    data: Pair[]
}


function Pairs({ data }: PairsProps) {
    return (
        <div>
            {data.map((pair, idx) => (<div key={pair.pair}>{pair.pair}</div>))}
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