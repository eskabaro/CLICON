'use client'

import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../container'
import { Text } from '@/ui/text'
import { infos } from './const'
import styles from './Footer.module.scss'

export const Footer: FC = () => {
    return (
        <Container className={styles.wrapper} as='footer'>
            <div className={styles.wrapper_content}>
                <div className={styles.info}>
                    <Link href={'/'}>
                        <Image priority src={'./logo-2.svg'} width={177} height={48} alt='Logo' />
                    </Link>
                    <div className={styles.info_phone}>
                        <Text as='span'>Customer Supports:</Text>
                        <Link href={'tel:(629) 555-0129'}>(629) 555-0129</Link>
                    </div>
                    <Text as='span'>4517 Washington Ave. Manchester, Kentucky 39495</Text>
                    <Link href={'mailto:info@kinbo.com'}>info@kinbo.com</Link>
                </div>
                {infos.map(({ name, links }) => (
                    <div className={styles.section} key={name}>
                        <Text as='h2'>{name}</Text>
                        <ul className={styles.section_list}>
                            {links.map((link) => (
                                <li key={link}>
                                    <Link href={''}>{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <hr className={styles.wrapper_line} />
            <div className={styles['wrapper_sub-footer']}>
                <Text as='span'>Kinbo - eCommerce Template © 2021. Created by Oleksandr Kononuchenko</Text>
            </div>
        </Container>
    )
}
