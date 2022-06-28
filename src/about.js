import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import TeamCard from './components/TeamCard'
function About() {
    return (
        <div>
             <Header address="Kigali-Rwanda"/>
             {/* company history */}
             <div className="background h-80 flex flex-col justify-center" style={{ 
                backgroundImage: `url("/mobirest_back.jpg")`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover"
              }}>
              <div className="h-auto  bg-black opacity-60 mx-auto p-5" style={{width:480+"px"}}>
                  <h1 className="text-center font-bold text-2xl text-white">Company Background</h1>
                  <p className="text-white ">In June 2021 Schadrack Godson came up with a new idea of establishing a mobile restaurant so that he can server people from all places around the city.
                  Thus the name mobiresto. Since that time that restaurant has been citicized positively with pleasure among the people.</p>
              </div>  
             </div>
             <div className="flex flex-col justify-between items-center my-5  bg-black text-white">
                  {/* our mission */}
             <div className="Mission flex flex-start mb-2.5 w-4/5">
                <div className="mission-icon">
                <img src="/images/p2.jfif" className="h-40 w-40 object-cover" alt="food tile"/>
                </div>
                <div className="mission-text px-5">
                    <h1 className="text-center font-bold text-3xl">Our mission</h1>
                    <p className="pl-2.5">To serve people good meal better for their health in a good manner,clean and efficient to their liking</p>
                </div>
             </div>
             {/* Our vision */}
             <div className="vision flex flex-start mb-2.5 w-4/5">
                <div className="vision-icon">
                <img src="/images/p8.jfif" className="h-40 w-40 object-cover" alt="food tile"/>
                </div>
                <div className="vision-text">
                    <h1 className="text-center font-bold text-3xl">Our vision</h1>
                    <p className="pl-2.5">To become the best restaurant in the world which offers an incredible service in the community</p>
                </div>
             </div>
             {/* Our motivation */}
             <div className="motivation flex flex-start mb-2.5 w-4/5">
                <div className="motivation-icon">
                <img src="/images/p7.jfif" className="h-40 w-40 object-cover" alt="food tile"/>
                </div>
                <div className="motivation-text">
                    <h1 className="text-center font-bold text-3xl">Our motivation</h1>
                    <p className="pl-2.5">Our motivation is to help people get food easily in their day-to-day activity.</p>
                </div>
             </div>
             </div>
            
             {/* Our team */}
             <div className="team my-5">
                <h1 className="text-center font-bold text-3xl mb-5">Our Team</h1>
                <div className="flex flex-wrap w-full px-5 justify-between">
                    <TeamCard imageUrl="/images/p6.jfif" memberName="Janne Habiyambere" position="Lead Marketer" description="John Habiyambere has been an incredible Marketer for mobiresto since its establishment in 2021"/>
                    <TeamCard imageUrl="/images/p1.jfif" memberName="Akariza Ines" position="Accountant" description="Akariza Ines has been an incredible Accountant for mobiresto since its establishment in 2021"/>
                    <TeamCard imageUrl="/images/p8.jfif" memberName="Patrick Iradukunda" position="COO" description="John Habiyambere has been Chief Operations Officer for mobiresto since its establishment in 2021"/>
                    <TeamCard imageUrl="/images/p5.jfif" memberName="Joseph Mugabo" position="CEO" description="Joseph Mugabo has been an incredible Marketer for mobiresto since its establishment in 2021"/>
                </div>
             </div>
             
             <Footer/>
        </div>
    )
}

export default About
