const eventsInfo = [
    { ename: "Easter Egg Hunt", elocation: "1234 Hoppy Lane", edate: "04/13/2022"},
    { ename: "School's Out Party", elocation: "Amber's House", edate: "06/30/2022"},
    { ename: "Houseboat Launch", elocation: "Sicamous, BC", edate: "08/4/2022"}
  ];

function populateEvents(events) {
 
    let eventsDiv = document.getElementById("eventsDiv");

    //https://www.geeksforgeeks.org/how-to-creating-html-list-from-javascript-array/
    events.forEach((event)=>{
        //create a separate list for each event
        let list = document.createElement("ul");
        let keys = Object.keys(event);

        //create list items for each event attribute (like name, location, date)
        keys.forEach((key)=>{
            let li = document.createElement("li");
            li.innerText = event[key];
            //set the element class to the current object key
            //so that I can style all names the same, all dates the same, etc
            li.className = key.toString();
            list.appendChild(li);
        });
        eventsDiv.appendChild(list);
      });
}

populateEvents(eventsInfo);
