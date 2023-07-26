import Container from 'components/container'
import Logo from 'components/logo'
import Nav from 'components/nav'

export default function Header() {
    return (
        <header className={'bg-gradient-to-bl from-slate-200 to-white pb-6'}>
            <Container large>
                <div className={'flex justify-between items-center pt-6 pt-6'}>
                    <div className={'ml-[5%]'}>
                        <Logo />  
                    </div>
                    <Nav />
                </div>
            </Container>
        </header>
    )
}