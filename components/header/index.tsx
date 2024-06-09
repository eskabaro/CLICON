'use client'

import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@/ui/icon'
import { Container } from '../container'
import { Input } from '@/ui/input'
import { social_links } from './const'
import styles from './Header.module.scss'

export const Header: FC = () => {
    return (
        <Container as='header' className={styles.header}>
            <div className={styles.header_first}>
                <span>Welcome to Clicon online eCommerce store.</span>
                <div className={styles['right-side']}>
                    <ul>
                        <li>
                            <span>Follow us:</span>
                        </li>
                        {social_links.map((e) => (
                            <li key={e.iconName}>
                                <Link href={e.link}>
                                    <Icon name={e.iconName} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className={styles['right-side_line']} />
                    <div className={styles['right-side_btn-box']}>
                        <button>
                            Eng <Icon name='arrow-down' />
                        </button>
                        <button>
                            USD <Icon name='arrow-down' />
                        </button>
                    </div>
                </div>
            </div>
            <hr className={styles['header_horizontal-line']} />
            <div className={styles.header_second}>
                <Link href={'/'}>
                    <Image priority src={'/logo.svg'} width={177} height={48} alt='Logo' />
                </Link>
                <Input placeholder='Search for anything...'>
                    <Icon name='search' />
                </Input>

                <div className={styles.navigation}>
                    <Icon name='shop' />
                    <Icon name='heart' />
                    <Icon name='user' />
                </div>
            </div>
        </Container>
    )
}
