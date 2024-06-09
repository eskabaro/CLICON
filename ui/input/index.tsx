'use client'

import { FC, ForwardedRef, InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import { cn } from '@/lib/classnames'
import styles from './Input.module.scss'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    children?: ReactNode
    className?: string
    error?: boolean
}

export const Input: FC<IInputProps> = forwardRef(
    ({ className, error, children, ...rest }, ref: ForwardedRef<HTMLInputElement>) => {
        return (
            <label className={cn(styles.wrapper, className, error && styles.error)}>
                <input ref={ref} {...rest} type='text' />
                {children}
            </label>
        )
    }
)
