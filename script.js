//extract dara from activites section
//if no activities added yet, show button to import an activity in
let entries = JSON.parse(localStorage.getItem('entries')) || [];
const currentPage = document.body.getAttribute("data-page");

function addEntry(){
    console.log(document.getElementById("nameInput").value);
    entries.unshift([new Date().toDateString(), document.getElementById("nameInput").value]);
    localStorage.setItem('entries', JSON.stringify(entries));
    console.log(entries[0][1]);
    displayMessage();
}
function displayMessage() {
    const name = document.getElementById("nameInput").value;
    document.getElementById("output").textContent = "Saved";
    document.getElementById('nameInput').value = '';
}

// function emotions(){
//     if(document.getElementById="angry"){
//         <p><ol>
//             <li> <a href="meditate.html"> </a> </li>
//             <li> Take A Walk</li>
//             <li> yap <a> href= "journal.html</a> </li>
//                 </ol>       </p>
//     }
//     if(document.getElementById="angry"){
//         <p><ol>
//             <li> <a href="meditate.html"> </a> </li>
//             <li> Take A Walk</li>
//             <li> yap <a> href= "journal.ht</a> </li>
//                 </ol>       </p>
//     }

// }
// function displayEntries() {
//     const entriesList = document.getElementById('entries-list');
//     entriesList.innerHTML = ''; 

//     entries.forEach(entry => {
//         const entryElement = document.createElement('div');
//         entryElement.textContent = entry;
//         entriesList.appendChild(entryElement);
//     });
// }

if(currentPage==="allentries"){
    console.log(entries[0][1]);
    console.log(entries.length);
    var p = document.createElement('p');
    p.setAttribute('style', 'white-space: pre;');
    for(var i=0;i<entries.length;i++){
        p.textContent += "\r\n"+entries[i][0]+": "+entries[i][1]+"\r\n";
        console.log("\n"+entries[i][0]+": "+entries[i][1]);

    }
    document.getElementById('entries-list').appendChild(p);
}

// document.querySelectorAll('.dropdown-item').forEach(item => {
//     item.addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent the default link behavior
        
//         // Get the text content of the clicked item
//         const selectedValue = this.textContent; 
        
//         // Display the selected value in the designated div
//         document.getElementById('displayText').textContent = `You selected: ${selectedValue}`;
//     });
// });