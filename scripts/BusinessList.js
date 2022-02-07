import { getBusinesses, businessesInNewYork } from "./database.js"
import { mfgBusinessesInNewYork, getPurchasingAgents} from "./database.js"


////////////////////////////////////////////////////////////////////////
/////////////////// A L L   C O M P A N I E S //////////////////////////
////////////////////////////////////////////////////////////////////////


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
                // added <br> to get the city, state, zip to be shown 
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




////////////////////////////////////////////////////////////////////////
/////////////// N E W  Y O R K   C O M P A N I E S //////////////
////////////////////////////////////////////////////////////////////////

/*
    use the .filter() method to list only businesses
    located in NY. 
    this filter was applied in the database module

    display them in an element in the HTML with a 
    class of "businessList--newYork"
*/

// create and export a FN that will generate the HTML
// for use by index.html of ONLY New York businesses
export const BusinessListingNY = () => {

    // invoke the FN to get the businesses
    const businessArrayNY = businessesInNewYork()

        // create the variable that will hold the HTML for
        // list list of businesses
    let businessListNYHTML = "<h1>New York Businesses</h1>"


            // iterate through the businesses using .forEach
            // grabbing and displaying: name, street address, city, state, zip
                // added <br> to get the city, state, zip to be shown 
                //on the line below the street address

    businessArrayNY.forEach((businessObjectNY) => {

        businessListNYHTML += `
        <article class="businessList--newYork">
            <h2 class="businesses__companyName">${businessObjectNY.companyName}</h2>
            <div class="businesses__nameAndAddress"> ${businessObjectNY.addressFullStreet}<br> 
                                                     ${businessObjectNY.addressCity}, 
                                                     ${businessObjectNY.addressStateCode}
                                                     ${businessObjectNY.addressZipCode}
                    <hr class="rounded">
            </div>
        </article>
    `
        }
    )
    // return the HTML 
    return businessListNYHTML
}

////////////////////////////////////////////////////////////////////////
/////////// M A N U F A C T U R I N G   C O M P A N I E S //////////////
////////////////////////////////////////////////////////////////////////

// create and export a FN that will generate the HTML
// for use by index.html of ONLY "Manufacturing" industry businesses
export const MfgBusinessListing = () => {

    // invoke the FN to get the businesses
    const mfgBusinessArray = mfgBusinessesInNewYork()

        // create the variable that will hold the HTML for
        // list list of businesses
    let mfgBusinessListHTML = "<h1>Manufacturing Businesses</h1>"


            // iterate through the businesses using .forEach
            // grabbing and displaying: name, street address, city, state, zip
                // added <br> to get the city, state, zip to be shown 
                //on the line below the street address

    mfgBusinessArray.forEach((mfgBusinessObject) => {

        mfgBusinessListHTML += `
        <article class="businessList--manufacturing">
            <h2 class="businesses__companyName">${mfgBusinessObject.companyName}</h2>
            <div class="businesses__nameAndAddress"> ${mfgBusinessObject.addressFullStreet}<br> 
                                                     ${mfgBusinessObject.addressCity}, 
                                                     ${mfgBusinessObject.addressStateCode}
                                                     ${mfgBusinessObject.addressZipCode}
                    <hr class="rounded">
            </div>
        </article>
    `
        }
    )
    // return the HTML 
    return mfgBusinessListHTML
}



////////////////////////////////////////////////////////////////////////
/////////////////// P U R C H A S I N G   A G E N T S  /////////////////
////////////////////////////////////////////////////////////////////////


// create and export a FN that will generate the HTML
// for use by index.html of purchasing agents
export const purchasingAgentsListing = () => {

    // invoke the FN to get the agents
    const purchasingAgentsArray = getPurchasingAgents()

        // create the variable that will hold the HTML for
        // list list of agents
    let purchasingAgentsListHTML = "<h1>Purchasing Agents</h1>"

            // iterate through the agents using .forEach
            // grabbing and displaying: name, company, and phone
                // used <br> to get the three items to be shown 
                // on separate lines

     purchasingAgentsArray.forEach((purchasingAgentsObject) => {

        purchasingAgentsListHTML += `
        <article class="agents">
            <h2 class="agent__fullName">${purchasingAgentsObject.purchasingAgent.nameFirst} ${purchasingAgentsObject.purchasingAgent.nameLast}</h2>
            <div class="agent__contact"> 
                <h3 class="agent_company">${purchasingAgentsObject.companyName}<br> </h3>
                <h4 class="agent_phone">${purchasingAgentsObject.phoneWork}</h4>
                                                    
                    <hr class="rounded">
            </div>
        </article>
    `
        }
    )
    // return the HTML 
    return purchasingAgentsListHTML
}