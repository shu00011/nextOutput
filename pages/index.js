import Container from 'components/container'
import Hero from 'components/hero'
import Meta from 'components/meta'
import Pagination from 'components/pagination'
import Posts from 'components/posts'
import Weather from 'components/weather'
import { eyecatchLocal } from 'lib/constants'
import { getAllPosts } from 'lib/api'
import { getPlaiceholder } from 'plaiceholder'

export default function Home({ posts }) {

  return (
    <Container>
      <Meta />
      <Hero 
        title='shu00011'
        subtitle='works'
        imageOn
      />
      <Posts posts={posts} />
      <Pagination nextUrl='/blog' nextText='More Posts' />
      <Weather />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts(4)

  for(const post of posts) {
    if(!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  // try {
  //   await fetch("https://nodeweather-production.up.railway.app/");
  //   const res = await response.json();
  //   return {
  //       props: {
  //           posts: posts,
  //           wMain: res.wMain,
  //           wDesc: res.wDesc,
  //           wIcon: res.wIcon,
  //           mTemp: res.mTemp,
  //           mHum: res.mHum
  //       },
  //   }
  // } catch (e) {
  //   console.log('~~getServerSideProps~~');
  //   return {
  //     props:{
  //       posts: [],
  //       wMain: [],
  //       wDesc: [],
  //       wIcon: [],
  //       mTemp: [],
  //       mHum: []
  //     }
  //   }
  // } 

  return {
    props: {
      posts: posts,
    },
  }
}
