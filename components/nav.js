import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//     faHouse,
//     faUser,
//     faCode
// } from '@fortawesome/fontawesome-svg-icons'

export default function Nav() {
    return (
        <nav>
            <ul className={'flex gap-8'}>
                <li>
                    <Link href="/" className={'hover:text-slate-500'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" className={'hover:text-slate-500'}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/blog" className={'hover:text-slate-500'}>
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    )
}