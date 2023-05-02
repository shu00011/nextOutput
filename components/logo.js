import Link from 'next/link'

// boxOn機能はtailwindCSSを使用する関係で実装しない。

export default function Logo() {
    return (
        <Link href="/" className={'text-lg font-medium tracking-widest'}>shu00011</Link>
    )
}