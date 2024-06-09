'use client'

import { FC } from 'react'
import { Text } from '@/ui/text'
import { Accordion } from '@/ui/accordion'
import { questions } from './const'
import styles from './Questions.module.scss'

export const Questions: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Text as='h1'>Frequently Asked Questions</Text>
            <div className={styles['wrapper_accordions-box']}>
                {questions.map((e) => (
                    <Accordion key={e.id} title={e.title}>
                        {e.body}
                    </Accordion>
                ))}
            </div>
        </div>
    )
}
