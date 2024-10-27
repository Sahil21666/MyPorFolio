import React from 'react'
import ImageComponent from './ImageComponent'
import { useNavigate } from 'react-router-dom'
import TypingEffect from './TypingEffect'

function Home() {
  const navigate =useNavigate()
  return (
    <div className="flex flex-col bg-slate-400 lg:flex-row justify-center items-center p-5 animate__animated animate__fadeIn animate-fade-in duration-300">
    {/* Image Section */}
    <div className="w-full lg:w-2/4 mb-5 lg:mb-0">
      <ImageComponent />
    </div>

    {/* Text Section */}
    <div className="w-full lg:w-2/4 text-center flex flex-col justify-center items-center p-2 animate-fade-in duration-300">
      <h1 className="text-4xl md:text-5xl lg:text-6xl p-2">
        Hi, My Name is <span className="text-pink-500">Sahil</span>
      </h1>
      <h2 className="text-lg md:text-xl lg:text-2xl p-2 text-gray-800">
        I am a <TypingEffect/>
      </h2>
      <p className="p-5 text-sm md:text-base lg:text-lg">
        I'm a Software Engineer with expertise in distinct tech domains. My current focus revolves around developing top-notch digital experiences, concerned about user needs. You will find me bringing new ideas and insights to the table.
      </p>
      <button
        onClick={() => navigate('/contact')}
        className="border-2 font-semibold bg-pink-400 border-black rounded-lg p-2 hover:bg-pink-500 transition duration-300"
      >
        Contact Me
      </button>
    </div>
  </div>
  )
}

export default Home
