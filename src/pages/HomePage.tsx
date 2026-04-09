import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';
import GridBackground from '../components/GridBackground';

const features = [
  {
    icon: "./game-icon-2.svg",
    title: "Reward Your Ambassadors",
    description: "Boost campaign performance by setting up rewards for ambassadors",
  },
  {
    icon: "./game-icon-1.svg",
    title: "Set Milestones",
    description: "Set up custom goals for sales, posts, or time-based achievements",
  },
  {
    icon: "./game-icon-3.svg",
    title: "Customise Incentives",
    description: "Create custom incentives like flat fees, free products, or special commissions.",
  },
];

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <div className="relative w-[960px] h-[400px] mx-auto bg-white rounded-[16px] border border-[#FEE7FE] flex flex-col items-center justify-center -mb-[19px] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <GridBackground />

          <div className="relative z-10 text-center px-4">
            <h1 className="text-[28px] font-bold text-[#4A044E] leading-tight">
              Gamify your Campaign
            </h1>
            <p className="text-[16px] text-[#616161] mt-4 leading-relaxed">
              Enable gamification to start crafting
              <br />
              your custom reward system.
            </p>
            <div className="mt-8">
              <Button 
                className="bg-[#C530C5] text-white px-20 py-2 rounded-[10px] cursor-pointer inline-flex items-center justify-center text-[16px]"
                text="Enable Gamification"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="max-w-6xl mx-auto px-20 pb-20 -mt-[50px] relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative bg-white p-4 flex flex-col items-center text-center rounded-[8px] shadow-[0px_7px_10px_0px_rgba(0,0,0,0.05)] border border-[#FEE7FE] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full opacity-[0.4] pointer-events-none z-0">
                <img 
                  src="/card-wave.svg" 
                  alt="Background wave" 
                  className="w-full h-full object-contain transition-transform duration-1000" 
                />
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-[70px] h-[70px] bg-[#FBCFFB] rounded-xl flex items-center justify-center mx-auto mb-6 text-[#c026d3] border-[#FBCFFB] shadow-[0_8px_30px_rgba(197,48,197,0.04)]">
                  <div className="w-[48px] h-[48px] bg-white rounded-lg flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.02)] overflow-hidden">
                    <img src={feature.icon.replace('./', '/')} alt={feature.title} className="w-8 h-8 object-contain" />
                  </div>
                </div>
                <h3 className="text-[16px] text-[#303030] mb-2">{feature.title}</h3>
                <p className="text-[14px] text-[#616161] max-w-[260px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default HomePage;