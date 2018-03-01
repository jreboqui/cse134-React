
const CompanyAPI = {
    companies: [
      { number: 1, name: "Amazon",  logoURL: "./amazon.jpg", openPositions: 2},
      { number: 2, name: "Microsoft",  logoURL: "./microsoft_icon.jpg", openPositions: 2},
      { number: 3, name: "Salesforce", logoURL: "./salesforce_icon.png", openPositions: 2}
    ],
    all: function() { return this.companies},
    get: function(id) {
      const isCompany = p => p.number === id
      return this.companies.find(isCompany)
    }
  }
  
  export default CompanyAPI  