'use client'

import { FC } from 'react'
import Image from 'next/image'
import { Container } from '../container'
import { Text } from '@/ui/text'
import { Button } from '@/ui/button'
import { Icon } from '@/ui/icon'
import styles from './PageNotFound.module.scss'

export const PageNotFound: FC = () => {
    return (
        <Container as='section' className={styles.wrapper}>
            <Image priority src={'./error.webp'} width={500} height={500} alt='error' />
            <div className={styles.wrapper_box}>
                <Text as='h1'>404, Page not founds</Text>
                <Text as='p'>
                    Something went wrong. It’s look that your requested could not be found. It’s look like the link is
                    broken or the page is removed.
                </Text>
                <div className={styles['btn-box']}>
                    <Button variant='orange'>
                        <Icon name='go-back' />
                        Go Back
                    </Button>
                    <Button variant='orange-v-2'>
                        <Icon name='home' />
                        Go To home
                    </Button>
                </div>
            </div>
        </Container>
    )
}
