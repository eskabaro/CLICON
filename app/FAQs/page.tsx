import { Container } from '@/components/container'
import { Questions } from '@/pages/FAQs/questions'
import { Form } from '@/pages/FAQs/form'
import styles from './FAQs.module.scss'

export default function FAQsPage() {
    return (
        <Container as='section' classNameContainer={styles.wrapper}>
            <Questions />
            <Form />
        </Container>
    )
}
