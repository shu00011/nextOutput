import Container from 'components/container'
import Logo from 'components/logo'
import Social from 'components/social'

export default function Footer() {
    return (
        <footer className={'p-8 bg-gradient-to-bl from-slate-200 to-white bottom-0'}>
            <Container>
                <div className={'gap-8 flex flex-col items-center text-center text-left'}>
                    <Logo />
                    <Social onFooter />
                </div>
            </Container>
        </footer>
    )
}