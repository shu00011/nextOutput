// 1つのファイルで複数のコンポーネントを用意するため、名前付きexportに。
export function TwoColumn({ children }) {
    return (
        <div className={'flex flex-col items-center text-center gap-8 mt-8 mb-12 mx-0'}>
            { children }
        </div>
    )
}

// md:が効かない
export function TwoColumnMain({ children }) {
    return (
        <div className={''}>
            { children }
        </div>
    )
}

export function TwoColumnSidebar( { children }) {
    return (
        <div className={'text-right'}>
            { children }
        </div>
    )
}