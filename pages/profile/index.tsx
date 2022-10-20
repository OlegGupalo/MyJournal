import { GetServerSideProps, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import Avatar from "react-avatar"
import React from 'react'
import EditorAvatar from 'react-avatar-editor'
import { MainLayout } from "../../layouts/MainLayout"
import ImageCrooper from "../../components/Settings/Avatar/ImageCrooper"
function Profile({profile}: any) {
    return <MainLayout>
        {profile.username}
        <ImageCrooper />
    </MainLayout>
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    return {
        props: {profile: {
            username: 'Oleg',
            age: 18,
            work: 'Programmer',
            birthday: '15.11.2003'
        }
    }}
}



export default Profile