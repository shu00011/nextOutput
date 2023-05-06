import Container from 'components/container'
import Hero from 'components/hero'
import Meta from 'components/meta'
import Posts from 'components/posts'
import PostCategories from 'components/post-categories'
import { eyecatchLocal } from 'lib/constants'
import { getAllPosts, getAllCategories } from 'lib/api'
import { getPlaiceholder } from 'plaiceholder'

export default function Blog({posts, categories }) {

  return (
    <Container>
      <Meta pageTitle='Blog' pageDesc='blogの記事一覧' />
      <Hero 
          title="Blog"
          subtitle="Recent Posts"    
      />
      <PostCategories categories={ categories } />
      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  const allCats = await getAllCategories()

  for(const post of posts) {
    if(!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }

    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts: posts,
      categories: allCats,
    },
  }
}
