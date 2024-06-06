'use client'

import { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react'

type TextElementType = 'div' | 'p' | 'a' | 'span' | 'label' | 'time' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type AdditionalTextPropsType<T extends TextElementType | ComponentType> = T extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[T]
    : ComponentPropsWithoutRef<T>

interface ITextProps {
    children: ReactNode
    isUnderline?: boolean
}

type TextPropsType<T extends TextElementType | ComponentType> = {
    as?: T
} & ITextProps &
    AdditionalTextPropsType<T>

export const Text = <T extends TextElementType | ComponentType<any> = 'p'>({
    as,
    children,
    isUnderline,
    ...props
}: TextPropsType<T>) => {
    const Component = as || 'p'
    const underlineStyle = isUnderline && { borderBottom: '1px solid #2F2F37' }

    return (
        <Component style={underlineStyle} {...props}>
            {children}
        </Component>
    )
}
