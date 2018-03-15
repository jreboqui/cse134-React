import delay from './delay';

class Position {
    constructor(id, title, location, description,reqs,status,applicantsId){
      this.id = id;
      this.title = title;
      this. location = location;
      this.description = description;
      this.reqs = reqs;
      this.status = status;
      this.applicantsId = applicantsId;
    }
}
  
class mail {
    constructor(senderId, senderType, message){
        this.senderId = senderId;
        this.senderType = senderType,
        this.message = message;
    }
}

const amazonPos1 = new Position(1, "Software Development Engineer Intern", "Santa Clara, CA",
"• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [3, 5, 6, 7, 10]);

const amazonPos2 = new Position(2, "Hardware Development Intern", "Seattle, WA",
"• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [1, 2, 5, 6, 7]);

const amazonPos3 = new Position(3, "Data Science Intern", "Santa Clara, CA",
"• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [4, 10, 11, 12, 15]);

const amazonPos4 = new Position(4,"Visual Design Intern", "Santa Clara, CA",
"• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [2, 3, 5]);

const amazonPos5 = new Position(5,"Machine Learning Researcher Intern", "Seattle, WA",
"• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [1,2,3]);

const amazonPos6 = new Position(6,"UI/UX Design Intern", "Seattle, WA",
"• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [4, 10, 11]);

const amazonPos7 = new Position(7,"MBA Intern (Graduate)", "Seattle, WA",
"• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [4, 5, 6]);

const salesforcePos1 = new Position(1,"Software Infrastructure Intern", "San Francisco, CA",
"• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [1, 2, 4]);

const salesforcePos2 = new Position(2,"Software Engineering Intern", "San Francisco, CA",
"• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [1, 2, 3, 5]);

const salesforcePos3 = new Position(3,"Data Science Intern", "San Francisco, CA",
"• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [1, 3, 4]);

const salesforcePos4 = new Position(4,"Security Operations Intern", "San Francisco, CA",
"• • **Please only apply to the one job posting location that most interests you as you consider Amazon's Software Development Engineer job opportunities through University Recruiting.***\n\nWe are hiring innovative Software Development Engineer interns into our technical development teams throughout the US. We are headquartered in Seattle, WA, but also have exciting opportunities at our offices across the US and Canada!\n\nIn the US: Austin, TX; Phoenix, AZ; Boston, MA; New York, NY; Los Angeles, CA; Irvine, CA; San Luis Obispo, CA; Santa Cruz, CA; Bay Area, CA; Madison, WI; Herndon, VA, Portland, OR, Denver, CO and growing!\n\nIn Canada, we are growing rapidly in: Vancouver, BC, Toronto, ON, and Ottawa, ON.\n\nOur interns and co-ops write real software and partner with a select group of experienced software development engineers, who both help and challenge them as they work on projects that matter to our customers. You’ll be given the opportunity to have direct impact on the evolution of Amazon's technologies and lead mission critical projects early in your career. Your design, code and raw smarts will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, optimization, scalability, and security-- just to name a few.\n\nMany of our technologies overlap—you’d be hard pressed to find a team that isn’t using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for the customer. Below is a small snapshot of potential work content provided to give you some of big ideas you could work with at Amazon.", "BASIC QUALIFICATIONS \n\n· Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science, Computer Engineering, or related technical discipline with a focus on software development\n· Currently enrolled in university with graduation dates starting December 2018 and onward\n· Able to work full-time (40 hrs/week) for 12 consecutive weeks between May 2018 through September 2018\n\nPREFERRED QUALIFICATIONS\n\n· Graduation date between December 2018 and September 2019 \n· Strong understanding of object-oriented design, data structures, and algorithms\n· Proficient in one or more object-orientated programming languages (Java, C, C++, etc)\n· Ability to effectively articulate technical challenges and solutions\n· Adept at handling ambiguous or undefined challenges through strong problem solving abilities and effective communication\n\nAmazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation", [1, 3, 4]);

const mailToAmazon1 = new mail(1,"s","Hello, Thank you for the intern offer for the position SWE at Amazon Seattle branch. I would gladly accept the offer...");

const mailToAmazon2 = new mail(2,"s","Hi, I was supposed to hear back from Amazon last week, but I havent heard back until today regarding position Data Science Intern. I was wondering...");

const mailToSalesforce1 = new mail(1,"s","Hello, thank you very much for the invitiation to the interview for the SWE position. I would be availaible...");

  
const companies = [
    { 
    id: 1,
    name: "Amazon, Inc.",
    username: "recruiting@amazon.com",
    password: "amazon12345",  
    bannerURL: "./amazon-banner.png",
    hq: "Seattle, WA",
    size: "75000",
    Industry: ["E-Commerce", "Web-Services"],
    website: "amazon.com",
    title: "We pioneer", 
    description: "We're a company of pioneers. It's our job to make bold bets, and we get our energy from inventing on behalf of customers. Success is measured against the possible, not the probable. For today’s pioneers, that’s exactly why there’s no place on Earth they’d rather build than Amazon.",
    photosURL: ["./amazon1.jpg", "./amazon2.jpg", "./amazon3.jpg", "./amazon4.jpg", "./amazon5.jpg", "./amazon6.jpg"],
    logoURL: "./amazon.jpg",
    openPositions: [amazonPos1,amazonPos2,amazonPos3,amazonPos4,amazonPos5,amazonPos6,amazonPos7],
    mailing: [mailToAmazon1,mailToAmazon2]
    },

    { 
    id: 2,
    name: "Salesforce.com",
    username: "recruiting@salesforce.com",
    password: "salesforce12345",  
    bannerURL: "./salesforce-banner.PNG",
    hq: "San Francisco, WA",
    size: "125000",
    Industry: ["Cloud Computing"],
    website: "salesforce.com",
    title: "We pioneer", 
    description: "We're a company of pioneers. It's our job to make bold bets, and we get our energy from inventing on behalf of customers. Success is measured against the possible, not the probable. For today’s pioneers, that’s exactly why there’s no place on Earth they’d rather build than Amazon.",
    photosURL: ["./salesforce1.jpg", "./salesforce2.jpg", "./salesforce3.jpg", "./salesforce4.jpg", "./salesforcen5.jpg", "./salesforce6.jpg"],
    logoURL: "./salesforce_icon.png",
    openPositions: [salesforcePos1,salesforcePos2,salesforcePos3,salesforcePos4],
    mailing: [mailToSalesforce1]
    },  
    { 
    id: 3,
    name: "Mircrosoft",
    username: "recruiting@microsoft.com",
    password: "microsoft12345",  
    bannerURL: "./microsoft-banner.png",
    hq: "Seattle, WA",
    size: "75000",
    Industry: ["E-Commerce", "Web-Services"],
    website: "microsoft.com",
    title: "We pioneer", 
    description: "We're a company of pioneers. It's our job to make bold bets, and we get our energy from inventing on behalf of customers. Success is measured against the possible, not the probable. For today’s pioneers, that’s exactly why there’s no place on Earth they’d rather build than Amazon.",
    photosURL: ["./microsoft1.jpg", "./microsoft2.jpg", "./microsoft3.jpg", "./microsoft4.jpg", "./microsoft5.jpeg"],
    logoURL: "./microsoft_logo.jpg",
    openPositions: [amazonPos1,amazonPos2,amazonPos4,amazonPos6,amazonPos7],
    mailing: [mailToAmazon1,mailToSalesforce1]
    }
]


class companyAPI {
    static getAllCompanies(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(Object.assign([], companies));
            }, delay);
        });
    }

    static getCurrCompany(companyId){
        const indexOfCurrCompany = companies.findIndex(company => {
            return company.id === companyId;
        });
        return companies[indexOfCurrCompany];
    }
}

export default companyAPI;