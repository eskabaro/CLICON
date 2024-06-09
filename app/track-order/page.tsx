import { Container } from '@/components/container'
import { Form } from '@/pages/track-order/form'
import styles from './TrackOrder.module.scss'

export default function TrackOrderPage() {
    return (
        <Container as='section' className={styles.wrapper}>
            <Form />
        </Container>
    )
}
