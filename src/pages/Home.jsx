import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { supabase } from '../supabaseClient.js'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Product from '../components/Product'
import Footer from '../components/Footer'

import heroimg2 from '../assets/hero2img1.webp'
import productImage01 from '../assets/productImage01.webp'
import productImage02 from '../assets/productImage02.webp'

function Home() {

  const [wears, setWears] = useState([])

  useEffect(() => {
    fetchWears()
  }, [])

  async function fetchWears() {
    const { data } = await supabase.from('wears').select().order('created_at', { ascending: false })
    setWears(data)
  }

  const mensWears = wears.filter(wear => wear.gender === 'men');
  const womensWears = wears.filter(wear => wear.gender === 'women');

  var imagesFolderUrl = "https://atepfjyykoqhkyzpnziv.supabase.co/storage/v1/object/public/wearimages//"

  return (
    <>
      <Header />
      <Hero />

      <div className='py-10 md:py-25 mx-2.5 md:mx-15' id='content'>
        <p className="mb-7 md:mb-10 text-2xl md:text-4xl italic text-center"><Link to="/wears/men" className='flex gap-3 md:gap-5 justify-center items-end [&:hover_svg]:translate-x-2'><span>The fleece for men</span><span><svg className='w-4.5 md:w-6.5 pb-1 transition duration-40' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg></span></Link></p>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-2.5 md:gap-8">

          {
            mensWears.slice(0, 4).map(wear => (
              <div key={ wear.id }>
                <Product
                  ProductImage={ imagesFolderUrl + wear.image }
                  Name= { wear.name }
                  Price= { wear.price }
                  link= { "/wears/" + wear.gender + "/" + wear.name }
                />
              </div>
            ))
          }

        </div>
      </div>

      <div className='w-full h-70 md:h-auto md:aspect-3/1 relative'>
        <img src={ heroimg2 } alt="Image of clothes" className='w-full h-full object-cover' />
        <div className='absolute bottom-10 md:bottom-25 w-full z-10'>
            <div className='w-fit mx-auto text-center text-white'>
                <p className="text-7xl md:text-9xl font-secondary">The peak of elegance</p>
                <p className="mt-5 md:mt-8 md:text-2xl font-medium uppercase tracking-wide"><Link to="/wears/women" className='flex gap-2 md:gap-5 justify-center items-center [&:hover_svg]:translate-x-2'><span>Wears for women</span><span><svg className='w-5 md:w-7 transition duration-40' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='#ffffff' d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg></span></Link></p>
            </div>
        </div>
        <div className='h-full w-full absolute top-0 left-0 bg-black opacity-50'></div>
    </div>

    <div className='my-10 md:my-25 mx-2.5 md:mx-15'>
        <p className="mb-7 md:mb-10 text-2xl md:text-4xl italic text-center"><Link to="/wears/women" className='flex gap-3 md:gap-5 justify-center items-end [&:hover_svg]:translate-x-2'><span>The fleece for women</span><span><svg className='w-4.5 md:w-6.5 pb-1 transition duration-40' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg></span></Link></p>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-2.5 md:gap-8">

          {
            womensWears.slice(0, 4).map(wear => (
              <div key={ wear.id }>
                <Product
                  ProductImage={ imagesFolderUrl + wear.image }
                  Name= { wear.name }
                  Price= { wear.price }
                  link= { "/wears/" + wear.gender + "/" + wear.name }
                />
              </div>
            ))
          }

        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home