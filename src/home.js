import React from 'react'
import Header from './components/Header';
import Button from './components/Button'
import Footer from './components/Footer'
import Foodcard from './components/Foodcard'
import Testimonial from './components/Testimonial'
function Home(){
 return (
    <div className=" bg-white min-h-screen">
    <Header address="Kigali-Rwanda"/>
   <div className="min-w-screen h-80 bg-slate-400" style={{ 
   backgroundImage: `url("/mobirest_back.jpg")` ,
   backgroundRepeat:"no-repeat",
   backgroundSize:"cover"
 }}>
    <h1 className="text-center text-2xl font-bold pt-40">Welcome to our mobi<span className="text-red-600">resto</span></h1>
     <Button value="Explore more" position="center" color="green"/>
   </div>
   <div className="flex flex-col">
     <h1 className="text-red-600 text-center font-bold text-3xl">Our menu</h1>
  <div className="flex justify-evenly">
    <Foodcard key="1" src="mobirest_back.jpg" price="2500" foodTitle="Special Pilau" description="A good pilau for muslim"/>
    <Foodcard key="2" src="mobirest_back.jpg" price="3000" foodTitle="French cuisine" description="Yummy food"/>
    <Foodcard key="3" src="mobirest_back.jpg" price="2200" foodTitle="Russian dinner" description="A good dinner to have with your family"/>
    <Foodcard key="4" src="mobirest_back.jpg" price="1000" foodTitle="Canadian breakfast" description="nice food to serve"/>
  </div>
  <div>
      <h1 className="font-bold text-red-600 text-center text-3xl"> Testimonials</h1>
  </div>
  <div className="flex flex-row justify-around ">
      <Testimonial name="Keza Briella" image="/images/p1.jfif" message="mobiresto ni restaurant nkunda kujyamo mubi gihe cyose iyo numva nshatse gufata amafunguro kuko bafite ibyo kurya by'akataraboneka" time="yesterday 5:13 pm "/>

      <Testimonial name="Uwineza Jemima" image="/images/p2.jfif" message=" kurira muri mobiresto restaurant ni ibintu bidushimisha bitewe n'uburyo bafatamo abakiriya babo by'agahebuzo bityo bigatumwa twishimira serivise yaho" time="yesterday 9:41 am "/>
      
      <Testimonial name="Kalisa Gericho" image="/images/p7.jfif" message="Iyo numva nshaka gufata amafunguro mobiresto niyo restaurant nkunda gusohokeramo njyewe n'abacuti banjye kuko twishimira amafunguro yaho meza ateguranye ubuhanga n'uko bakira abantu." time="yesterday 12:05 pm "/>

      <Testimonial name="Iradukunda Moreen" image="/images/p8.jfif" message="I thank so much people behind mobiresto because of their incredible service and the way they treat their customers. Thank you so much mobiresto for treating us better." time="yesterday 2:37 pm "/>
  </div>
  </div>
   <Footer/>
 </div>
 )
}

export default Home