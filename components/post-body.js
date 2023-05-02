// p.121の細かい要素までは対応していない。

export default function PostBody({ children }) {
    return (
        <div className={'mt-6 leading-7'}>
            { children }
        </div>
    )
}