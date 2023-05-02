// 1つのファイルで複数のコンポーネントを用意するため、名前付きexportに。
export function TwoColumn({ children }) {
    return (
        <div className={'flex flex-col items-center text-center gap-8 mt-8 mb-12 mx-0'}>
            { children }
        </div>
    )
}