'use client'

import { FC } from 'react'
import { Container } from '../container'
import styles from './Navbar.module.scss'
import Link from 'next/link'
import { Icon } from '@/ui/icon'
import { RecursiveList } from '../recursive-list'
import { menuItems } from './const'

export const Navbar: FC = () => {
    return (
        <Container className={styles.wrapper}>
            <div className={styles.wrapper_content}>
                <nav className={styles.navbar}>
                    <RecursiveList list={menuItems} />
                </nav>

                <div className={styles.link}>
                    <Icon name='phone' />
                    <Link href={'tel:+38 096 000 00 00'}>+38 096 000 00 00</Link>
                </div>
            </div>
            <hr className={styles.wrapper_line} />
        </Container>
    )
}
