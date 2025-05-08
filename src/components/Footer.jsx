import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='mt-25 md:mt-35 text-center'>

      <div className='w-fit mx-auto mb-10 px-5'>
        <div className="mb-3 w-fit mx-auto flex gap-1.5 items-center">
          <div><Link to='/' className='text-xl md:text-2xl uppercase tracking-wider italic'><span className='text-2xl md:text-3xl'>K</span>aftan</Link></div>
        </div>
        <div className="mb-3 w-fit mx-auto">
            <ul className="flex flex-wrap gap-5 items-center text-xs md:text-sm">
                <li><Link to="/" className="hover:text-black-300">Return Policy</Link></li>
                <li><Link to="/" className="hover:text-black-300">Shipping</Link></li>
                <li><Link to="/" className="hover:text-black-300">About Us</Link></li>
                <li><Link to="/" className="hover:text-black-300">Contact Us</Link></li>
            </ul>
        </div>
        <p className="md:max-w-130 text-xs md:text-sm">Elevate your style with Kaftan, where premium quality meets timeless design. Crafted for comfort and confidence, our fashion speaks for itself.</p>
      </div>

      <div className='mx-20 h-[.1px] bg-black'></div>

      <div className='py-5 px-5 md:px-30 text-center text-xs'>
        <p>Copyright © 2025 by Kaftan | All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer