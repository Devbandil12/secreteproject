import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight) {
          element.classList.add('fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

const HeroSection = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-purple-600 to-blue-500 text-white text-center relative overflow-hidden">
    <h1 className="text-4xl font-bold mb-6 animate-on-scroll">Welcome to Our Awesome Platform!</h1>
    <p className="text-lg mb-8 animate-on-scroll">Join us on an incredible journey.</p>
    <Link to={"/getstarted"}>
<button className="bg-white text-blue-500 py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 animate-on-scroll">

     Get Started
</button>
    
    </Link> 
   
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-10 h-10 border-4 border-white rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
      </div>
    </div>
  </div>
);

const FeaturesSection = () => (
  <div id="features" className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h2 className="text-3xl font-semibold mb-6 animate-on-scroll">Our Features</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl p-4">
      {featuresData.map((feature, index) => (
        <FeatureBox key={index} title={feature.title} description={feature.description} index={index} />
      ))}
    </div>
  </div>
);

const FeatureBox = ({ title, description, index }) => {
  const animationDirection = index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right';

  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 ${animationDirection} animate-on-scroll`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const AboutSection = () => (
  <div id="about" className="flex items-center justify-center h-screen bg-white animate-on-scroll">
    <div className="text-center max-w-md">
      <h2 className="text-3xl font-semibold">About Us</h2>
      <p className="mt-4 text-gray-700">
        We are dedicated to providing exceptional services to our users. Join us as we make a difference in the community.
      </p>
    </div>
  </div>
);

const ContactSection = () => (
  <div id="get-started" className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-100 to-white animate-on-scroll">
    <div className="text-center">
      <h2 className="text-3xl font-semibold">Ready to Start?</h2>
      <p className="mt-4">Let's get you on board!</p>
      <Link to={"/getstarted"}>
<button className="bg-white text-blue-500 py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 animate-on-scroll">

     Get Started
</button>
    
    </Link> 
    </div>
  </div>
);

// Sample feature data
const featuresData = [
  { title: 'Amazing User Interface', description: 'Experience a clean and user-friendly interface.' },
  { title: 'Fast and Secure', description: 'Our platform ensures speed and security for all users.' },
  { title: '24/7 Support', description: 'We provide round-the-clock support for our users.' },
  { title: 'Customizable Options', description: 'Tailor your experience with our customizable settings.' },
  { title: 'Mobile Friendly', description: 'Access our platform from any device, anywhere.' },
  { title: 'Community Driven', description: 'Join a community of like-minded individuals.' },
];

export default HomePage;

// CSS (Add this to your CSS file)
