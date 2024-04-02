import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagram,
    faGithub
} from '@fortawesome/free-brands-svg-icons'
import { 
    faLaptop,
    faZ
} from '@fortawesome/free-solid-svg-icons'

export default function Social({onFooter=false}) {
    return (
        <ul className={'flex gap-8 text-slate-800 text-2xl'}>
        {onFooter &&
            <li>
                <a href='https://oucrc.net/members/9svd4hgoy' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon = { faLaptop } />
                    <span className='sr-only'>岡山大学電子計算機研究会</span>
                </a>
            </li>
        }    
            <li>
                <a href='https://zenn.dev/shu00011' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon = { faZ } />
                    <span className='sr-only'>Zenn</span>
                </a>
            </li>
            <li>
                <a href='https://github.com/shu00011' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon = { faGithub } />
                    <span className='sr-only'>GitHub</span>
                </a>
            </li>
        </ul>
    )
}