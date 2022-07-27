import { useRouter } from "next/router";
import styles from '../../../styles/pages/Pairs.module.scss'

function Pair() {
    const router = useRouter()
    const { pairName } = router.query
    return (
        <main style={{ height: '100%', display: 'grid', placeItems: 'center' }}>
            <div className={styles.pair}>
                {pairName}
            </div>
        </main>
    )
}

export default Pair;
