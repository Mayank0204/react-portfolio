import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white'>
      <div className='container pl-15 pr-0 p-4 flex justify-between items-center'>
        <div className='flex items-center'>
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}    
            height={80}   
            className="object-contain"
          />
        </div>
        <p className='text-slate-600'>All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
