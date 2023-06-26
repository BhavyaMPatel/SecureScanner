import React from 'react'
import Navbar from '../component/Navbar'
import DocumentUpload from '../component/Documentupload'
function HomePage() {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-wrap sm:mx-20 mt-20 h-fit items-center'>
        <div className='w-full sm:w-1/2 sm:p-2 p-5 h-[45vh] flex justify-center items-center'>
            <div className='text-[#373b4e] fill-[#606a7b] text-4xl md:text-4xl lg:text-5xl font-Poppins font-semibold'>
                <div className='flex justify-start'> Wel-Come To </div>
                    <div className='text-[#db1a5a] flex justify-statr'>SecureScanner</div>
                        <div className="text-[#373b4e] mt-3 flex justify-start text-base md:text-lg lg:text-xl font-Inter tracking-tighter">
                        Our software will offer an easy-to-use interface that allows the end-user to choose the type of files they want to scan and the level of masking they want to apply to the PII data. The file scanner will be able to scan common file formats such as PDFs, Word documents, and email attachments.
                        </div>
                        <dialog id='room' className='w-screen opacity-100 fixed top-1 rounded-md'>
                        <div className='mb-2 font-Poppins text-lg md:text-2xl text-pink-600'>Secure Your Document Now</div>
                            <DocumentUpload/>
                        <div id="ChatNow" className='font-Poppins text-green-500 text-sm'></div>
                        <button onClick={()=>{room.close()}} className=" inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-400 hover:bg-gray-100 hover:text-pink-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-pink-700 dark:focus:text-white dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-slate-900 "><svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path></svg>Close</button>
                    </dialog>
                <button onClick={()=>{room.showModal()}} className=" inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-400 hover:bg-gray-100 hover:text-pink-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-pink-700 dark:focus:text-white dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-slate-900 "><svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path></svg>Secure Your Document Now</button>
            </div>
        </div>
        <div className='w-full sm:w-1/2 sm:p-2 p-5 text-center flex justify-center items-center h-[67vh]'>
            <img className='h-[55vh] sm:h-[50vh] md:h-[70vh]' src='/Home_1.jpg' alt='Navbackground'/>
        </div>
    </div>

    <div className='flex flex-wrap-reverse sm:mx-20 m-2 h-fit items-center sm:mt-5 md:mt-7'>
        <div className='w-full sm:w-1/2 sm:p-2 p-5 text-center flex justify-center items-center h-[67vh]'>
                <img className='h-4/5' src='/Home_5.jpg' alt='Navbackground'/>
        </div>
        <div className='w-full sm:w-1/2 sm:p-2 p-5 mt-5 h-[50vh] sm:h-[45vh] flex justify-center items-center'>
            <div className='text-[#183b56] text-3xl md:text-4xl lg:text-4xl font-Poppins text font-semibold'>
                <div className='flex justify-start'> Database Scanner </div>
                <div className="text-[#373b4e] mt-2 mb-2 flex justify-start text-base md:text-base lg:text-lg font-Poppins tracking-tighter">
                    Coming Soon...!
                </div>
                <a  href="/#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-400 hover:bg-gray-100 hover:text-pink-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-pink-700 dark:focus:text-white dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-slate-900 "><svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path></svg>Database Scanner</a>
            </div>
        </div>
    </div>

    <div className='flex justify-center text-[#183b56] text-base md:text-2xl lg:text-3xl font-Poppins text font-semibold mt-10 sm:mt-7 md:mt-9 mb-5'>
    SecureScanner Cares Abouts Your Privacy !
    </div>
    </div>
  )
}

export default HomePage
