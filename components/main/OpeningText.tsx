'use client';

import React from 'react';

export const OpeningText = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center pt-10 z-21'>
      <h1 className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500'>
        Veb stranica je važna..
      </h1>
      <p className='text-white text-2xl mt-4 w-full md:w-1/2'>
        Ali već imate previše obaveza i pronalaženje dobrog programera koji razume vašu viziju je teško..
      </p>
      <h1 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-white mt-20'>
        Kako onda doći do svoje veb stranice?..
      </h1>

      {/* Cards Section */}
      <div className='flex flex-wrap justify-center mt-10 gap-8 z-10 max-w-screen-lg mx-10'>
        {/* Card 1 */}
        <div className='w-full md:w-1/3 bg-purple-500 bg-opacity-50 to-mint-500 bg-opacity-50 rounded-lg border border-gradient p-4'>
          <h2 className='text-2xl font-bold mb-2 text-center'>Uradite sve sami?</h2>
          <p className='text-white text-lg text-center'>Ovo je dobro kada nemate puno obaveza, ali ako ste preokupirani zadacima, onda dupli posao i nije najbolje rešenje za vas.</p>
        </div>

        {/* Card 2 */}
        <div className='w-full md:w-1/3 bg-purple-500 bg-opacity-50 to-mint-500 bg-opacity-50 rounded-lg border border-gradient p-4 mt-6 md:mt-0'>
          <h2 className='text-2xl font-bold mb-2 text-center'>Putem klasičnih agencija?</h2>
          <p className='text-white text-lg text-center'>Ako raspolažete velikim budžetom, onda i ima šanse da vas projekat ne završi kod asistentovog asistenta.</p>
        </div>

        {/* Card 3 */}
        <div className='w-full md:w-1/3 bg-purple-500 bg-opacity-50 to-mint-500 bg-opacity-50 rounded-lg border border-gradient p-4 mt-6 md:mt-0'>
          <h2 className='text-2xl font-bold mb-2 text-center'>Ne preduzeti ništa?</h2>
          <p className='text-white text-lg text-center'>Ako želite da uvek budete ispod vaše konkurencije, onda je ovo odlično rešenje za vas.</p>
        </div>
      </div>

      {/* Video */}
      <div className='w-full h-full absolute mt-20 top-50'>
        <div className='w-full h-full z-1 opacity-30 absolute flex items-center justify-center bg-cover'>
          <video 
            className='w-full h-auto'
            preload='false'
            playsInline
            loop
            muted
            autoPlay
            src='/cards-video.webm'
          />
        </div>
      </div>
    </div>
  )
}

export default OpeningText;
