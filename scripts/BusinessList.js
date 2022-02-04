/*
Use the .forEach() array method to 
list all companies.
*/

// import the businesses from the database module
import { getBusinesses } from "./database.js"

// create and export a FN that will generate the HTML
// for use by index.html
 export const BusinessListing = () => {

    // invoke the FN to get the businesses
    const businessArray = getBusinesses()

        // create the variable that will hold the HTML for
        // list list of businesses
    let businessListHTML = "<h1>Active Businesses</h1>"


            // iterate through the businesses using .forEach
            // grabbing and displaying: name, street address, city, state, zip
                // added <br> to get the city, state, zip to shown 
                //on the line below the street address

    businessArray.forEach((businessObject) => {

        businessListHTML += `
        <section class="businesses">
            <h2 class="businesses__companyName">${businessObject.companyName}</h2>
            <div class="businesses__nameAndAddress"> ${businessObject.addressFullStreet}<br> 
                                                     ${businessObject.addressCity}, 
                                                     ${businessObject.addressStateCode}
                                                     ${businessObject.addressZipCode}
                    <hr class="rounded">
            </div>
        </section>
    `
        }
    )
    // return the HTML 
    return businessListHTML
}
