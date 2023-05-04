import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout({ children }) {
    return (
        <>
            <Header />

            <main className={'bg-slate-50'}> { children } </main>

            <Footer />
        </>
    )
}