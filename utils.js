function listOfObjectsToHTML(listObjects,containingDivId,outerElement,innerElement){
  
    let containingDiv = document.getElementById(containingDivId);
  
    //https://www.geeksforgeeks.org/how-to-creating-html-list-from-javascript-array/
    listObjects.forEach((outerItem)=>{
      //create the outer element 
      let outer = document.createElement(outerElement);
      let keys = Object.keys(outerItem);
  
      //set the element class to the current object key so that I can
      //style all object properties the same (ie. all names or all titles, etc.)
      keys.forEach((key)=>{
        let inner = document.createElement(innerElement);
        inner.innerText = outerItem[key];
        inner.className = key.toString();
        outer.appendChild(inner);
      });
      containingDiv.appendChild(outer);
    });
  }

  //------------------------------------------------------------------
// <div id="containerID">
//    <div>
//      <p></p>
//      <p></p>
//      <p></p> <---- index one of these to change to <a>
//    </div>
// </div>
//------------------------------------------------------------------
function changeElementToLink(containerID,childIndex){
  let outerElements = document.getElementById(containerID).children;

 for(let i=0; i<outerElements.length; i++){
    let link = document.createElement("a");
    let toReplace = outerElements[i].children[childIndex];
    let href = toReplace.innerHTML;
    link.innerHTML = href;
    link.setAttribute('href', href);
    link.setAttribute('target', "_blank");
    link.classList = toReplace.classList;
    toReplace.innerHTML = "";
    outerElements[i].appendChild(link);
  }
}