import { TextField } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'
import { WriteForm } from '../components/WriteForm'
import { MainLayout } from '../layouts/MainLayout'

const entity = [1,2,3,4,5]
const setEntity = new Set(entity)
const newEntity = Array.from(setEntity)
console.log("newEntity", newEntity)

const WritePage: NextPage = () => {
    return (
        <MainLayout hideMenu>
            <WriteForm />
        </MainLayout>
    )
}

export default WritePage