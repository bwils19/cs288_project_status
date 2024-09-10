// data structure for weekly entries
const weeklyEntries = [
    {
        week: 1,
        date: "2024-09-10",
        content: "Started research on project topic. Identified key areas to focus on."
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
