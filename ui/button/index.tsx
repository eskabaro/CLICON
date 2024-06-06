'use client'

import { FC, HTMLAttributes, PropsWithChildren } from 'react'
import { cn } from '@/lib/classnames'
import styles from './Button.module.scss'

type VariantType =
    | 'orange'
    | 'blue'
    | 'green'
    | 'yellow'
    | 'red'
    | 'orange-v-1'
    | 'blue-v-1'
    | 'green-v-1'
    | 'yellow-v-1'
    | 'red-v-1'
    | 'orange-v-2'
    | 'blue-v-2'
    | 'green-v-2'
    | 'yellow-v-2'
    | 'red-v-2'

interface IButtonProps extends PropsWithChildren<HTMLAttributes<HTMLButtonElement>> {
    variant: VariantType
    type?: 'submit' | 'reset' | 'button' | undefined
}

export const Button: FC<IButtonProps> = ({ children, variant, className, type, ...props }) => {
    return (
        <button {...props} type={type} className={cn(styles.button, className, styles[variant])}>
            {children}
        </button>
    )
}
