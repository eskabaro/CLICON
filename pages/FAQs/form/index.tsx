'use client'

import { Input } from '@/ui/input'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Text } from '@/ui/text'
import { Button } from '@/ui/button'
import { Icon } from '@/ui/icon'
import { Textarea } from '@/ui/textarea'
import styles from './Form.module.scss'

interface IFormInput {
    email: string
    subject: string
    message?: string
}

export const Form: FC = () => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<IFormInput>({
        mode: 'onBlur'
    })

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
            <div className={styles.wrapper_heading}>
                <Text as='h2'>Don’t find your answer, Ask for support.</Text>
                <Text as='p'>
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis
                    primis in faucibu raesent eget sem purus.
                </Text>
            </div>
            <div className={styles['wrapper_inputs-box']}>
                <Input error={!!errors.email} {...register('email', { required: true })} placeholder='Email address' />
                <Input error={!!errors.subject} {...register('subject', { required: true })} placeholder='Subject' />
                <Textarea error={!!errors.message} {...register('message')} placeholder='Message (Optional)' />
            </div>
            <Button variant='orange'>
                Send message
                <Icon name='arrow-right-2' />
            </Button>
        </form>
    )
}
