import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffees)
    // console.log(coffees);
    
    return (
        <div className='my-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    coffees?.map(coffee => <CoffeeCard
                         key={coffee._id} 
                         coffees={coffees}
                         setCoffees={setCoffees}
                         coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;