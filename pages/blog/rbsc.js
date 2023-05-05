import Container from 'components/container'
import ConvertBody from 'components/convert-body'
import Image from 'next/image'
import Meta from 'components/meta'
import PostBody from 'components/post-body'
import PostCategories from 'components/post-categories'
import PostHeader from 'components/postHeader'
import { extractText } from 'lib/extract-text'
import { getPostBySlug } from 'lib/api'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-columns'

export default function Rbsc({
    title,
    publish,
    content,
    eyecatch,
    categories,
    description,
}) {
    return (
        <Container>
            <Meta
                pageTitle = { title }
                pageDesc = { description }
                pageImg = { eyecatch.url }
                pageImgW = { eyecatch.width }
                pageImgH = { eyecatch.height } 
            />
            <article>
                <PostHeader title={ title } subtitle='Blog Article' publish={ publish } />

                <figure className={'flex justify-center'}>
                    <Image
                        src={ eyecatch.url }
                        alt=''
                        responsive
                        width={ eyecatch.width }
                        height={ eyecatch.height }
                        sizes='(min-width: 1152px) 1152px, 100vw'
                        priority
                    />
                </figure>

                <TwoColumn>
                    <TwoColumnMain>
                        <PostBody>
                            <ConvertBody contentHTML={ content } />
                        </PostBody>
                    </TwoColumnMain>
                    <TwoColumnSidebar>
                        <PostCategories categories={ categories } />
                    </TwoColumnSidebar>
                </TwoColumn>
            </article>
        </Container>
    )
}

export async function getStaticProps() {
    const slug = 'rbsc' // slug'**'の記事を取得
    const post = await getPostBySlug(slug)
    const description = extractText(post.content)

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: post.eyecatch,
            categories: post.categories,
            description: description,
        },
    }
}