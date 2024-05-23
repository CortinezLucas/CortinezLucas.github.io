document.addEventListener('DOMContentLoaded', function () {
    loadXMLDoc();
});

function loadXMLDoc() {
    const url = 'https://ochre.lib.uchicago.edu/ochre?uuid=a6e6049c-66dc-43ee-968d-e74c4909f496';
    fetch(url)
        .then(response => response.text())
        .then(xmlData => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlData, 'application/xml');
            parseData(xmlDoc);
        })
        .catch(error => {
            console.error('Error loading XML File:', error);
        });
}

function parseData(xmlDoc) {
    const objectData = xmlDoc.getElementsByTagName("spatialUnit");
    const myList = document.getElementById("myList");

    for (let i = 0; i < objectData.length; i++) {
        // Create table row
        const newRow = document.createElement("tr");
        newRow.id = "row" + i;
        document.getElementById("myTableBody").appendChild(newRow);

        // Create table cells and populate with data
        const newCol01 = document.createElement("td");
        newCol01.innerHTML = objectData[i].children[0].children[0].innerHTML;
        document.getElementById("row" + i).appendChild(newCol01);

        // Create list item for newCol01 data
        const listItem = document.createElement("li");
        listItem.textContent = objectData[i].children[0].children[0].innerHTML;
        myList.appendChild(listItem);

        const newCol02 = document.createElement("td");
        newCol02.innerHTML = objectData[i].children[4].children[0].children[1].innerHTML;
        document.getElementById("row" + i).appendChild(newCol02);

        const newCol03 = document.createElement("td");
        newCol03.innerHTML = objectData[i].children[4].children[1].children[1].innerHTML;
        document.getElementById("row" + i).appendChild(newCol03);
    }
}