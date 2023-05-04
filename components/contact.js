import Social from 'components/social'

// addressは実装しない。
// ContactのSocialのsizeはデフォルトのままに変更。

export default function Contact() {
    return (
        <div className={'mt-4'}>
            <h3 className={'text-base'}>Contact</h3> 
            <Social />
        </div>
    )
}