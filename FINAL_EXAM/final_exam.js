const itemList = document.getElementById('itemList');
const labels = xml.querySelectorAll('ochre > items > spatialUnit > identification > label');

labels.forEach(label => {
    const li = document.createElement('li');
    li.textContent = label.textContent;
    itemList.appendChild(li);
});

const itemTable = document.querySelector('#itemTable tbody');
const items = xml.querySelectorAll('ochre > items > spatialUnit');

items.forEach(item => {
    const label = item.querySelector('identification > label').textContent;
    const property1 = item.querySelector('properties > property > value').textContent;
    const property2 = item.querySelector('properties > property:nth-child(2) > value').textContent;
    const property3 = item.querySelector('properties > property:nth-child(3) > value').textContent;

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${label}</td>
        <td>${property1}</td>
        <td>${property2}</td>
        <td>${property3}</td>
    `;

    itemTable.appendChild(row);
});