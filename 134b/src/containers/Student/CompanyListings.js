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
            if (allCompanies[i].openPositions.length > 0){
                console.log("There's an opening so post photo");
                console.log(allCompanies[i].logoURL);
                logoArray.push([allCompanies[i].logoURL, allCompanies[i].number]);
                
            }
        }
        console.log(logoArray);

        return (
            <div>
            <h3>These companies are hiring!</h3>
            
            {logoArray.map((logo,i) => <ImageLoad key={i} imageURL={logo[0]} compNumber={logo[1]}/>)}
           
          </div>
        )
    }
}
export default CompanyListings