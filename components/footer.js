import Container from 'components/container'
import Logo from 'components/logo'

export default function Footer() {
    return (
        <footer className={'p-8 bg-gradient-to-bl from-slate-200 to-white'}>
            <Container>
                <div className={'gap-8 flex flex-col items-center text-center text-left'}>
                    <Logo />
                    [ソーシャル]
                </div>
            </Container>
        </footer>
    )
}