import Carousel from '@/components/Carousel2'
import Image from 'next/image'
import React from 'react'

const vehicle = () => {
  return (
    <div>
        <Carousel/>

        <div className='mx-10 border-b-[4px] border-red-600'>
            <p className='py-10 mx-2 leading-10 text-justify'>Let’s face it, cars and trucks break down and have accidents in Nigeria every day. Whether it is on the streets of Abuja or an open strip of road in the middle of nowhere, being alone with a broken vehicle is very frustrating. We provide companies a comprehensive program to ensure help arrives quickly and effectively for both driver and vehicle. With our growing network of associated repair shops, we can help get you going again fast, too. </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-6 mx-5 my-5'>
            <div className='col-span-4'>
                <h3 className='text-2xl font-bold text-center'>BREAKDOWN ASSISTANCE SERVICE (BAS) COMPRISES: </h3>
                    <table className='border-slate-200 bg-blue-900 border-[4px] text-slate-100'>

                        <tr className='py-3 mx-3'>
                            <td className='px-5 py-5 border-slate-200 border-[2px] text-slate-100'>Standard Membership:</td>
                            <td className='px-5 py-5 border-slate-200 border-[4px] text-slate-100'>(1 CAR)</td>
                            <td className='px-5 py-5 border-slate-200  border-[4px] text-slate-100'>N35, 000 per annum + 5 % VAT =N36, 750</td>
                        </tr>
                        <tr className='py-3 mx-3'>
                            <td className='px-5 py-5 border-slate-200 border-[2px] text-slate-100'>Family Membership:</td>
                            <td className='px-5 py-5 border-slate-200 border-[4px] text-slate-100'>(2 CARS)</td>
                            <td className='px-5 py-5 border-slate-200  border-[4px] text-slate-100'>N48, 000 per annum + 5 % VAT =N50, 4000</td>
                        </tr>
                        <tr className='py-3 mx-3'>
                            <td className='px-5 py-5 border-slate-200 border-[2px] text-slate-100'>Comprehensive Membership: 	</td>
                            <td className='px-5 py-5 border-slate-200 border-[4px] text-slate-100'>(3 CARS)</td>
                            <td className='px-5 py-5 border-slate-200  border-[4px] text-slate-100'>N70, 000 per annum + 5 % VAT =N 73, 500</td>
                        </tr>
                        <tr className='py-3 mx-3'>
                            <td className='px-5 py-5 border-slate-200 border-[2px] text-slate-100'>Fleet Membership: 	</td>
                            <td className='px-5 py-5 border-slate-200 border-[4px] text-slate-100'>(4 CARS & ABOVE) 	</td>
                            <td className='px-5 py-5 border-slate-200  border-[4px] text-slate-100'>N23, 750 per unit + 5% VAT=N25, 000 per car.</td>
                        </tr>
                    </table>
                    <p className='px-10 py-10'>Our daily service is scheduled to last for a period of ten hours, ranging from 7/8:00am to 6:00pm, after which an hourly overtime charge is applied. While Interstate quotes will be based on request!!</p>
            </div>


                    
        <div className='col-span-2 bg-blue-800 my-5 rounded-md'>
            <p className='text-slate-200 py-10 px-10 text-justify'>
            For a yearly subscription to our Membership program, we guarantee a quick response to distress calls, a fast rescue of driver and passengers, and recovery of the vehicle, giving you peace of mind if ever your vehicle breaks down. 
            </p>
            <hr className='my-5'/>
            <p className='text-slate-200 py-10 px-10 text-justify'>
            Think of it as a kind of insurance policy. No questions asked.  
            </p>
            <hr className='my-5'/>
        </div>

        </div>


        <section className='my-10 mx-1 md:mx-10'>

          <div className='grid grid-cols-1 md:grid-cols-6 gap-3'>

            <div className='overflow-hidden  w-[350px] md:w-[800px] h-[200px] md:h-[300px] rounded-md col-span-4'>
              <Image src="/images/road8.jpg" width={200} height={200} alt='img' className='h-full w-full object-cover'/>
          </div>
           

          <div className='bg-blue-800 text-slate-200 rounded-md col-span-2'>
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

export default vehicle