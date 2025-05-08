import { Link } from 'react-router-dom'

import Header from '../components/Header'
// import Product from '../components/Product'
import Footer from '../components/Footer'

function Profile() {
  return (
    <div>
      <Header />

      <div className='my-10 md:my-25 mx-2.5 md:mx-15'>Profile</div>

      <Footer />
    </div>
  )
}

export default Profile