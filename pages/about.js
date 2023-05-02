import Contact from 'components/contact'
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'

export default function About() {

  return (
    <Container>
        <Hero 
            title="About"
            subtitle="About shu00011"
        />

        <PostBody>
            <p>ハンドルネーム：shu00011</p>
            <p>経歴：2023年に岡山大学工学部情報系学科を卒業後、現在とあるSIerのSEとして研修中。</p>
            <p>資格：基本情報技術者（2023年10月取得）</p>
            <p>開発技術：Git, React, Next, Flutter, Python</p>
        </PostBody>
        <Contact />
    </Container>
  )
}