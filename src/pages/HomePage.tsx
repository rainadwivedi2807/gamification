import Button from '../components/Button';


const features = [
  {
    icon: "./game-icon-1.svg",
    title: "Reward Your Ambassadors",
    description: "Boost campaign performance by setting up rewards for ambassadors",
  },
  {
    icon: "./game-icon-2.svg",
    title: "Set Milestones",
    description: "Set up custom goals for sales, posts, or time-based achievements",
    isHighlighted: true,
  },
  {
    icon: "./game-icon-3.svg",
    title: "Customise Incentives",
    description: "Create custom incentives like flat fees, free products, or special commissions.",
  },
];

const HomePage = () => {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-20 px-4 mt-8">
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#7e22ce_1px,transparent_1px),linear-gradient(to_bottom,#7e22ce_1px,transparent_1px)] bg-[size:40px_40px]">
        </div>

        <div className="relative z-10 max-w-xl mx-auto text-center">
          <h1 className="text-[28px] font-semibold text-[#561056]">
            Gamify your Campaign
          </h1>
          <p className="text-[16px] text-[#616161] mb-2 max-w-lg mx-auto mt-2">
            Enable gamification to start crafting
            <br />
            your custom reward system.
          </p>
          <Button 
            className="bg-[#C530C5] text-white px-20 py-2 rounded-[10px] cursor-pointer block mx-auto mt-6"
            text="Enable Gamification"
          />
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="max-w-6xl mx-auto px-4 pb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`bg-white p-8 text-center relative border-[1px] border-[#FEE7FE] rounded-lg`}>
              <div className="w-[70px] h-[70px] bg-[#FBCFFB] rounded-xl flex items-center justify-center mx-auto mb-6 text-[#c026d3] border-[#FBCFFB]">
                <img src={feature.icon} alt={feature.title} width={51} height={51} />
              </div>
              <h3 className="text-[16px] text-[#303030] mb-2">{feature.title}</h3>
              <p className="text-[14px] text-[#616161] max-w-[260px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;