import { BusinessListing, BusinessListingNY, MfgBusinessListing } from "./BusinessList.js"

const businessesContainer = document.querySelector("#businessesContainer")
            const businessAppHTML = `
            ${BusinessListing()}            

            ${BusinessListingNY()}

            ${MfgBusinessListing()}
            `
businessesContainer.innerHTML = businessAppHTML

