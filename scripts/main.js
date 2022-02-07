import { BusinessListing, BusinessListingNY } from "./BusinessList.js"
import { MfgBusinessListing, purchasingAgentsListing } from "./BusinessList.js"

const businessesContainer = document.querySelector("#businessesContainer")
            const businessAppHTML = `
            ${BusinessListing()}            

            ${BusinessListingNY()}

            ${MfgBusinessListing()}

            ${purchasingAgentsListing()}
            `
businessesContainer.innerHTML = businessAppHTML

