import React from 'react'
import Foodcard from './components/Foodcard';
import Footer from './components/Footer';
import Header from './components/Header'
function Foods() {
 
    const foods=[
        { id:1,
          foodName:'Sushi',
          foodImage:'/foods/food-galler-img-6.jpg',
          foodCategory:'FastFood',
          foodPrice:38.99
        },
        {   id:2,
            foodName:'Ethiopian dish',
            foodImage:'/foods/food-img-1.png',
            foodCategory:'FastFood',
            foodPrice:42.99
        },
        {   id:3,
            foodName:'Mabona Fresh',
            foodImage:'/foods/food-img-2.png',
            foodCategory:'FastFood',
            foodPrice:45.99
        },
        { id:4,
          foodName:'Spiced chief Meat',
          foodImage:'/foods/food-img-3.png',
          foodCategory:'FastFood',
          foodPrice:30.99
        },
        {   id:5,
            foodName:'Nightngale dish',
            foodImage:'/foods/food-img-4.png',
            foodCategory:'FastFood',
            foodPrice:26.99
        },
        { id:6,
          foodName:'Normand Stake',
          foodImage:'/foods/food-img-5.png',
          foodCategory:'FastFood',
          foodPrice:12.99
        },
        {   id:7,
            foodName:'Hungarian Beefstick',
            foodImage:'/foods/food-galler-img-1.jpg',
            foodCategory:'FastFood',
            foodPrice:39.99
        },
        { id:8,
          foodName:'Tortilla Salad',
          foodImage:'/foods/food-galler-img-2.jpg',
          foodCategory:'FastFood',
          foodPrice:12.99
        },
        { id:9,
          foodName:'Vegetarian Burger',
          foodImage:'/foods/food-galler-img-3.jpg',
          foodCategory:'FastFood',
          foodPrice:16.99
        },
        { id:10,
          foodName:'Pepperoni pizza',
          foodImage:'/foods/food-galler-img-4.jpg',
          foodCategory:'FastFood',
          foodPrice:37.99
        },
        {   id:11,
            foodName:'Full Chicken',
            foodImage:'/foods/food-galler-img-5.jpg',
            foodCategory:'FastFood',
            foodPrice:43.99
        },
        {   id:12,
            foodName:'Somalian Benstulla',
            foodImage:'/foods/food-galler-img-6.jpg',
            foodCategory:'FastFood',
            foodPrice:28.99
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
