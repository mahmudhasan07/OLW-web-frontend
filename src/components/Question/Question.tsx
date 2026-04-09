import React from 'react';
import Image from 'next/image';

const Question = () => {
  return (
    <section className="w-full px-4 py-14 md:py-16 ">
      <div className="max-w-[1240px] mx-auto bg-[#F6F6F6] rounded-2xl md:rounded-3xl p-8 md:p-12 text-center flex flex-col items-center">
        
        {/* Avatars */}
        <div className="flex items-center justify-center -space-x-3 md:-space-x-4 mb-6">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white relative z-10">
            <Image 
              src="https://i.pravatar.cc/150?img=12" 
              alt="Team member" 
              width={56} 
              height={56} 
              className="object-cover w-full h-full" 
            />
          </div>
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white relative z-20 shadow-sm -mt-2">
             <Image 
              src="https://i.pravatar.cc/150?img=5" 
              alt="Team member" 
              width={64} 
              height={64} 
              className="object-cover w-full h-full" 
            />
          </div>
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white relative z-10">
             <Image 
              src="https://i.pravatar.cc/150?img=9" 
              alt="Team member" 
              width={56} 
              height={56} 
              className="object-cover w-full h-full" 
            />
          </div>
        </div>

        {/* Text Content */}
        <h3 className="text-xl md:text-2xl lg:text-[25px] font-bold text-gray-900 mb-2 md:mb-3">
          Still have Questions?
        </h3>
        
        <p className="text-[#64748B] text-sm md:text-[15px] mb-8 font-medium max-w-md mx-auto leading-relaxed">
          Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
        </p>
        
        {/* Button */}
        <button className="bg-[#EE3A69] hover:bg-[#D42B56] text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-300 text-sm md:text-base tracking-wide">
          Get in touch
        </button>

      </div>
    </section>
  );
};

export default Question;
