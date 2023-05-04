import Contact from 'components/contact'
import Container from 'components/container'
import eyecatch from 'images/spring.jpg'
import Hero from 'components/hero'
import Image from 'next/image'
import PostBody from 'components/post-body'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-columns'

// Next 13.0.5 より Imageのlayout propsが非推奨に。layout='**' ではなくそのまま ** と設定する。(ここでのresponsive)
export default function About() {

  return (
    <Container>
      <Hero 
          title="About"
          subtitle="About shu00011"
      />
      <figure>
        <Image
          src = { eyecatch }
          alt = ''
          responsive
          sizes = '(min-width: 1152px) 1152px, 100vw'
          priority
          placeholder = 'blur'
        />
      </figure>
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>HN：shu00011</p>
            <p>経歴：2020年に岡山大学電子計算機研究会に所属しプログラミングを始める。</p>
            <p>2023年に岡山大学工学部情報系学科を卒業後、現在とあるSIerのSEとして研修中。</p>
            <p>資格：基本情報技術者（2022年10月取得）</p>
            <p>技術：Git, React, Next, Flutter, Python</p>
            </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}