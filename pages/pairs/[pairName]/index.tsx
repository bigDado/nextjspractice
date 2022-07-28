import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { useState } from "react"
import styles from '../../../styles/pages/Pairs.module.scss'
import { classNames } from "../../../utils/styleUtils"

const PairComponent  = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    // const router = useRouter()
    // const { pairName } = router.query
    const [selected, setSelected] = useState(false)
    return (
        <main style={{ height: '100%', display: 'grid', placeItems: 'center' }}>
            <button className={classNames(styles.pair, selected ? styles.selected : '')} onClick={() => setSelected(!selected)}>
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
