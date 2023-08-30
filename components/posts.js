import Image from 'next/image'
import Link from 'next/link'

export default function Posts({ posts }) {
    return (
        <div className={'grid grid-cols-2 gap-4 mt-4 pb-44 max-w-[80%] ml-[10%] mr-[10%]'}>
            {posts.map(({ title, slug, eyecatch }) => (
            <Link href={`/blog/${slug}`} key={slug} className={'my-2 border border-4 p-4 rounded-2xl border-slate-100'}>
                <article>
                        <figure className={'relative aspect-video'}>
                            <Image
                                src={eyecatch.url}
                                alt=''
                                fill
                                style={{objectFit: 'cover'}}
                                sizes='(min-width:1152px) 576px, 50vw'
                                placeholder='blur'
                                blurDataURL={eyecatch.blurDataURL} 
                            />
                        </figure>
                        <h2 className={'text-base font-normal pt-4'}>{ title }</h2>

                </article>
            </Link>
            ))}
        </div>
    )
}