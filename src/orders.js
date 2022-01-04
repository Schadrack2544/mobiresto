import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import OrderCard from './components/OrderCard';
function Orders() {
    const orders = [
        {
         orderId: 1,
         foodName:'American Hotdog',
         foodImage: '/mobirest_back.jpg',
         clientName:'Kanyange Ange',
         clientAddress: 'KN123St 2nd AV',
         clientPhone: '+250788302238',
         foodPrice:'39.99'
        },
        {
            orderId: 2,
            foodName:'Indian Biryani',
            foodImage: '/mobirest_back.jpg',
            clientName:'Bugingo Innocent',
            clientAddress: 'KN123St 2nd AV',
            clientPhone: '+250788302238',
            foodPrice:'39.99'   
        },
        {
            orderId: 3,
            foodName:'Sushi',
            foodImage: '/mobirest_back.jpg',
            clientName:'Peter Claus',
            clientAddress: 'KN123St 2nd AV',
            clientPhone: '+250788302238',
            foodPrice:'39.99'
        },
        {
            orderId: 4,
            foodName:'American Pizza',
            foodImage: '/mobirest_back.jpg',
            clientName:'Uwimana Kendrick',
            clientAddress: 'KG 230St 1St AV',
            clientPhone: '+250782307235',
            foodPrice:'18.99'
        },
        {
            orderId: 5,
            foodName:'Italian Pasta',
            foodImage: '/mobirest_back.jpg',
            clientName:'Schadrack Godson',
            clientAddress: 'KN123St 2nd AV',
            clientPhone: '+250783121773',
            foodPrice:'25.99'
        },
        {
            orderId: 6,
            foodName:'Rwandan cultural dish',
            foodImage: '/mobirest_back.jpg',
            clientName:'Noella Godson',
            clientAddress: 'KN123St 2nd AV',
            clientPhone: '+250788437126',
            foodPrice:'45.99'
        },
    ];
    return (
        <div>
             <Header address="Kigali-Rwanda"/>
             <div className="mx-auto my-0 h-auto w-1/2">
                 <h1 className="text-center text-black">List of orders made</h1>
                 <div>
                     {
                         orders.map(order =><OrderCard key={order.orderId} foodName={order.foodName} foodPrice={order.foodPrice} foodImage={order.foodImage} clientAddress={order.clientAddress} clientPhone={order.clientPhone} clientName={order.clientName}/>)
                     }
                 </div>
             </div>
             <Footer/>
        </div>
    )
}

export default Orders
