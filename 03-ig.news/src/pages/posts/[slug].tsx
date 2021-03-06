import { GetServerSideProps } from "next"
import { getSession } from "next-auth/client"
import { RichText } from "prismic-dom"
import Head from 'next/head'
import { getPrismicClient } from "../../services/prismic"
import styles from './post.module.scss'
interface PostProps {
  post: {
    slug: string
    title: string
    content: string
    updatedAt: string
  }
}

export default function Post({post}: PostProps){
  
  return (
    <>
      <Head>
        <title>{post.title} | ig.news</title>
      </Head>
      
      <main className={styles.container}>
        <article className={styles.posts} >
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div className={styles.content} dangerouslySetInnerHTML={{__html: post.content}}></div>
        </article>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({req, params}) => {
  //Motivo do SSRendering aqui: Pois precisa de verificação de usário. Logo precisa chamar a API, não pode ser estática
  const session = await getSession({ req})
  const {slug} = params
  
  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: `/posts/preview/${slug}`,
        permanent: false,
      },
    };
  }
  
  console.log(session)
  const prismic = getPrismicClient(req)
  const response = await prismic.getByUID('posts', String(slug), {})
  
  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }
  return {
    props: {
      post
    }
  }
}