// TODO: レスポンスデザインにする。

export default function Hero({ title, subtitle, imageOn = false }) {
    return (
        <div className={'flex flex-col items-center text-center text-left'}>
            <div className={'pt-5 pb-7'}>
                <h1 className={'text-3xl font-bold tracking-wide'}>{ title }</h1>
                <p className={'text-base'}>{ subtitle }</p>
                { imageOn && <figure> [画像] </figure> }
            </div>
        </div>
    )
}