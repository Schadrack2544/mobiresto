import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
function Contact() {
    return (
        <div className="min-h-screen" style={{ 
            backgroundImage: `url("/mobirest_back.jpg")` ,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover"
          }}>
            <Header address="Kigali-Rwanda"/>
            <div className="flex justify-around">
            <div className="h-auto px-2.5 py-2.5 w-1/2 bg-black m-5 border-2 border-red-500 opacity-80">
                <h1 className="text-red-500 font-bold text-xl">Tell us Your query </h1>
               <form method="post" action="/contact" className="flex flex-col">
                <input type="text" placeholder="Your Full Name" name="full_name " className="my-2.5 p-2 rounded-lg bg-gray-200 font-bold"/>
                <input type="email" placeholder="Your email address" name="email" className="my-2.5 p-2 rounded-lg bg-gray-200 font-bold"/>
                <input type="number" placeholder="Your phone number" name="phone" className="my-2.5 p-2 rounded-lg bg-gray-200 font-bold"/>
                <textarea cols="80" rows="5" name="message" placeholder="Enter your message here." className="my-2.5 p-2 rounded-lg">
                </textarea>
                <input type="submit" value="Send Message" name="sendBtn" className="my-2.5 p-2 bg-green-700"/>
               </form>
            </div>
            <div className="h-auto px-2.5 py-2.5 w-1/2 bg-black text-white opacity-60 mx-5 my-5">
                <h1 className="my-2.5 p-2 font-bold text-2xl">Company: Mobiresto Ltd</h1>
                <h1 className="my-2.5 p-2 font-bold text-2xl">Address: KN 2AV 168 St</h1>
                <h1 className="my-2.5 p-2 font-bold text-2xl">Email:info@mobiresto.com</h1>
                <h1 className="my-2.5 p-2 font-bold text-2xl">Tel:+250780494982</h1>
            </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Contact
