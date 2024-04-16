// Contact.tsx

import React from 'react';
import { RxInstagramLogo, RxLinkedinLogo } from 'your-icon-library'; // Import your icon components
import { MdEmail } from 'react-icons/md'; // Import the MdEmail icon from react-icons library

const Contact = () => {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/', '_blank');
  };

  return (
    <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
      <div className='font-bold text-[16px]'>Drustvene mreze</div>
      <p className='flex dlex-row items-center my-[15px] cursor-pointer' onClick={handleInstagramClick}>
        <RxInstagramLogo />
        <span className='text-[15px] ml-[6px]'>Instagram</span>
      </p>
      <p className='flex dlex-row items-center my-[15px] cursor-pointer' onClick={handleLinkedInClick}>
        <RxLinkedinLogo />
        <span className='text-[15px] ml-[6px]'>Linked In</span>
      </p>
      <div className='font-bold text-[16px]'>Kontakt</div>
      <p className='flex dlex-row items-center my-[15px] cursor-pointer'>
        <MdEmail />
        <a href="mailto:nasaemailadresa@gmail.com" className='text-[15px] ml-[6px]'>nasaemailadresa@gmail.com</a>
      </p>
    </div>
  );
}

export default Contact;
