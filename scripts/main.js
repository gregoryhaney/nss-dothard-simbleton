import { BusinessListing } from "./BusinessList.js"




const businessesContainer = document.querySelector("#businessesContainer")
            const businessAppHTML = `
            ${BusinessListing()}
            `
businessesContainer.innerHTML = businessAppHTML

