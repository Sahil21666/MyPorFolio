import React from 'react'
import Card from './Card';

function Portfolio() {
 
  const services = [
    {
      id: "webDesign",
      title: "Web Design",
      description: "Designing creative and functional web interfaces to meet client needs.",
      icon: "💻", 
    },
    {
      id: "uiUxDesign",
      title: "UI/UX Design",
      description: "Crafting user-centric designs for both web and mobile applications.",
      icon: "🎨",
    },
    {
      id: "appDesign",
      title: "App Design",
      description: "Building sleek Android and iOS apps with seamless performance.",
      icon: "📱",
    }
  ];

  const projects = [
    {
      title: 'Music App',
      description: 'An app that connects users to talented musicians worldwide.',
      imageUrl: 'https://img.freepik.com/premium-photo/phone-mobile-application-development-concept-mobile-internet-3d-illustration_76964-5164.jpg?w=2000'
    },
    {
      title: 'Online Shopping App',
      description: 'Shop from the best stores with fast and reliable delivery.',
      imageUrl: 'https://img.freepik.com/premium-vector/mobile-phone-represent-front-shop-storeshopping-online-website-mobile-application-vector-concept-marketing-digital-marketing-long-background_157027-1396.jpg',
    }, 
    {
      title: 'Social Media App',
      description: 'Stay connected with friends and family globally through this app.',
      imageUrl: 'https://sites.stedwards.edu/socialmedia-mkoehle/files/2014/04/Social-Media-1ppp7vc.jpg',
    },
  ];


  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center  animate-fade-in">My Services</h2>
      
      {/* Services Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {services.map(card => (
          <div className='p-5 ' key={card.id}>
            <Card  title={card.title} description={card.description} icon={card.icon} />
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <section className="py-12 animate__animated animate__fadeIn">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 animate-fade-in">My Work</h2>
          
          {/* Responsive Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="relative group">
                {/* Image */}
                <img  
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-full w-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110 opacity-0 animate-fade-in"
                />
              
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-500 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="mb-4">{project.description}</p>
                    <a
                      href="#"
                      className="inline-block bg-white text-red-500 px-4 py-2 rounded-full transition-all duration-300 hover:bg-red-500 hover:text-white"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See More Button */}
          <div className="flex justify-center mt-8">
            <button className="border border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition-colors duration-300">
              See more
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Portfolio;