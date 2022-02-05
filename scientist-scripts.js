const eventsInfo = [
    { ename: "Easter Egg Hunt", elocation: "1234 Hoppy Lane", edate: "April 13, 2022"},
    { ename: "School's Out Party", elocation: "Amber's House", edate: "June 30, 2022"},
    { ename: "Houseboat Launch", elocation: "Sicamous, BC", edate: "August 4,2022"}
  ];

  const articlesInfo = [
    { atitle: "Women in Computer Science: Getting Involved in STEM", edata: "The Current State of Women in Computer Science. The Bureau of Labor Statistics projects computer science research jobs will grow nineteen percent by 2026. Yet, women only earn 18% of computer science bachelor's degrees in the United States. Despite the high job demand, computer science remains a male-dominated field in the United States. In response, many top colleges are making efforts to recruit female computer science students, making it an ideal time for women to pursue computer science degrees.", elink: "https://www.computerscience.org/resources/women-in-computer-science/"},
    { atitle: "Women in Computing", edata: "Women in computing were among the first programmers in the early 20th century, and contributed substantially to the industry. As technology and practices altered, the role of women as programmers has changed, and the recorded history of the field has downplayed their achievements. Since the 18th century, women have developed scientific computations, including Nicole-Reine Lepaute's prediction of Halley's Comet, and Maria Mitchell's computation of the motion of Venus. The first algorithm intended to be executed by a computer was designed by Ada Lovelace who was a pioneer in the field. Grace Hopper was the first person to design a compiler for a programming language. Throughout the 19th and early 20th century, and up to World War II, programming was predominantly done by women; significant examples include the Harvard Computers, codebreaking at Bletchley Park and engineering at NASA.", elink: "https://en.wikipedia.org/wiki/Women_in_computing"},
    { atitle: "A History of Public Involvement and Advocacy", edata: "SCWIST members have served on a variety of committees or presented papers, including the Canadian Advisory Council on the Status of Women, the BC Partners in Science Awareness Committee, the Premier’s Science Advisory Committee, BC Science Council (now Innovate BC), the Women in Science, Technology, Trades and Engineering Steering Committee, and the Canadian Coalition for Women in Engineering, Science, Trades and Technology (CCWESTT). Early organizational collaborations included CAWIS, Canadian Association of Girls in Science (CAGIS), Women in Trades and Technology (WITT), Gender and Science and Technology (GASAT) BC Science Teachers Association (BCSTA).  For current involvement in advocacy, please read more here.", elink: "https://scwist.ca/about/our-history/"}
  ];

const eventBackgrounds = [
  "background-color: #F76E11;", "background-color: #313552;", "background-color: #1A1A40;","background-color: #570530;",
  "background-color: #1572A1;", "background-color: #FC4F4F;", "background-color: #004A2F;", "background-color: #393E46;",
  "background-color: #C95501;", "background-color: #1D1B38;", "background-color: #BD2000;","background-color: #A62671;",
  "background-color: #152744;", "background-color: #C04D00;", "background-color: #CF1B1B;", "background-color: #406343;"
];

const eventNameFonts = [
  "font-family:'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-variant: small-caps;",
  "font-family:'Courier New', Courier, monospace; font-variant: none;",
  "font-family: Arial, Helvetica, sans-serif; font-variant: small-caps;",
  "font-family:'Times New Roman', Times, serif; font-variant: none;",
  "font-family:'Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; font-variant: none;"
];

//Populate the events using DOM, make separate lists for them
listOfObjectsToHTML(eventsInfo,'eventsDiv','ul','li');

//Populate the articals using DOM, paragraphs for inner elements
listOfObjectsToHTML(articlesInfo,'articlesDiv','div','p');

//Change the third <p> tag in the newly populated articles section to <a>
changeElementToLink('articlesDiv', '2');


function styleMe(){
  let style = document.createElement('style');

  //style the Event Backgrounds randomly
  style.innerHTML += addRandomStyle("#eventsDiv ul{ ", eventBackgrounds);

  //style Event Names font randomly
  style.innerHTML += addRandomStyle(".ename{ ", eventNameFonts);

  document.head.appendChild(style);
}

// Function to generate random number 
function randomNumber(min, max) { 
  return Math.floor(Math.random() * (max - min) + min);
} 
function addRandomStyle(property, styles){
  return  property + styles[randomNumber(0,styles.length-1)]+ "} ";
}


function addFaveScientist(){
  let favesList = document.getElementById('faves-list');
  let faveScientist = document.getElementById('fave_txt');
  let addScientist = document.createElement('li');
  
  if(faveScientist.value.length > 0){
    addScientist.textContent = faveScientist.value;
    favesList.appendChild(addScientist);
    faveScientist.setAttribute('placeholder', 'Want to add another favorite?  Type name here...');
    faveScientist.value = "";
  }
}
