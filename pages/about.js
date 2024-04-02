import Contact from 'components/contact'
import Container from 'components/container'
import eyecatch from 'images/icon.avif'
import CLFSAA from 'images/CLFSAA.avif'
import RSM from 'images/RSM.avif'
import Hero from 'components/hero'
import Image from 'next/image'
import Meta from 'components/meta'
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
      <div className={'pb-44'}>
      <div className={'p-4 max-w-[80%] ml-[10%] border border-4 p-4 rounded-2xl border-slate-100'}>
        <div className={'flex justify-center mt-12'}>
          <figure className={'max-w-[80%] relative w-[150px] h-[150px] drop-shadow-xl'}>
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
            <p className={'pl-4 mb-4'}>shu00011</p>
            <p className={'text-lg font-medium'}>仕事</p>
            <p className={'pl-4 mb-4'}>某SIerのSE (2023/04~)</p>
            <ul className={'text-sm'}>
              <li className={'pl-4 mb-4'}>TypeScript(Next.js)を使用したフロントエンド開発 / アジャイル開発 (2023/10)</li>
              <li className={'pl-4 mb-4'}>ChatGPTやGitHub Copilotを用いたコード作成・テストコード作成・リファクタリングの生産性検証 (2023/11-2024/03)</li>
              <li className={'pl-4 mb-4'}>Python(Streamlit)を用いたLLM検証用ChatUI作成(2024/03)</li>
            </ul>
            <p className={'text-lg font-medium'}>資格</p>
            <p className={'pl-4 mb-4'}>基本情報技術者 (2022/10)</p>
            <p className={'pl-4 mb-4'}>AWS Certified Cloud Practitioner(CLF-C01) (2023/07)</p>
            <p className={'pl-4 mb-4'}>AWS Certified Solutions Architect Assosiate(SAA-C03) (2024/02)</p>
            <p className={'pl-4 mb-4'}>Refistered Scrum Master (2024/01)</p>
            <div style={{position: 'relative', width: '180px', height: '180px'}} className={'flex justify-center ml-[6px]'}>
              <Image
                src = { CLFSAA }
                alt = ''
                fill
                style={{objectFit: 'contain'}}
                priority
                placeholder = 'blur'
              />
            </div>
            <div style={{position: 'relative', width: '80px', height: '80px'}} className={'flex justify-center ml-[6px]'}>
              <Image
                src = { RSM }
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
      </div>
    </Container>
  )
}