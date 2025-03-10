import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'
import getPostData from '../../../utils/getPostData'

function getPostContent(slug){
  const folder = 'recipes/'
  const file = folder + `${slug}.md`
  const content = fs.readFileSync(file, 'utf8')

  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const posts = getPostData('recipes')
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({params, searchParams}){
  const id = params?.slug ? ' - ' + params?.slug : ''
  return {
    title: `The Bubbly Baker ${id.replaceAll('_', '')}`
  }
}


const Recipe = async (props) => {
  const slug = await props.params.slug
  const post = getPostContent(slug)

  return (
    <main>
      <article>
        <Markdown>{ post.content }</Markdown>
      </article>
    </main>
  )
}

export default Recipe