document.addEventListener('DOMContentLoaded', function(){
    loadXMLDoc();
});

function loadXMLDoc(){
    const url = 'xmlSample.xml';
    fetch(url)
    .then(response => response.text())
    .then(xmlData => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'application/xml');
        console.log(xmlDoc)
        parseData(xmlDoc) // Error here when calling below function with errors being unable to filter by n=0.
       // parseData.innerHTML = '';
    })

   
    .catch(error => {
        console.error('Error loading XML File:', error); // Error found reading Inner HTML from Inspect, attempting troubleshoot
    })
};

function parseData(xmlDoc){
    objectData= xmlDoc.getElementsByTagName("spatialUnit"); // I understand my error here is that that there are spatial units as children underneath Spatial UNit n=0 that confuse my code.
    //searchResultsDiv.innerHTML = '';

    for (i=0; i < objectData.length; i++){
        
        let newRow=document.createElement("tr");
        newRow.id = "row" +i;
        document.getElementById("myTableBody").appendChild(newRow);
        let newCol01 = document.createElement("td");
        newCol01.innerHTML= objectData[i].children[0].innerHTML //not working here and I understand by looking at the xmlSample.xml it's bc its encountering multiple values with different n values, specifically undefined values when 'reading innerHTML'. Due to multiple non n=0 spatial units 
        document.getElementById("row"+i).appendChild(newCol01)
        let newCol02= document.createElement("td");
        newCol02.innerHTML=objectData[i].children[4].children[1].children[1].innerHTML
        document.getElementById("row"+i).appendChild(newCol02);
    };
    // searchResultsDiv.appendChild(resultList);
}

if(document.getElementsByTagName("spatialUnit") != null){
    var idPost=document.getElementsByTagName("status").innerHTML;
}


