'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Container } from '../container'
import { Icon } from '@/ui/icon'
import { Text } from '@/ui/text'
import { cn } from '@/lib/classnames'
import styles from './Breadcrumb.module.scss'

export const Breadcrumb: FC = () => {
    const pathname = usePathname()
    const pathSegments = pathname.split('/').filter((segment) => segment)

    if (!pathSegments.length) return null

    return (
        <Container className={styles.wrapper}>
            <ul className={styles.wrapper_list}>
                <li className={styles.item}>
                    <Icon name='home' />
                    <Link href={'/'}>
                        <Text as='span'>Home</Text>
                    </Link>
                </li>
                {pathSegments.map((e, i) => {
                    const isActive = `/${e}` === pathname

                    return (
                        <li key={e + i} className={cn(styles.item, isActive && styles.active)}>
                            <Icon name='arrow-right' />
                            <Link href={e}>
                                <Text as='span'>{e}</Text>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </Container>
    )
}
