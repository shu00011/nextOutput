import Container from 'components/container'
import Hero from 'components/hero'
import Meta from 'components/meta'
import Posts from 'components/posts'
// import PostCategories from 'components/post-categories'
import { eyecatchLocal } from 'lib/constants'
import { getAllPosts } from 'lib/api'
import { getPlaiceholder } from 'plaiceholder'

export default function Blog({posts}) {

  return (
    <Container>
      <Meta pageTitle='Blog' pageDesc='blogの記事一覧' />
      <Hero 
          title="Blog"
          subtitle="Recent Posts"    
      />
      {/* <PostCategories categories={ categories } /> */}
      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  // const slug = context.params.slug
  // const post = await getPostBySlug(slug)

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
      // categories: posts.categories,
    },
  }
}

// export async function getStaticProps(context) {
//   const slug = context.params.slug
//   const post = await getPostBySlug(slug)
//   if(!post) {
//       return { notFound: true}
//   } else {
//       const description = extractText(post.content)
//       const eyecatch = post.eyecatch ?? eyecatchLocal
//       const { base64 } = await getPlaiceholder(eyecatch.url)
//       eyecatch.blurDataURL = base64
  
//       const allSlugs = await getAllSlugs()
//       const [prevPost, nextPost] = prevNextPost(allSlugs, slug)
  
//       return {
//           props: {
//               title: post.title,
//               publish: post.publishDate,
//               content: post.content,
//               eyecatch: eyecatch,
//               categories: post.categories,
//               description: description,
//               prevPost: prevPost,
//               nextPost: nextPost,
//           },
//       }
//   }
// }