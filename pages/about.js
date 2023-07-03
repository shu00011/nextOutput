import Contact from 'components/contact'
import Container from 'components/container'
import eyecatch from 'images/icon.png'
import Hero from 'components/hero'
import Image from 'next/image'
import Meta from 'components/meta'
import PostBody from 'components/post-body'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-columns'

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
      <figure className={'flex justify-center max-w-[80%] ml-[10%]'}>
        <Image
          src = { eyecatch }
          alt = ''
          responsive
          sizes = '(min-width: 96px) 96px, 100vw'
          priority
          placeholder = 'blur'
        />
      </figure>
      <TwoColumn>
        <div className={'mt-6 leading-7 text-slate-800 text-center max-w-[80%] min-w-[80%] ml-[10%] mr-[10%]'}>
          <p>名前：こはさん</p>
          <p>仕事：某SIerのSE (2023/04~)</p>
          <p>資格：基本情報技術者 (2022/10)</p>
        </div>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}