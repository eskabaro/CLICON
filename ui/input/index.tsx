'use client'

import { FC, InputHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/classnames'
import styles from './Input.module.scss'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    children?: ReactNode
    className?: string
}

export const Input: FC<IInputProps> = ({ className, children, ...rest }) => {
    return (
        <label className={cn(styles.wrapper, className)}>
            <input {...rest} type='text' />
            {children}
        </label>
    )
}
