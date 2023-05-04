import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHouse,
    faUser,
    faCode
} from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
    return (
        <nav>
            <ul className={'flex gap-8 text-slate-800'}>
                <li>
                    <Link href="/" className={'hover:text-slate-500'}>
                        <FontAwesomeIcon icon = { faHouse } />
                        <span className='sr-only'>Home</span>
                    </Link>
                </li>
                <li>
                    <Link href="/about" className={'hover:text-slate-500'}>
                        <FontAwesomeIcon icon = { faUser } />
                        <span className='sr-only'>About</span>
                    </Link>
                </li>
                <li>
                    <Link href="/blog" className={'hover:text-slate-500'}>
                        <FontAwesomeIcon icon = { faCode } />
                        <span className='sr-only'>Blog</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}