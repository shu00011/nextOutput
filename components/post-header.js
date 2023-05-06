import ConvertDate from 'components/convert-date'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

export default function PostHeader({ title, subtitle, publish = ''}) {
    return (
        <div className={'pb-6 pt-4'}>
            <p className={'text-sm text-slate-800'}>{ subtitle }</p>
            <h1 className={'mt-1 mb-2 text-slate-800 text-4xl'}>{ title }</h1>
            {publish && (
                <div className={'flex gap-2 text-slate-700 text-xs'}>
                    <FontAwesomeIcon icon={ faClock } size='lg' />
                    <ConvertDate dateISO={ publish } />
                </div>
            )}
        </div>
    )
}