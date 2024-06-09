'use client'

import { FC } from 'react'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Text } from '@/ui/text'
import { Input } from '@/ui/input'
import { Button } from '@/ui/button'
import { Icon } from '@/ui/icon'
import styles from './Form.module.scss'

interface IFormInput {
    id: string
    email: string
}

export const Form: FC = () => {
    const { push } = useRouter()

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<IFormInput>({
        mode: 'onBlur'
    })

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        push('track-order/details')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
            <div className={styles.wrapper_heading}>
                <Text as='h1'>Track Order</Text>
                <Text as='p'>
                    To track your order please enter your order ID in the input field below and press the “Track Order”
                    button. this was given to you on your receipt and in the confirmation email you should have
                    received.
                </Text>
            </div>
            <div className={styles['wrapper_fields']}>
                <div className={styles['inputs-box']}>
                    <div className={styles.field}>
                        <Text as='span'>Order ID</Text>
                        <Input error={!!errors.id} {...register('id', { required: true })} placeholder='ID...' />
                    </div>
                    <div className={styles.field}>
                        <Text as='span'>Billing Email</Text>
                        <Input
                            error={!!errors.email}
                            {...register('email', { required: true })}
                            placeholder='Email address'
                        />
                    </div>
                </div>
                <div className={styles['info-box']}>
                    <Icon name='info' />
                    <Text as='p'>Order ID that we sended to your in your email address.</Text>
                </div>
            </div>
            <Button variant='orange' className={styles.wrapper_btn}>
                Track Order
                <Icon name='arrow-right-2' />
            </Button>
        </form>
    )
}
