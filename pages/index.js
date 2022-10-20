import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'
import { Box } from '@mui/material'

export async function getStaticProps() {
  return {
    props: { static: "some value" }
  }
}

export default function Home(props) {
  const router = useRouter()

  return (
    <Box>
      <h1>Hello</h1>
      <p>{props.static}</p>
      {router.query.myflag == 'hello' && <p>Flag is found</p>}
    </Box>
  )
}
