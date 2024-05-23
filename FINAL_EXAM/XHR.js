document.addEventListener('DOMContentLoaded', function(){
    loadXMLDoc();
});

function loadXMLDoc(){
    const url = "https://ochre.lib.uchicago.edu/ochre?uuid=a6e6049c-66dc-43ee-968d-e74c4909f496";

// Construct a new XHR 
    let xmlhttp= new XMLHttpRequest();

// Define what the XHR will do 
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){

            // Invoke our function and pass
            let xmlDoc = this.responseXML;
            printData(xmlDoc);
        }
    };
// Open the XHR exchange
    xmlhttp.open("GET", url);

    //Send the XHR exchange 
    xmlhttp.send();
};

function printData(xmlDoc){
    // Collect all spatial units in an HTML collection 
    let objectData = xmlDoc.getElementsByTagName("spatialUnit");

    for (let i =0; i < objectData.length; i++){
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
}