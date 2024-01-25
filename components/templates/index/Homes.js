import React from 'react';
import db from './../../../data/db.json'
import Home from '@/components/modules/Home';

function Homes() {
  return (
     <div class="homes">
      {
        db.homes.slice(0, 6).map((home ) => (
        <Home key={home.id} {... home}/>
      ))}
    </div>
  );
}

export default Homes;
