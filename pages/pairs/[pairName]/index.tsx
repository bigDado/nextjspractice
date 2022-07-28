import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import styles from '../../../styles/pages/Pairs.module.scss'

const PairComponent  = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    // const router = useRouter()
    // const { pairName } = router.query
    return (
        <main style={{ height: '100%', display: 'grid', placeItems: 'center' }}>
            <button className={styles.pair}>
                {props.pair}
            </button>
        </main>
    )
}

export const getStaticProps: GetStaticProps<Pair> = async (context) => {
    const pairName = context.params?.pairName as string
    return {
        props: {
            pair: pairName
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('https://api.btcturk.com/api/v2/ticker')
    const data = (await res.json()).data as Pair[]
    return {
        paths: data.map(p => ({ params: { pairName: p.pair } })),
        fallback: false, // can also be true or 'blocking'
    }
}

export default PairComponent
