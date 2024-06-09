'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Container } from '../container'
import { Icon } from '@/ui/icon'
import { cn } from '@/lib/classnames'
import { menuItems, navItems } from './const'
import styles from './Navbar.module.scss'

export const Navbar: FC = () => {
    const pathname = usePathname()

    return (
        <Container className={styles.wrapper}>
            <div className={styles.wrapper_content}>
                <nav className={styles.navbar}>
                    <button className={styles['navbar_btn-list']}>
                        All Category <Icon name='arrow-down-2' />
                    </button>
                    {navItems.map((e, i) => (
                        <Link
                            key={i}
                            className={cn(styles.navbar_link, pathname?.includes(e.href) && styles.active)}
                            href={e.href}
                        >
                            <Icon name={e.icon} />
                            {e.title}
                        </Link>
                    ))}
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
