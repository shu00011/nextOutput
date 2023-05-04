import Image from 'next/image'
import spring from 'images/spring.jpg'

// TODO: レスポンスデザインにする。

export default function Hero({ title, subtitle, imageOn = false }) {
    return (
        <div className={'flex flex-col items-center text-center text-left'}>
            <div className={'pt-5 pb-7 text-slate-800'}>
                <h1 className={'text-3xl font-bold tracking-wider'}>{ title }</h1>
                <p className={'text-base'}>{ subtitle }</p>
            </div>
            {imageOn && (
                <figure className={'w-full justify-center flex mb-24'}>
                    <Image
                        src = { spring }
                        alt = ''
                        responsive
                        sizes = '(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw'
                        priority
                        placeholder = 'blur'
                    />  
                </figure>
            )}
        </div>
    )
}