import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Pagination({
    prevText = '',
    prevUrl = '',
    nextText = '',
    nextUrl = '',
}) {
    return (
        <ul className={'my-4 gap-4 flex'}>
            {prevText && prevUrl && (
                <li className={'flex items-center gap-2 text-slate-700'}>
                    <Link href={prevUrl}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        <span>{prevText}</span>
                    </Link>
                </li>
            )}
            {nextText && nextUrl && (
                <li className={'ml-auto flex items-center gap-2 text-slate-700'}>
                    <Link href={nextUrl}>
                        <span>{nextText}</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                </li>
            )}
        </ul>
    )
}