import React from 'react'
import phpmotors from '../assets/phpmotors.png';
import movie_search from '../assets/movie_search.png';
import task_application from '../assets/task_application.png';
import weather_app from '../assets/weather_app.jpg';
import dassa from '../assets/dassa.png';
import ml from '../assets/ml.jpg';


const Work = () => {    
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className ='py-6'> // Check out some of my recent work</p>
        </div>
       
     {/* Container */}
        <div 
        className='grid sm:grid-cols-2  md:grid-cols-3 gap-4'>  

     {/*Grid Item */}   
          <div style={{backgroundImage:`url(${phpmotors})`}}
          className='shadow-lg shadow-[#040c161] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover  Effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                PHP Motors  

              </span>
              <div className='pt-8 text-center'> 
                <a href="https://github.com/jlule/PHP-motors-website/tree/main#readme">
                  <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/jlule/PHP-motors-website">
                  <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>

          </div>
          
          <div style={{backgroundImage:`url(${movie_search})`}}
          className='shadow-lg shadow-[#040c161] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover  Effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Movie_DB  

              </span>
              <div className='pt-8 text-center'> 
                <a href="https://youtu.be/B1ZPcgCrPH8">
                  <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/jlule/PHP-motors-website/tree/main/phpmotors">
                  <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>

          </div>
          <div style={{backgroundImage:`url(${task_application})`}}
          className='shadow-lg shadow-[#040c161] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover  Effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Django Task Application   

              </span>
              <div className='pt-8 text-center'> 
                <a href="https://youtu.be/o7RBnR9KAuo">
                  <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/jlule/Task-Application">
                  <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>

          </div>
          
          <div style={{backgroundImage:`url(${weather_app})`}}
          className='shadow-lg shadow-[#040c161] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover  Effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Weather App  

              </span>
              <div className='pt-8 text-center'> 
                <a href="https://youtu.be/OmXQwNNHf-w">
                  <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/jlule/Weather-App/tree/master">
                  <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>

          </div>
          

          <div style={{backgroundImage:`url(${ml})`}}
          className='shadow-lg shadow-[#040c161] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover  Effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  Machine Learning 

              </span>
              <div className='pt-8 text-center'> 
                <a href="https://github.com/jlule/Machine_learning_module4/blob/main/ExecutiveSummary_Module4.1.docx">
                  <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Exec Summary</button>
                </a>
                <a href="https://github.com/jlule/Machine_learning_module4/blob/main/Bike_rentals_Project_Module_4.ipynb">
                  <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>

          </div>
          
          <div style={{backgroundImage:`url(${dassa})`}}
          className='shadow-lg shadow-[#040c161] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover  Effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Data Structures and Algorithms Lesson  

              </span>
              <div className='pt-8 text-center'> 
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/jlule/Data_Structures_and_Algorithms_CSE-212">
                  <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

              </div>
            </div>

          </div>
          


        </div>
      </div>
    </div>
  )
}

export default Work
