import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import React from 'react'
import FullPost from '../../components/FullPost/FullPost'
import { MainLayout } from '../../layouts/MainLayout'

const News: NextPage = ({post}: any) => {
    return (
        <>
        <MainLayout>
            <FullPost post={post} />
        </MainLayout>
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async(context: GetServerSidePropsContext) => {
    const {slug} = context.params
    const response = await fetch(`http://localhost:4200/api/articles/${slug}`)
    const data = await response.json()

    return {
        props: {post: data}
    }
}

export default News