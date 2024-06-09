'use client'

import { FC } from 'react'
import { IMenuItem } from '../navbar/const'
import { Button } from '@/ui/button'
import { Icon } from '@/ui/icon'

interface IRecursiveListProps {
    list: IMenuItem[]
}

export const RecursiveList: FC<IRecursiveListProps> = ({ list }) => {
    return (
        <div style={{ display: 'flex', gap: '8px' }}>
            All Category <Icon name='arrow-down-2' />
        </div>
    )
}
