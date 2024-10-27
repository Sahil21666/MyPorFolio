import React, { useState } from 'react';

function About() {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <div className='min-h-screen bg-gray-100 animate__animated animate__fadeIn animate-fade-in duration-300'>
      <h1 className='text-5xl font-semibold text-center text-black'>
        About Me
      </h1>
      <p className='p-6 text-lg text-gray-700 mx-auto max-w-3xl'>
        Bonjour! My name is Sahil, and I am passionate about creating digital
        content for the web. My interest in web development was sparked in 2021
        when I created my first project called TextUtils, a text editor app
        built using React and Node.js.
      </p>
      <p className='p-6 text-lg text-gray-700 mx-auto max-w-3xl'>
        Fast-forward to today, I specialize in designing and developing
        high-quality solutions that delight our clients and exceed their
        expectations at GitHub. I did my internship at{' '}
        <span className='text-pink-500 font-semibold'>
          IT-NETWORKZ Infosystem
        </span>{' '}
        as a Salesforce and Web Developer intern. I am determined to prove that
        I am an experienced and valuable candidate for the software developer
        role.
      </p>
      <p className='p-6 text-lg text-gray-700 mx-auto max-w-3xl'>
        I also recently started working on a new project called E-Store aimed at
        enhancing full-stack development skills.
      </p>

      <div className='container mx-auto py-10'>
        {/* Tab Navigation */}
        <div className='flex justify-center space-x-12 mb-8'>
          <button
            className={`${
              activeTab === 'skills'
                ? 'text-pink-600 border-b-4 border-pink-600 font-bold'
                : 'text-gray-700'
            } text-lg hover:text-pink-600 transition-all duration-300`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
          <button
            className={`${
              activeTab === 'experience'
                ? 'text-pink-600 border-b-4 border-pink-600 font-bold'
                : 'text-gray-700'
            } text-lg hover:text-pink-600 transition-all duration-300`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button
            className={`${
              activeTab === 'education'
                ? 'text-pink-600 border-b-4 border-pink-600 font-bold'
                : 'text-gray-700'
            } text-lg hover:text-pink-600 transition-all duration-300`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>

        {/* Tab Content */}
        <div className='tab-content text-black mx-auto max-w-2xl transition-opacity duration-500'>
          {activeTab === 'skills' && (
            <div className='space-y-4'>
              <h3 className='text-2xl font-bold text-pink-600'>UI Building</h3>
              <p>Designing Web interfaces</p>
              <h3 className='text-2xl font-bold text-pink-600'>Web Development</h3>
              <p>Web app development</p>
              <h3 className='text-2xl font-bold text-pink-600'>Java Development</h3>
              <p>Building apps using Java</p>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className='space-y-4'>
              <h3 className='text-2xl font-bold text-pink-600'>Frontend Developer</h3>
              <p>Working on responsive UI design and web app functionality.</p>
              <h3 className='text-2xl font-bold text-pink-600'>Backend Developer</h3>
              <p>Building scalable APIs and managing databases.</p>
            </div>
          )}

          {activeTab === 'education' && (
            <div className='space-y-4'>
              <h3 className='text-2xl font-bold text-pink-600'>Information technology Degree</h3>
              <p>RTMNU University, 2021-2024</p>
              <h3 className='text-2xl font-bold text-pink-600'>Courses</h3>
              <p>Web Development, Java development, Data Structures</p>
            </div>
          )}
        </div>
      </div>

      <hr className='my-10 border-gray-300' />

      <p className='text-center text-lg text-gray-700'>
        Here are a few technologies I’ve been working with recently:
      </p>

      <div className='flex justify-center space-x-32 p-8 text-center'>
        <div className='space-y-2'>
          <p>➡️ JavaScript (ES6+)</p>
          <p>➡️ TypeScript</p>
          <p>➡️ React</p>
          <p>➡️ Next.js</p>
          <p>➡️ Node.js</p>
        </div>
        <div className='space-y-2'>
          <p>➡️ Redux Toolkit</p>
          <p>➡️ React Native</p>
          <p >➡️ C/C++</p>
          <p className='px-2'>➡️ Java</p>
          <p>➡️ Tailwind CSS</p>
        </div>
        <div className='space-y-2'>
          <p>➡️ Sanity.io</p>
          <p>➡️ MySQL</p>
          <p>➡️ MongoDB</p>
        </div>
      </div>
    </div>
  );
}

export default About;