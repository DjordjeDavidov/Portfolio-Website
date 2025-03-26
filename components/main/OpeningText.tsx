'use client';

import React from 'react';

export const OpeningText = () => {
  return (
    <div id='ai-bots' className='flex flex-col md:flex-row items-center justify-between px-10 py-20'>
      {/* Image Placeholder */}
      <div className='hidden md:flex w-full md:w-1/3 justify-center items-center'>
        <div className='w-60 h-60 rounded-lg flex items-center justify-center border border-gray-300'>
          <span className='text-gray-500'>[Your Image Here]</span>
        </div>
      </div>

      {/* Text Content */}
      <div className='w-full md:w-2/3 text-center md:text-right'>
        <h2 className='text-center md:mt-15 mb-5 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500'>
          AI Chatbot Solutions for Your Business
        </h2>
        <p className='text-center text-white w-full md:w-3/4 mx-auto'>
          Chatbots are intelligent virtual assistants designed to revolutionize the way businesses interact with their customers. They can provide instant support, automate responses, and handle a vast number of inquiries without the need for human intervention. Whether you are running a small business or a large enterprise, a chatbot can streamline customer service, ensuring quick and accurate answers while reducing response time. By automating repetitive tasks, chatbots free up valuable resources, allowing your team to focus on more critical aspects of your business. Additionally, chatbots are available 24/7, ensuring that potential clients never leave without getting the information they need, which ultimately improves customer satisfaction and brand reputation. Beyond support, AI-powered chatbots can drive sales by guiding customers through the purchasing process, answering product-related questions, and even recommending personalized solutions based on user behavior and preferences. Businesses that integrate chatbots see a noticeable increase in engagement, conversions, and overall efficiency. If you are looking to enhance customer experience and boost revenue, our AI chatbot solutions can be fully customized to meet the specific needs of your business. Want to learn more? Contact us today to explore how our tailored chatbot solutions can transform your business and discover the pricing plan that best suits your needs.
        </p>
      </div>
    </div>
  );
};

export default OpeningText;
