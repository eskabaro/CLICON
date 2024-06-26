'use client'

import { ElementType, FC, HTMLAttributes, PropsWithChildren } from 'react'
import { cn } from '@/lib/classnames'
import styles from './Container.module.scss'

interface IContainerProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
    className?: string
    classNameContainer?: string
    as?: ElementType
}

export const Container: FC<IContainerProps> = ({ children, className, classNameContainer, as, ...props }) => {
    const Component = as || 'div'

    return (
        <Component className={cn(styles.wrapper, className)} {...props}>
            <div className={cn(styles.wrapper_container, classNameContainer)}>{children}</div>
        </Component>
    )
}
