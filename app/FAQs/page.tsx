import { Container } from '@/components/container'
import { Questions } from './(ui)/questions'
import { Form } from './(ui)/form'
import styles from './FAQs.module.scss'

export default function FAQsPage() {
    return (
        <Container as='section' classNameContainer={styles.wrapper}>
            <Questions />
            <Form />
        </Container>
    )
}
