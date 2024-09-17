// data structure for weekly entries
const weeklyEntries = [
    {week:2,
     date: "2024-09-16",
     content: "Had first group meeting on the 16th. Submitted the link to this website. Also submitted my mission statement:
         "My mission with this project is to develop an intuitive, AI-driven Natural Language Query System for Data Visualization. "
         "This system will empower users of all technical levels to explore and visualize complex data through simple, conversational interactions. "
    "By seamlessly translating natural language queries into powerful data manipulations and tailored visualizations, the aim is to democratize data "
    "analysis and unlock the potential of data-driven decision making for organizations of all sizes."
    },
    {
        week: 1,
        date: "2024-09-10",
        content: "Built this cool website."
    },
    // this is where I need to add more entries as the project goes on
];

function createEntryElement(entry) {
    const entryDiv = document.createElement('div');
    entryDiv.className = 'entry';
    entryDiv.innerHTML = `
        <h3>Week ${entry.week} - ${entry.date}</h3>
        <p>${entry.content}</p>
    `;
    return entryDiv;
}

function displayEntries() {
    const entryList = document.getElementById('entry-list');
    weeklyEntries.forEach(entry => {
        entryList.appendChild(createEntryElement(entry));
    });
}

window.onload = displayEntries;

function addEntry(week, date, content) {
    weeklyEntries.push({ week, date, content });
    const entryList = document.getElementById('entry-list');
    entryList.appendChild(createEntryElement(weeklyEntries[weeklyEntries.length - 1]));
}
