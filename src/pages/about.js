import Image from 'next/image'
import React from 'react'

const about = () => {
  return (
    <div className='mx-8 md:mx-20 my-10'>
        <div className='shadow-xl border-b-[4px] border-red-600'>
       <h3 className='text-center text-3xl font-bold'>ABOUT ANABS AUTOS LTD</h3>
        <div className='text-justify px-5'>
            <p className='leading-10'>Anabs Autos Ltd is a privately owned multi-service company that specializes in the provision of first class services in all aspect of motoring and transportation. </p>
            <p className='leading-10'> We are poised to provide qualitative services to both individuals, public, private and not for profit making establishments in: </p>
            <p className='leading-10'> Vehicles Breakdown Assistance/Recovery Services Refresher Courses/Trainings for corporate drivers Pre-employment Test & Certification of Drivers Drivers Recruitment, Training & Outsourcing Vehicles Haulage and General Logistics Vehicles Tracking Services Corporate Transport Service (Car Rental Service) </p>
        
        </div>
        </div>
        <div className='shadow-xl border-b-[4px] border-red-600 my-10 py-10'>
      
        <div className='text-justify px-5 flex flex-col md:flex-row gap-10'>
            <div>
              <h3 className='text-2xl font-bold bg-blue-800 text-slate-100 text-center px-1 py-1'>Our Vision</h3>
              <p className='py-5'>To be a globally recognised professional service brand</p>
            </div>
            <div>
              <h3 className='text-2xl font-bold bg-blue-800 text-slate-100 text-center px-1 py-1'>Our Mission</h3>
              <p className='py-5'>To enable our client’s businesses by provision of value adding professional services.</p>
            </div>
            <div>
              <h3 className='text-2xl font-bold bg-blue-800 text-slate-100 text-center px-1 py-1'>Our Role</h3>
              <p className='py-5'>Enabling businesses through value adding professional services </p>
            </div>
        </div>
        </div>
        <div className='shadow-xl border-b-[4px] border-red-600 my-10 py-10'>
          <h3 className='text-3xl text-center font-bold py-5'>Our Core Values</h3>
      
        <div className='items-center px-5 grid grid-cols-1 md:grid-cols-3 gap-10'>
            <div>
              <h3 className='text-2xl font-bold  text-slate-600 text-center px-1 py-1'>Integrity</h3>
              <div className='overflow-hidden w-[300px] h-[300px] rounded-full'>
              <Image src="/images/integrity.jpg" width={300} height={300} alt='integrity' className='h-full w-full object-cover'/>
              </div>
            </div>
            <div>
              <h3 className='text-2xl font-bold  text-slate-600 text-center px-1 py-1'>Commitment</h3>
              <div className='overflow-hidden w-[300px] h-[300px] rounded-full'>
              <Image src="/images/commitment.jpg" width={300} height={300} alt='integrity' className='h-full w-full object-cover'/>
              </div>
            </div>
            <div>
              <h3 className='text-2xl font-bold text-slate-600 text-center px-1 py-1'>Excellence</h3>
              <div className='overflow-hidden w-[300px] h-[300px] rounded-full'>
              <Image src="/images/excellence.jpg" width={300} height={300} alt='integrity' className='h-full w-full object-cover'/>
              </div>
            </div>
            <div>
              <h3 className='text-2xl font-bold  text-slate-600 text-center px-1 py-1'>Client Centricity</h3>
              <div className='overflow-hidden w-[300px] h-[300px] rounded-full'>
              <Image src="/images/client-focus.png" width={300} height={300} alt='integrity' className='h-full w-full object-cover'/>
              </div>
            </div>
            <div>
              <h3 className='text-2xl font-bold  text-slate-600 text-center px-1 py-1'>Innovation</h3>
              <div className='overflow-hidden w-[300px] h-[300px] rounded-full'>
              <Image src="/images/innovation.jpg" width={300} height={300} alt='integrity' className='h-full w-full object-cover'/>
              </div>
            </div>
        </div>
        </div>
        <section className='my-10 mx-1 md:mx-5'>
          <div className='grid grid-cols-1 md:grid-cols-6 gap-2'>
          <div className='overflow-hidden w-[350px] md:w-[700px] h-[400px] md:h-[500px] rounded-md col-span-4'>
              <Image src="/images/repair.jpg" width={300} height={300} alt='img' className='h-full w-full object-cover'/>
          </div>

          <div className='col-span-2 h-full bg-blue-950 text-slate-200 rounded-md'>
              <div className='mx-10 my-10'>
                <h3 className='font-bold text-2xl'>AUTO RESCUE + RECOVERY SERVICE</h3>

                <p className='text-justify mt-5'>RECOVERY SERVICE

                Don’t be alone on the road, we stand by you in times of emergency Let’s face it, cars and trucks break down and have accidents in Nigeria every day. Whether it is on the streets of Abuja or an open strip of road in the middle of nowhere, being alone with a broken vehicle is very frustrating </p>
             
              <hr className='my-5'/>

              <h3 className='text-2xl font-bold'>CAR HIRE WITH DRIVER </h3>
              
              <p className='text-justify mt-5'>Why drive yourself when you can enjoy the professional, personalized, timely and dependable service of an Anabs Autos car rental with driver? We help you be more productive as you travel, as well as arriving relaxed and prepared at your destination. All with the highest quality and service standards that high level executives and business people expect. </p>
             
              <hr className='my-5'/>

              <h3 className='text-2xl font-bold'>INTER-CITY VEHICLES HAULAGE + LOGISTICS</h3>
              <p className='text-justify mt-5'>
              For every company, moving high value assets from one location to another is always stressful and fraught with risks. In Nigeria it is also very challenging. Being prepared is half the battle. We can take all that weight and worry off your shoulders by providing you with a professional, fully insured door-to-door transport and delivery service.
              </p>

              <hr className='my-5'/>
              <h3 className='text-2xl font-bold'>REFRESHER COURSES FOR CORPORATE DRIVERS </h3>

              <p className='text-justify mt-5'>Often times organizations are continually tempted to think that drivers can wait, probably because we cannot find an instant justification to spend much money on drivers’ training when marketing and/or other net-worth personnel are on queue for their respective training needs.</p>
              </div>
          </div>

          {/* <div className='overflow-hidden  w-[350px] md:w-[700px] h-[400px] md:h-[500px] rounded-md col-span-4'>
              <Image src="/images/repair.jpg" width={300} height={300} alt='img' className='h-full w-full object-cover'/>
          </div> */}

          </div>

        </section>


        <section className='my-10 mx-1 md:mx-10'>

          <div className='grid grid-cols-1 md:grid-cols-6 gap-3'>

            <div className='overflow-hidden  w-[350px] md:w-[300px] h-[200px] md:h-[200px] rounded-md col-span-2'>
              <Image src="/images/repair.jpg" width={200} height={200} alt='img' className='h-full w-full object-cover'/>
          </div>
            <div className='overflow-hidden  w-[350px] md:w-[300px] h-[200px] md:h-[200px] rounded-md col-span-2'>
              <Image src="/images/uber.jpg" width={200} height={200} alt='img' className='h-full w-full object-cover'/>
          </div>

          <div className='bg-blue-950 text-slate-200 rounded-md col-span-2'>
            <h3 className='mx-10 text-slate-200 font-bold text-2xl my-3 text-center'>Social Media </h3>

            <div className='grid grid-cols-2 mx-10'>
              <a href='/'>Twitter</a>
              <a href='/'>Facebook</a>
           
              <a href='/'>Flickr</a>
              <a href='/'>Google+</a>
            </div>

          </div>

          </div>

        </section>
    </div>
  )
}

export default about