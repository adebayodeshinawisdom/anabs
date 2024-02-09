import Carousel from "@/components/Carousel";
import Image from "next/image";


export default function Home() {
  return (
    <main
      className='flex min-h-screen flex-col items-center justify-between'
    >
      <section className="text-slate-200">
        
          <Carousel/>
        
      </section>

      <section className="mx-8 md:mx-20 my-10">
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
      </section>

    </main>
  );
}
