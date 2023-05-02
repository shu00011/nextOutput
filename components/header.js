import Container from 'components/container'
import Logo from 'components/logo'
import Nav from 'components/nav'

export default function Header() {
    return (
        <header>
            <Container large>
                <div className={'flex justify-between items-center'}>
                    <Logo />    
                    <Nav />
                </div>
            </Container>
        </header>
    )
}