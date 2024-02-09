import Image from 'next/image'
import React from 'react'

const refresher = () => {
  return (
    <div className='mx-10 py-10'>

        <div className='border-b-[4px] border-red-600 shadow-md px-10'>

            <p className='leading-10'>Oftentimes organizations are continually tempted to think that drivers can wait, probably because we cannot find an instant justification to spend much money on drivers’ training when marketing and/or other net-worth personnel are on queue for their respective training needs. </p>
            <p className='leading-10'>The Anabs Autos Driving Consultancy is poised to change the prevailing driving culture in Nigeria. It is designed to train and/or re-train supposedly drivers who in most cases learnt the skills in a largely disorganised setting and thus, lack even the very basic knowledge of the Highway Code. </p>
        
        </div>

        <section className='mx-10 py-10'>
            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div className='col-span-3'>
                    <Image src="/images/reftraining23.jpg" width={800} height={500}/>
                    <p className='px-10 py-10 text-justify'>Accidents happen in Nigeria every day. A good driver is more responsible on the road and always ready to correct for other people’s actions and errors. Drivers need to be properly informed, though; the passion to achieve this purpose has one major challenge to face: how to ensure we get the best training available. </p>
                    <p className='px-10 py-10 text-justify'>What is at stake? The lives of other personnel under his care as he drives? The company capital asset (the motor vehicle) under his care as he drives? The cost incurred as he runs the vehicle in the course of duty? The confidentiality of vital information he could access because of his relationship with his boss? Undue expenditure? Security? Lives of other road users? Corporate image? It would not be wrong to consider all of these, and even much more  </p>
                </div>
                <div className='col-span-1 bg-blue-800 text-slate-100 rounded-md'>
                    <p className='px-10 py-10 text-justify'>Ours is a multi-staged training programme designed with the mindset of giving the corporate setting and desiring individuals their dream drivers. This capacity building course remains the best as it covers a stretch of topics ranging from the basic knowledge of motoring to the very technical appraisal of how the motor vehicle works, thereby exposing drivers to recent discoveries and rules about motoring. </p>
                     <hr/>
                    <p className='px-10 py-10 text-justify'>We can also help with: Tailor made solutions for companies, government agencies and NGOs, including the removal and relocation of personal effects, transport of special vehicles, heavy equipment and special cargo.  </p>

                </div>

            </div>

        </section>


    </div>
  )
}

export default refresher