'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Container } from '../container'
import { Icon } from '@/ui/icon'
import { Text } from '@/ui/text'
import { cn } from '@/lib/classnames'
import styles from './Breadcrumb.module.scss'
import { formatString } from '@/lib/format-string'

export const Breadcrumb: FC = () => {
    const pathname = usePathname() as string
    const pathSegments = pathname.split('/').filter((segment) => segment)

    if (!pathSegments.length) return null

    let accumulatedPath = ''

    return (
        <Container className={styles.wrapper}>
            <ul className={styles.wrapper_list}>
                <li className={styles.item}>
                    <Icon name='home' />
                    <Link href={'/'}>
                        <Text as='span'>Home</Text>
                    </Link>
                </li>
                {pathSegments.map((segment, index) => {
                    accumulatedPath += `/${segment}`
                    const isActive = accumulatedPath === pathname

                    return (
                        <li key={segment + index} className={cn(styles.item, isActive && styles.active)}>
                            <Icon name='arrow-right' />
                            <Link href={segment}>
                                <Text as='span'>{formatString(segment)}</Text>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </Container>
    )
}
