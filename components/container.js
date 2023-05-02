export default function Container({ children, large = false }) {
    return (
        <div className={large ? 'w-11/12 maz-w-7xl my-0 mx-auto' : 'w-11/12 max-w-6xl m-auto'}>
            { children }
        </div>
    )
}