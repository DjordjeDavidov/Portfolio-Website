import React from 'react'
import { Projectcard } from '../sub/Projectcard'

export const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            Nasi projekti
        </h1>
        <div id='projects' className='h-[50%] w-[60%] flex flex-col md:flex-row gap-10 px-10'>
            <Projectcard 
              src='/BambooPanda.png'
              title='Moderan sajt za kineski restoran'
              description='Ovaj sajt je dizajniran za kineski restoran koji omogućava korisnicima da pregledaju meni sa raznovrsnim kineskim jelima, cene, informišu se o novostima i lokaciji restorana. Takođe, korisnicima je omogućeno da naruče hranu putem dostavljačkih platformi, kao i da rezervišu stolove u restoranu. Sajt pruža sve potrebne informacije o restoranu i njegovoj ponudi kako bi korisnicima olakšao planiranje posete i uživanje u kvalitetnoj kineskoj kuhinji.'
            />
        </div>
    </div>
  )
}
