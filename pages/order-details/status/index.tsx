'use client'

import { FC } from 'react'
import { Text } from '@/ui/text'
import { cn } from '@/lib/classnames'
import styles from './OrderStatus.module.scss'

export const OrderStatus: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_heading}>
                <div className={styles['additional-info']}>
                    <Text className={styles['additional-info_order-number']} as='span'>
                        #96459761
                    </Text>
                    <div className={styles['additional-info_info']}>
                        <Text as='span'>4 Products</Text>
                        <Text as='span'>{'•'}</Text>
                        <Text as='span'>Order Placed in 17 Jan, 2021 at 7:32 PM</Text>
                    </div>
                </div>
                <Text className={styles.price} as='span'>
                    $1199.00
                </Text>
            </div>
            <div className={styles.wrapper_stepper}>
                <Text as='span' className={styles.date}>
                    Order expected arrival <Text as='span'>23 Jan, 2021</Text>
                </Text>
            </div>
        </div>
    )
}
