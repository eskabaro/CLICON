'use client'

import { FC, PropsWithChildren, useRef, useState } from 'react'
import { cn } from '../../lib/classnames'
import { Icon } from '../icon'
import { Text } from '../text'
import styles from './Accordion.module.scss'

interface IAccordionProps extends PropsWithChildren<unknown> {
    title: string
}

export const Accordion: FC<IAccordionProps> = ({ title, children }) => {
    const content = useRef<HTMLDivElement>(null)

    const [isActive, setIsActive] = useState<boolean>(false)
    const [height, setHeight] = useState<string>('0px')

    const toggleAccordion = () => {
        setIsActive(!isActive)
        setHeight(isActive ? '0px' : `${content.current?.scrollHeight}px`)
    }

    return (
        <div className={cn(styles.wrapper, isActive && styles.active)}>
            <div onClick={toggleAccordion} className={cn(styles.accordion, isActive && styles.active)}>
                <Text className={styles.accordion_title} as='p'>
                    {title}
                </Text>
                <Icon name={isActive ? 'minus' : 'plus'} className={styles['icons-box_icon-minus']} />
            </div>
            <div ref={content} style={{ maxHeight: height }} className={styles.accordion_content}>
                <div className={styles.accordion_text}>{children}</div>
            </div>
        </div>
    )
}
