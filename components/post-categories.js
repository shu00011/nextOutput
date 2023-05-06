import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

export default function PostCategories({ categories }) {
    return (
        <div className={'flex items-baseline gap-6 text-slate-700 my-20'}>
            <h3 className={'text-base text-slate-700'}>
                <FontAwesomeIcon icon={ faHashtag } />
                <span className={'sr-only'}>Categories</span>
            </h3>
            <ul className={'flex items-baseline gap-3 text-xs flex-wrap'}>
                {categories.map(({ name, slug }) => (
                    <li key={ slug } className={'my-2'}>
                        <Link href={`/blog/category/${slug}`} className={'text-cyan-600 rounded-full border-cyan-600 border-2 p-2'}>
                            #{ name }
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}