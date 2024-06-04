'use client'

import { FC, SVGProps } from 'react'

import { IconsType, icons } from '@/utils/icons'

interface IIconProps extends SVGProps<SVGSVGElement> {
    name: IconsType
}

export const Icon: FC<IIconProps> = ({ name, color, className, ...svgProps }) => {
    const Svg = icons[name]

    return <Svg {...svgProps} />
}
