import React from 'react'
import Foodcard from './components/Foodcard';
import Footer from './components/Footer';
import Header from './components/Header'
function Foods() {
 
    const foods=[
        { id:1,
          foodName:'Sushi',
          foodImage:'/mobirest_back.jpg',
          foodCategory:'FastFood',
          foodPrice:12.99
        },
        {   id:2,
            foodName:'Sushi',
            foodImage:'/mobirest_back.jpg',
            foodCategory:'FastFood',
            foodPrice:12.99
        },
        {   id:3,
            foodName:'Sushi',
            foodImage:'/mobirest_back.jpg',
            foodCategory:'FastFood',
            foodPrice:12.99
        },
        { id:4,
          foodName:'Sushi',
          foodImage:'/mobirest_back.jpg',
          foodCategory:'FastFood',
          foodPrice:12.99
        },
        {   id:5,
            foodName:'Sushi',
            foodImage:'/mobirest_back.jpg',
            foodCategory:'FastFood',
            foodPrice:12.99
        },
        { id:6,
          foodName:'Sushi',
          foodImage:'/mobirest_back.jpg',
          foodCategory:'FastFood',
          foodPrice:12.99
        },
        {   id:7,
            foodName:'Sushi',
            foodImage:'/mobirest_back.jpg',
            foodCategory:'FastFood',
            foodPrice:12.99
        },
        { id:8,
          foodName:'Sushi',
          foodImage:'/mobirest_back.jpg',
          foodCategory:'FastFood',
          foodPrice:12.99
        },
        { id:9,
          foodName:'Sushi',
          foodImage:'/mobirest_back.jpg',
          foodCategory:'FastFood',
          foodPrice:12.99
        },
        { id:10,
          foodName:'Sushi',
          foodImage:'/mobirest_back.jpg',
          foodCategory:'FastFood',
          foodPrice:12.99
        },
        {   id:11,
            foodName:'Sushi',
            foodImage:'/mobirest_back.jpg',
            foodCategory:'FastFood',
            foodPrice:12.99
        },
        {   id:12,
            foodName:'Sushi',
            foodImage:'/mobirest_back.jpg',
            foodCategory:'FastFood',
            foodPrice:12.99
        }
    ];
    return (
        <div>
             <Header address="Kigali-Rwanda"/>
             <div>
                 <h1 className="font-bold text-center">Here are food types we have here</h1>
                 <div className="flex  w-8/12 flex-wrap  my-0 mx-auto h-auto">
                    {
                        foods.map((food) =>{
                          // setCounter(counter+1)
                            return <Foodcard 
                            key={food.id}
                            foodTitle={food.foodName}
                            src={food.foodImage} 
                            price={food.foodPrice}
                            description={food.foodCategory}/>
                        })
                    }
                 </div>
             </div>
             <Footer/>
        </div>
    )
}

export default Foods
