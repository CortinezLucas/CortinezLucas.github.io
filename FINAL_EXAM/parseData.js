document.addEventListener('DOMContentLoaded', function(){
    loadXMLDoc();
});

function loadXMLDoc(){
    const url = 'https://ochre.lib.uchicago.edu/ochre?uuid=a6e6049c-66dc-43ee-968d-e74c4909f496';
    //const url = 'sample-1.xml';
    fetch(url)
    .then(response => response.text())
    .then(xmlData => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'application/xml');
        console.log(xmlDoc)
        parseData(xmlDoc)
    })
    .catch(error => {
        console.error('Error loading XML File:', error);
    })
};
function parseData(xmlDoc){
    objectData= xmlDoc.getElementsByTagName("spatialUnit");

   
    for (i=0; i < objectData.length; i++){

        let newRow=document.createElement("tr");
        newRow.id = "row" +i;
        document.getElementById("myTableBody").appendChild(newRow);
        let newCol01 = document.createElement("td");
        newCol01.innerHTML= objectData[i].children[0].children[0].innerHTML
        document.getElementById("row"+i).appendChild(newCol01)
        let newCol02= document.createElement("td");
        newCol02.innerHTML=objectData[i].children[4].children[0].children[1].innerHTML
        document.getElementById("row"+i).appendChild(newCol02);
        let newCol03= document.createElement("td");
        newCol03.innerHTML=objectData[i].children[4].children[1].children[1].innerHTML;
        document.getElementById("row"+i).appendChild(newCol03);
        
       
    };
}