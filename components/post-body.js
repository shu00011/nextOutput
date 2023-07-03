// p.121の細かい要素までは対応していない。

export default function PostBody({ children }) {
    return (
        <div className={'mt-6 leading-7 text-slate-800 text-left max-w-[80%] ml-[10%]'}>
            { children }
        </div>
    )
}