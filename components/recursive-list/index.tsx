'use client'

import { FC } from 'react'
import { IMenuItem } from '../navbar/const'
import { Button } from '@/ui/button'

interface IRecursiveListProps {
    list: IMenuItem[]
}

export const RecursiveList: FC<IRecursiveListProps> = ({ list }) => {
    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <Button variant='red'>Label</Button>
            <Button variant='red-v-1'>Label</Button>
            <Button variant='red-v-2'>Label</Button>
        </div>
    )
}
