import React from 'react'

const About = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Welcome to EstateEdge!
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          At EstateEdge, we are revolutionizing the way people buy, sell, and rent real estate. Our mission is to create a seamless, transparent, and efficient marketplace that connects buyers, sellers, and renters with their ideal properties. Whether you’re a first-time homebuyer, an experienced investor, or someone looking for the perfect rental, EstateEdge is here to guide you every step of the way.
        </p>
      </div>

      <div className="mt-10">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Our Story</h3>
        <p className="mt-2 text-base text-gray-600">
          Founded in [Year], EstateEdge was born out of a passion for real estate and a desire to simplify the property search process. Our founders, [Founder Names], recognized the need for a more user-friendly and comprehensive platform that could serve as a one-stop-shop for all real estate needs. With backgrounds in real estate, technology, and customer service, they set out to create a platform that combines cutting-edge technology with personalized support.
        </p>
      </div>

      <div className="mt-10">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Our Mission</h3>
        <p className="mt-2 text-base text-gray-600">
          Our mission is to empower individuals and families to make informed real estate decisions with confidence. We strive to provide the most accurate, up-to-date listings, along with valuable resources and tools that make the buying, selling, and renting process as smooth as possible.
        </p>
      </div>

      <div className="mt-10">
        <h3 className="text-lg leading-6 font-medium text-gray-900">What We Offer</h3>
        <ul className="mt-2 text-base text-gray-600 list-disc pl-5 space-y-2">
          <li>Extensive Listings: Our platform features a vast array of properties, including residential, commercial, and rental properties. We update our listings daily to ensure you have access to the latest opportunities.</li>
          <li>Advanced Search Tools: Our advanced search filters and interactive maps make it easy to find properties that match your specific criteria, from location and price to amenities and more.</li>
          <li>Expert Advice: Our team of real estate professionals is always available to provide guidance and answer any questions you may have. We offer expert advice on market trends, financing options, and more.</li>
          <li>User-Friendly Experience: Our website and mobile app are designed with user experience in mind. With intuitive navigation and a sleek interface, finding your dream property has never been easier.</li>
          <li>Secure Transactions: We prioritize your safety and security. Our platform includes robust security measures to protect your personal information and ensure secure transactions.</li>
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Our Values</h3>
        <ul className="mt-2 text-base text-gray-600 list-disc pl-5 space-y-2">
          <li>Integrity: We are committed to maintaining the highest standards of honesty and transparency in all our dealings.</li>
          <li>Customer Focus: Our customers are at the heart of everything we do. We are dedicated to providing exceptional service and support to meet your needs.</li>
          <li>Innovation: We continually invest in the latest technology to enhance our platform and provide the best possible experience for our users.</li>
          <li>Community: We believe in giving back to the communities we serve. Through various initiatives and partnerships, we aim to make a positive impact on society.</li>
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Meet Our Team</h3>
        <p className="mt-2 text-base text-gray-600">
          Our team is a diverse group of professionals with a shared passion for real estate and customer service. From our tech developers and data analysts to our real estate agents and customer support representatives, every member of our team plays a crucial role in making EstateEdge the premier real estate marketplace.
        </p>
      </div>

      <div className="mt-10">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Contact Us</h3>
        <p className="mt-2 text-base text-gray-600">
          We’d love to hear from you! Whether you have a question, need assistance, or want to provide feedback, our team is here to help. Reach out to us at [Contact Information] or visit our [Contact Us] page for more details.
        </p>
      </div>

      <div className="mt-10">
        <h3 className="text-lg leading-6 font-medium text-gray-900">About the Developer</h3>
        <p className="mt-2 text-base text-gray-600">
          This project was developed by <span className="font-bold text-indigo-600">Pratoosh Garg</span>, a passionate web developer dedicated to creating seamless and efficient web experiences. If you have any questions or need further assistance, feel free to reach out to Pratoosh at <span className="font-bold text-indigo-600">pratoosh10garg@gmail.com</span> <button onClick={() => navigator.clipboard.writeText('pratoosh10garg@gmail.com')} className="ml-2 inline-flex items-center px-2 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M8.586 2.586a2 2 0 012.828 0L14 5.172a2 2 0 010 2.828l-6 6a2 2 0 01-2.828 0L4 11.828a2 2 0 010-2.828l6-6zm5.707 6.707L10 3.414 4.707 8.707a1 1 0 001.414 1.414L10 6.414l3.293 3.293a1 1 0 001.414-1.414z" /></svg></button>
        </p>
      </div>
    </div>
  )
}

export default About