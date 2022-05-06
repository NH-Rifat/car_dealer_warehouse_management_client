import React from 'react';
import Banner from './Banner/Banner';
import CarModel from './CarModel/CarModel';
import Inventory from './Inventory/Inventory';
import ServiceDisplay from './ServiceDisplay/ServiceDisplay';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServiceDisplay></ServiceDisplay>
      <CarModel></CarModel>
      <Inventory></Inventory>
    </div>
  );
};

export default Home;
