import { Box, Button, Typography } from '@material-ui/core'
import axios from 'axios'
import type { GetServerSideProps, GetServerSidePropsContext, GetStaticProps, GetStaticPropsContext, InferGetServerSidePropsType, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { parseCookies } from 'nookies'
import agent from '../agent'
import { LeftMenu } from '../components/LeftMenu/LeftMenu'
import { Post } from '../components/Post'
import { MainLayout } from '../layouts/MainLayout'
import { setUserData } from '../redux/slices/user'
import { wrapper } from '../redux/store'
import { Api } from '../utils/api'

interface HomeProps {
  post: any[]
}

const Home: NextPage<HomeProps> = ({post}) => {
  console.log(post)
  return (
    <MainLayout>
      <LeftMenu />
      <Post post={post} />
      Posts
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const data = await Api(ctx).post.getPosts()
  
    return {
      props: {post: data}
    }
  } catch (error) {
    return {
      props: {post: null}
    }
  }
  
  
  
}

export default Home
