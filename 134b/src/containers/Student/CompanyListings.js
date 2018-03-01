import React from 'react';
import CompanyAPI from './../Company/CompanyAPI';

import ImageLoad from './ImageLoad';
export class CompanyListings extends React.Component{
    
    render(){
        const allCompanies = CompanyAPI.all();
        console.log(allCompanies);
        console.log(allCompanies.length);
        const logoArray = [];
        let i;
        for (i = 0; i < allCompanies.length; i++){
            if (allCompanies[i].openPositions > 0){
                console.log("There's an opening so post photo");
                console.log(allCompanies[i].logoURL);
                logoArray.push(allCompanies[i].logoURL);
                
            }
        }
        console.log(logoArray);
        const chefs = [
            {
              key: 1,
              images: ['http://lorempixel.com/400/400/sports/', 'http://lorempixel.com/400/400/abstract/', 'http://lorempixel.com/400/400/animals/', 'http://lorempixel.com/400/400/city/', 'http://lorempixel.com/400/400/people/']
            }
          ]

        return (
            <div>
            <h4>Slide image</h4>
            {chefs.map((chef, i)=>(
              <div key={i}>
                {chef.images.map((image,index)=>(
                  <ImageLoad imageUrl={image} key={index} />
                ))}
              </div>  
            ))}
            
               {/* {logoArray.map((logo)=>(
              <ImageLoad imageUrl={logo} /> 
            ))} */}
           
          </div>
        )
    }
}
export default CompanyListings