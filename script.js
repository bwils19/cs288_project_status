const weeklyEntries = [
    {
        week: 1,
        date: "2024-09-10",
        content: [
            { type: "text", value: "Built this cool website." },
            // { type: "image", value: "path/to/image.jpg", alt: "Website screenshot" },
            // { type: "code", value: "console.log('Hello, World!');" }
        ]
    },
       {
        week: 2,
        date: "2024-09-16",
        content: [
            { type: "text", value: `<p>Had first group meeting on the 16th. Submitted the link to this website. Also submitted my mission statement:</p>
                <p><strong>My mission with this project is to develop an intuitive, Natural Language Query System for Data Visualization.</strong></p>
                <p>This system will empower users of all technical levels to explore and visualize complex data through simple, conversational interactions.</p>
                <h4>Key Points:</h4>
                <ul>
                    <li>Seamlessly translate natural language queries into data manipulations</li>
                    <li>Generate tailored visualizations</li>
                    <li>Democratize data analysis</li>
                    <li>Unlock the potential of data-driven decision making for organizations of all sizes</li>
                </ul>
                <p> Also created my project spec outline which can be found here:
                <strong><a href="https://bwils19.github.io/cs288_project_status/CSCapstoneProjectReqSpec.pdf" target="_blank">View Project Requirement Specification Slides (PDF)</a></strong></p>` },
            // { type: "image", value: "path/to/nlp-diagram.jpg", alt: "NLP component diagram" },
            // { type: "code", value: "function processQuery(text) {\n  // NLP processing code\n}" }
        ]
    },
        {
        week: 3,
        date: "2024-09-23",
        content: [
            { type: "text", value: `<p>Up to this point have submitted the Project Proposal and the Requirements Specification on Canvas.</p>
                <p>This week I started planning what I am going to do for the Competency Demo. I think that breaking this down into 3 simpler
                chunks and executing those and using more basic ideas for the demo is the way to go. For example I will build a smaller training set of 
                data that can be used.</p>
                <h4>3 Step Outline for Competency Demo</h4>
                <ul>
                    <li>Basic NLP Parsing User Query. Example: User Query: "Show me sales trends for the past 6 months", Parsed Components:
                    {metric: "sales", time_frame: "6 months" (get max date from data and timedelta back 6 months), visualization_type: "trend"</li>
                    <li> Generate appropriate visualization based on predefined visualization types and generate plots.</li>
                    <li>Display with explanatory text. For example: 
                    <ul>
                    <li>This plot shows a general [upward, downward, stable] trend in sales over the past 6 months.</li>
                    <li>Highest Sales: The highest sales were recorded in the [Month], reaching $[x], which is [y]% higher than the 6-month average</li>
                    <li>Lowest sales</li>
                    <li>MoM growth</li>
                    </ul>
                </ul>
                <p>This system will empower users of all technical levels to explore and visualize complex data through simple, conversational interactions.</p>`},
            ]
        },
        {
        week: 5,
        date: "2024-10-14",
        content: [
            { type: "text", value: `<p>I honestly got caught up in this competency demo trying to make a skeleton of the project and kind of realized yesterday that i 
            essentially just need to showcase some technologies that I have used in the past that are going to help with this prokect in particular. So I put together some slides 
            and a demo of things I have built recently that I will leverage for this project. 
            <strong><a href="https://bwils19.github.io/cs288_project_status/Competency_Demo.pdf" target="_blank">Competency Demo Slides (PDF)</a>
            <strong><a href="https://bwils19.github.io/cs288_project_status/Competency_Demo_video.mp4" target="_blank">Video Demonstration of Previous Project</a></strong>
            </p>`
            }
        ]
    },
           {
        week: 6,
        date: "2024-10-21",
        content: [
            { type: "text", value: `<p>This week I will be focusing on the design document. I am giving a lot of thought to this as it is giving me a chance to really decide what to ficus on.
            I am planning on putting together a design file that I will draw in Figma that is a rough sketch of what I think the user interface should look like. From here, I will develop a detailed explanation 
            of what the code (backend and frontend) will entail. I will outline the organization and files needed for the frontend as well as processing files for the backend. I am also thinking about implementing 
            saving the data in an AWS S3 location, so the integration of that would be a large part of this as well. 
            </p>`}
        ]
    },
               {
        week: 7,
        date: "2024-10-28",
        content: [
            { type: "text", value: `<p>I completed the design document this past week and it is available here. 
            <strong><a href="design_doc.html" target="_blank">View Design Document</a></strong>.
            Looking forward to getting some feedback on the project tomorrow!
            </p>`}
        ]
    },
                   {
        week: 8,
        date: "2024-11-04",
        content: [
            { type: "text", value: `<p>I made some additions to the design document this week which included adding sections for the "Reach Goals" and a "Project Timeline" section.
            So it turns out that I really didn't need to have this design document done until the end of the semester so I am ahead a bit, which I misunderstood. This is why the project timeline
            benchmark dates start in the new year. Just so I can stay on track with the class. I resubmitted the design document through canvas. I doubt we'll meet with the group on Monday
            since it is Veteran's Day. One thing that I think I'll do is create a Figma design file that would show what the frontend would look like during the rest of this semester. 
            </p>`}
        ]
    },
                       {
        week: 9,
        date: "2024-11-11",
        content: [
            { type: "text", value: `<p>Had a group meeting this week. Updated the design document to include the project timeline and reach goals last week. Will hope for feedback on that and plan to 
            start developing the first goal in the timeline which is the structure of the flask app and user authentication. I think that I'll work on a Figma design of the front end UI as well this week. 
            </p>`}
        ]
    },
                       {
        week: 10,
        date: "2024-11-18",
        content: [
            { type: "text", value: `<p>Ok. So some deep thinking and reflection went on this week. I tried to zoom out and think about the project in the sense of how it would be useful, who it 
            would be useful for, what problem it would solve, and how it could add value to, well, anything. My initial thinking as that it could be used for sales teams to track their benchmarks and how 
            far away individuals and teams were from monthly quotas. I almost fell asleep writing that sentence. Sure, there's a need for that. I've spoken with several friends who work for CRM companies and
            who also work at my company that work with sales teams daily and I have gotten feedback that a product like that with specific functionalities would be useful. But what it comes down to really is 
            (for this project and for now anyway) is whether I find this an interesting thing to persue. Am I excited to tell people that I'm working on something like this? Not really. Not embarassed, but 
            definitely not pumped about it. 
            </p>
            <p>
            So I did something a little different that I think is going to pivot this project in a more interesting direction. I'm not totally taking a left turn, I'm viewing this as focusing the project 
            on something where there is a greater need and higher potential for impact. 
            </p>
            <p>
            The first thing I did was look at the websites G2, Capterra and Trustradius. These websites allow people to view comparisons between software products and read reviews on them before deciding to
            purchase a piece of software for their intended purpose. I looked for software where a lot of the options all had relatively poor reviews. One of the things I came across was financial risk 
            assessment software. There are some very robust options out there (Bloomberg Terminal, BlackRock Aladdin, MSCI RiskMetrics) that have a ton of functionality, even aside from risk assessment, 
            that had a lot of the same sentiment I've seen with programs like Tableau, Power BI and Looker, there's just an overwhelming amount of options that aren't intuitively laid out. The price point
            is way to high for mid-market and smaller shops and often times it's way more than they need. So I reached out to a good friend of mine that works as an Asset Manager at Wellington. He 
            introduced me to a friend and former colleague of his who used to work for Cambridge Associates, then Wellington and is currently a consultant for pensions and endowments (Tufts is a client 
            of his). He generously gave me a few hours of his time on Wednesday this week as I explained my intention and things that I thought I would do with some software like this. I described how 
            I thought I could offer a user-friendly, tiered functionality with associated price points, automated portfolio assessment, automated stress testing as well as no-code report generation and 
            saving for risk managers, asset managers and allocators. The feedback I recieved was really positive and encouraging. He echoed a lot of what I had already read on the review sites that 
            Wellington and Cambridge Associates had tried to use Risk Metrics (and Tufts I think too) and had given up. They had needed technically savvy people to use the software and build pipelines
            and when those people left the companies, the company was unable to maintain them. Then they tried to build solutions in house, and those failed as well. 
            </p>
            <p>
            All that being said, I have at least some confirmation from a person who has spent a couple decades in the investment financial world that there is a need for a solution like this. He has even 
            offered to work with in the capacity of me sending him early versions of the software and he will give me feedback. He said he would even be willing to meet every couple of weeks to discuss 
            the project and to make sure I am still heading down a path of a solution. He is also going to reach out to contacts in his circle and gather more information for me. All in all, it was really
            great speaking with him, and I thought that this would be a good path to take the project. Still a user-friendly, data-visualtion, data-analysis web-based platform that will offer ML 
            predicitive analytics to some capacity. 
            </p>
            <p>
            I am excited for the direction that this project is going in now and I feel that this more focused approach gives me a clearer vision, roadmap and path to a product that is solving a need in a
            (hopefully) very lucrative field. 
            </p>
            `}
        ]
    },
                   {
        week: 11,
        date: "2024-11-25",
        content: [
            { type: "text", value: `<p>I have completed redoing the entire design document for my project to focus on the financial risk platfform. This was pretty time consuming but overall
            I feel a lot better now that I have a focsused approach to the project now. This week I will begin getting a head start on some of this. I think the first thing that I'll do is get a 
            login and signup page sorted out and get the user info saved to a sqlite database. Also, we'll see what Marty says in the group meeting this afternoon. 
            </p>`}
        ]
    },
                       {
        week: 12,
        date: "2025-01-13",
        content: [
            { type: "text", value: `<p>Back from break. I did a lot on this project over the holidays. I spoke to several people in the industry including a consultant that used to work for Wellington, a
            Portfolio Manager for Wellington and the Global Head of Pricing at Apollo Management. They all gave me some hope and inspiration that I am going down a promising (albeit rather competitve) path. 
            That's ok, I can do it. They all gave me what I was looking for though, which was a bit of a direction in what the needs are and what the weaknesses in the current products are. The Apollo
            Management guy has all the resources in the world so they use Aladdin which I am not trying to compete with. I am trying to compete with the SMB to mid-market guys. The firms that don't have 
            the money to spend on a huge robust piece of software like that. So to focus on core capabilities and keep it accessible is my goal for now here. </p>
            <p> What I have accomplished to date is getting the login page, signup page and portfolio overview pages in a good spot. Someone can create a user, log in with their credentials, and then 
            be taken to their own portfolio overview page. From there they can upload either a csv, xlsx, or txt file of securities they own and the amount they own and the purchase date. If they provide
            more like sector, current price or notes, those will get added as well, but not required because i can grab sector from an API. </p>
            <p> One of the cooler things I think that I implemented was the that when a user uploads a file, there is a preview of the file that show all the valid and invalid values. I also implemented a 
            smart algorithm that will infer column names if the column names aren't obvious. It uses ratios of the values of the columns to infer the type of column. For example ticker values are usually
            only 1 - 4 characters long and uppercase. So it will get the ratio of values in the column that meet the uppercase ratio, string_length ratio and unique values ratio (they should all be 
            unique). Then set scoring logic for the ratio like this: <br>
            'ticker': (features['uppercase_ratio'] > 0.8 and <br>
                   features['string_length_mean'] < 5 and <br>
                   features['unique_ratio'] > 0.1), <br>
                   It also sees it if can covert values to valid dates, gets the number of values in the columns that are numeric etc. I also have a list of hard-coded possibilities
            that the column names could be, so it checks those as well. For example, the ticker column could be named ['ticker', 'symbol', 'stock', 'security', 'ticker symbol', 'stock symbol', 'securities', 
            'asset']. If a user uploads a file with invalid values for a required column they will see that in a data preview display and can edit in place.</p>
            <p> The user can also build a portfolio manually by searching for securities manually and adding them to a portfolio. A user can also edit a portfolio that they have already created by adding, 
            deleting or adjusting the value owned. All of the portfolios the user creates are displayed on their own cards on the portfolio overview page. There is a button on each portfolio card where the 
            user can build the risk analysis dashboard which is the implementation that is coming next. 
            </p>`}
        ]
    },
    {
        week: 13,
        date: "2024-01-20",
        content: [
            { type: "text", value: `<p>This was a heavy week of testing and debugging. I kept going to implement the risk calculations, but as I was going to use a portfolio uploaded by the user I kept 
            noticing weird things happening in the functionality affecting the usability of the program. One example, when the user uploads a portfolio and saves it, a popup appeared on top of another 
            popup. The top one said "Portfolio name is required" while the popup that it was covering was the popup for the user to name the portfolio. So there was some debugging there to work out 
            when the the warning popup should be shown and its prescidence. Another thing I noticed was that sometimes when I stopped the flask app (ctrl-c the python script) and then restarted, I could 
            reload the portfolio overview page, which is a pretty big security deal. I fixed that, but what I inadvertantly did was fix it so that anytime I refresh the page it would take me to the login
            which isn't what I wanted either. I got that worked out and incorporated a 2 hour timeout period where the app will make you re-login after 2 hours.</p>
            <p> One thing I need to fix still is a check when a user edits an uploaded file that has an invalid ticker and a valid name, if they edit the ticker there needs to be a validation check and 
            an alert to the user to make sure the ticker and company name match up. Because right now there is no check so there can be a record with a ticker and company name that are completely different
            securities. The data gets pulled from the API using the ticker, but there needs to be a check there.</p>
            <p>Another thing I need to fix is the Total gains calculations. I kind of have a placeholder in there for now and it needs to be calculated based on the purchase date I think and that logic is 
            not yet implemented. </p>
            <p> I also started this bug log that also is going to act as my list of features and imporvements because I keep thinking of things and don't want to forget them.
            <strong><a href="https://docs.google.com/document/d/1kSbRt9e3G2ua4pRtm7li71dE-jKrKJA1ragt_KJhukI/edit?tab=t.0" target="_blank">Error and Feature Additions Log</a>
            </p>`}
        ]
    },
];

function createEntryElement(entry) {
    const entryDiv = document.createElement('div');
    entryDiv.className = 'entry';
    
    const header = document.createElement('h3');
    header.textContent = `Week ${entry.week} - ${entry.date}`;
    entryDiv.appendChild(header);

    entry.content.forEach(item => {
        switch(item.type) {
            case "text":
                const div = document.createElement('div');
                div.innerHTML = item.value; // Use innerHTML to parse HTML
                entryDiv.appendChild(div);
                break;
            case "image":
                const img = document.createElement('img');
                img.src = item.value;
                img.alt = item.alt || '';
                entryDiv.appendChild(img);
                break;
            case "code":
                const pre = document.createElement('pre');
                const code = document.createElement('code');
                code.textContent = item.value;
                pre.appendChild(code);
                entryDiv.appendChild(pre);
                break;
        }
    });

    return entryDiv;
}

function displayEntries() {
    const entryList = document.getElementById('entry-list');
    entryList.innerHTML = ''; // Clear existing entries
    weeklyEntries.slice().reverse().forEach(entry => {
        entryList.appendChild(createEntryElement(entry));
    });
}

window.onload = displayEntries;

function addEntry(week, date, content) {
    weeklyEntries.push({ week, date, content });
    displayEntries(); // Refresh the display
}

function extractDocuments() {
    const documentList = document.getElementById('document-list');
    documentList.innerHTML = ''; // Clear any existing list

    const links = weeklyEntries
        .flatMap(entry => entry.content) // Flatten all content arrays
        .filter(item => item.type === "text" && item.value.includes('<a href="')) // Filter for links
        .flatMap(item => {
            // Extract links from HTML strings
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = item.value;
            return Array.from(tempDiv.querySelectorAll('a')).map(link => ({
                text: link.textContent,
                href: link.href
            }));
        });

    links.forEach(link => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.target = '_blank';
        anchor.textContent = link.text;
        listItem.appendChild(anchor);
        documentList.appendChild(listItem);
    });
}

window.onload = function () {
    displayEntries();
    extractDocuments(); // Populate the document list on load
};
