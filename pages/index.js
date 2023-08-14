import Image from 'next/image'

import { PrismaClient } from '@prisma/client'
import { categorias } from '@/prisma/data/categorias'


export default function Home() {
  console.log(categorias);
  return (
    
    <h1>next.js</h1>
  )
}

export const getServerSideProps= async ()=>{
  const prisma = new PrismaClient()

  const categorias = await prisma.categoria.findMany()
  
  return{
    props:{
      categorias,
    }
  }
}