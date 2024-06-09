import { IconsType } from '@/utils/icons'

export interface IMenuItem {
    label: string
    href?: string
    subItems?: IMenuItem[]
}

export interface INavItems {
    title: string
    href: string
    icon: IconsType
}

export const navItems: INavItems[] = [
    {
        title: 'Track Order',
        href: 'track-order',
        icon: 'place-point'
    },
    {
        title: 'Compare',
        href: '2',
        icon: 'reload'
    },
    {
        title: 'Customer Support',
        href: '1',
        icon: 'headphones'
    },
    {
        title: 'Need Help',
        href: 'FAQs',
        icon: 'info'
    }
]

export const menuItems: IMenuItem[] = [
    {
        label: 'All Category',
        subItems: [
            { label: 'Computer & Laptop', href: '#' },
            { label: 'Computer Accessories', href: '#' },
            {
                label: 'SmartPhone',
                href: '#',
                subItems: [
                    {
                        label: 'All',
                        href: '#'
                    },

                    {
                        label: 'iPhone',
                        href: '#'
                    },
                    {
                        label: 'Sansung',
                        href: '#'
                    },
                    {
                        label: 'Realme',
                        href: '#'
                    },
                    {
                        label: 'Xiaomi',
                        href: '#'
                    },
                    {
                        label: 'Oppo',
                        href: '#'
                    },
                    {
                        label: 'Vivo',
                        href: '#'
                    },
                    {
                        label: 'OnePlus',
                        href: '#'
                    },
                    {
                        label: 'Huawei',
                        href: '#'
                    },
                    {
                        label: 'Infinix',
                        href: '#'
                    },
                    {
                        label: 'Tecno',
                        href: '#'
                    }
                ]
            },
            {
                label: 'Headphone',
                href: '#',
                subItems: [
                    { label: 'Neumorphism', href: '#' },
                    { label: 'Pre-loader', href: '#' },
                    { label: 'Glassmorphism', href: '#' }
                ]
            }
        ]
    }
]
