import { Container } from '@/components/container'
import { OrderStatus } from './(ui)/status'
import styles from './Details.module.scss'

export default function DetailsPage() {
    return (
        <Container as='section' className={styles.wrapper}>
            <div className={styles.wrapper_box}>
                <OrderStatus />
            </div>
        </Container>
    )
}
