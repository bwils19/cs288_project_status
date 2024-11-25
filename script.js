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
    }
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
