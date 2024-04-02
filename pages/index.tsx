import { BuyKaldi } from 'modules/BuyKaldicoin/BuyKaldi'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { metaInfo } from '../utilities/meta'

const Index = () => {
  const {
    home: { title, description, keywords },
  } = metaInfo
  const router = useRouter()
  // useEffect(() => {
  //   router.replace('/home')
  // }, [router])
  return (
    <div>
      <Head><link rel="icon" href="/favicon.ico" /></Head>
      {/* <MetaData title={title} description={description} keywords={keywords} /> */}
      <BuyKaldi isLight={false}/>
    </div>
  )
}

export default Index
