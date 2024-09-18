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
        date: "2024-09-17",
        content: [
            { type: "text", value: <p>Had first group meeting on the 16th. Submitted the link to this website. Also submitted my mission statement:</p>
                <p><strong>My mission with this project is to develop an intuitive, AI-driven Natural Language Query System for Data Visualization.</strong></p>
                <p>This system will empower users of all technical levels to explore and visualize complex data through simple, conversational interactions.</p>
                <h4>Key Points:</h4>
                <ul>
                    <li>Seamlessly translate natural language queries into data manipulations</li>
                    <li>Generate tailored visualizations</li>
                    <li>Democratize data analysis</li>
                    <li>Unlock the potential of data-driven decision making for organizations of all sizes</li>
                </ul>` },
            // { type: "image", value: "path/to/nlp-diagram.jpg", alt: "NLP component diagram" },
            // { type: "code", value: "function processQuery(text) {\n  // NLP processing code\n}" }
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
