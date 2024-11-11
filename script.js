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
