// Code your orbitCircumference function here:

function orbitCircumference () {
  let circumference = 2 * Math.PI * 2000;
  return Math.round(circumference);
}
console.log(orbitCircumference());


// Code your missionDuration function here:
function missionDuration(numOfOrbitsComplete, orbitRadius = 2000, orbitalSpeed = 28000) {
  let time = (orbitCircumference()) / orbitalSpeed;
 // for(let i = 0; i < numOfOrbitsComplete; i++){
    time = time * numOfOrbitsComplete;
  //}
  return Math.round(time*100)/100; // can also use Number(time.toFixed(2))
}
console.log(`The mission will travel ${orbitCircumference()}km around the planet, and it will take ${missionDuration(5)} hours to complete`);


// Copy/paste your selectRandomEntry function here:
function selectRandomEntry() {
let id = idNumbers[Math.floor(Math.random()*idNumbers.length)];
let crew1 = undefined;
let i = 0;
while (crew1 == undefined){
  
    if (id === crew[i].astronautID) {
      crew1 = crew[i];
    }
    i++;
}
   return crew1;
}
let idNumbers = [414, 599, 796];

// Code your oxygenExpended function here:
function oxygenExpended(crewMember){
  let hours = missionDuration(3);
  let o2Left = Math.round(crewMember.o2Used(hours)*1000)/1000;
  return `${crewMember.name} will perform the spacewalk, which will last ${hours} hours and require ${o2Left} kg of oxygen.`;
}

//Instead of randomly selecting a crew member for the spacewalk, have your program select the animal with the smallest oxygen consumption.
function lowestOxygen(crewMember){
let hours = missionDuration(3);
let smallest = crewMember[0].o2Used(hours);
let lowestO2Crew = undefined;
for(let i = 0; i < crewMember.length; i++){
  if (crewMember[i].o2Used(hours) < smallest){
    smallest = crewMember[i].o2Used(hours);
    lowestO2Crew = crewMember[i];
  }
 
}
 return `${lowestO2Crew.name} will perform the spacewalk, as they have the least amount of oxygen consumption.`;
}


// Candidate data & crew array.
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};
let crew = [candidateA,candidateC,candidateE];
let crew2 = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF,];

console.log(oxygenExpended(selectRandomEntry()));
console.log(lowestOxygen(crew2));