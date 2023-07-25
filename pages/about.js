import Contact from 'components/contact'
import Container from 'components/container'
import eyecatch from 'images/icon.png'
import CLF from 'images/CLF.png'
import Hero from 'components/hero'
import Image from 'next/image'
import Meta from 'components/meta'
import PostBody from 'components/post-body'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-columns'
import { images } from '@/next.config'

// Next 13.0.5 より Imageのlayout propsが非推奨に。layout='**' ではなくそのまま ** と設定する。(ここでのresponsive)
export default function About() {

  return (
    <Container>
      <Meta
        pageTitle = 'About'
        pageDesc = 'About development activities'
        pageImg = { eyecatch.src }
        pageImgW = { eyecatch.width }
        pageImgH = { eyecatch.height }
      />
      <Hero 
          title='About'
          subtitle='About shu00011'
      />
      <div className={'p-4 max-w-[80%] ml-[10%] mb-12 border border-4 p-4 rounded-2xl border-slate-100'}>
        <div className={'flex justify-center mt-12'}>
          <figure className={'max-w-[80%] relative w-[150px] h-[150px]'}>
            <Image
              src = { eyecatch }
              alt = ''
              fill
              sizes = '(min-width: 96px) 96px, 100vw'
              priority
              placeholder = 'blur'
            />
          </figure>
        </div>
        <TwoColumn>
          <div className={'mt-6 leading-7 text-slate-800 max-w-[80%] min-w-[80%] ml-[10%] mr-[10%]'}>
            <p className={'text-lg font-medium'}>名前</p>
            <p className={'pl-4 mb-4'}>こはさん</p>
            <p className={'text-lg font-medium'}>仕事</p>
            <p className={'pl-4 mb-4'}>某SIerのSE (2023/04~)</p>
            <p className={'text-lg font-medium'}>資格</p>
            <p className={'pl-4 mb-2'}>基本情報技術者 (2022/10)</p>
            <p className={'pl-4 mb-4'}>AWS Certified Cloud Practitioner(CLF-C01) (2023/07)</p>
            <div style={{position: 'relative', width: '125px', height: '125px'}} className={'flex justify-center ml-[6px]'}>
              <Image
                src = { CLF }
                alt = ''
                fill
                style={{objectFit: 'contain'}}
                priority
                placeholder = 'blur'
              />
            </div>
          </div>
          <TwoColumnSidebar>
            <Contact />
          </TwoColumnSidebar>
        </TwoColumn>
      </div>

    </Container>
  )
}