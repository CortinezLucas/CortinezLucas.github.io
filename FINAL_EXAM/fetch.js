/*

document.addEventListener('DOMContentLoaded', function(){
    loadXMLDoc();
});


function loadXMLDoc(){
    const url="URL "

fetch(url)
    .then(response => response.text())
    .then(xmlData => {
        const parser= new DOMParser();
        const xmlDoc = parser.parseFromString.parseFromString(xmlData, 'application/xml');
        objectData = xmlDoc.gelElementsByTagName("spatialUnit");
        
        for (i = 0; i < objectData.length; i++)
         //Create table
         let newRow=document.createElement("tr");
         newRow.id="row"+i;
         document.getElementById("myTableBody").appendChild(newRow);
         let newCol01= document.createElement("td");
         newCol01.innerHTML= objectData[i].children[0].children[0].innerHTML
         document.getElementById("row"+i).appendChild(newCol01)
         let newCol02= document.createElement("td");
         newCol02.innerHTML=objectData[i].children[4].children[1].children[1].innerHTML
         document.getElementById("row"+i).appendChild(newCol02);
 
     };
    })
}

//catch.error
*/