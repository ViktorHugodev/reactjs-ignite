import {  GetStaticProps } from "next"
import { getPrismicClient } from "../../../services/prismic"
import Head from 'next/head'
import { RichText } from "prismic-dom"
import styles from '../post.module.scss'
import { signIn, useSession } from "next-auth/client"
import { useEffect } from "react"
import { useRouter } from "next/router"
interface PostPreviewProps {
  post: {
    slug: string
    title: string
    content: string
    updatedAt: string
  }
}

export default function PostPreview({post}: PostPreviewProps){
  const [session] = useSession()
  const router = useRouter()
  
  useEffect(() => {
    if(session?.activeSubscription) {
      router.push(`/posts/${post.slug}`)
    }
    
  }, [session])
  
  
  async function handleSubscribe() {
    if (!session){
      signIn('github')
      return
    }
    
  
  } 
  return (
    <>
      <Head>
        <title>{post.title} | ig.news</title>
      </Head>
      
      <main className={styles.container}>
        <article className={styles.posts} >
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div 
          className={`${styles.contentPreview} `} 
          dangerouslySetInnerHTML={{__html: post.content}}>
            
          </div>
          
          <div>
            <button 
            onClick={handleSubscribe}
            className={styles.subscribeButton}>
              <span className={styles.text1}>Wanna continue reading?</span>
              <span className={styles.text2}>Subscribe now 🚀</span>
              
            </button>
           </div>
        </article>
      </main>
      
    </>
  )
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  //Motivo do SSG: Página pública e estática, não precisa de reatalização sempre que acessado o site
  //O Req não existe dentro do SGP
  const {slug} = params

  const prismic = getPrismicClient()
  const response = await prismic.getByUID('posts', String(slug), {})
  
  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0,5)),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }
  return {
    props: {
      post
    },
    redirect: 60 * 60 // 1h
  }
}