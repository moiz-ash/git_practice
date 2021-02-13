// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//console.log(returnRandBase())
//console.log(mockUpStrand())
//console.log(pAequorFactory())


const pAequorFactory = (number, dnaArray) => ({
  specimenNum: number,
  dna: dnaArray,
  mutate(){
    let index = Math.floor(Math.random() * this.dna.length);
    let randomBase = returnRandBase();
    while(this.dna[index] === randomBase){
      randomBase = returnRandBase();
    }
    this.dna[index] = randomBase;
  },
  compareDNA(pAequor){
    let matchCount = 0;
    for(let i = 0; i < this.dna.length; i++){
      if(this.dna[i] === pAequor.dna[i]){
        matchCount++;
      }
    }
    let percentage = Math.floor(matchCount / this.dna.length * 100);
    console.log(`The two specimens have ${matchCount} elements in common, resulting in a ${percentage}% match.`);
  },
  willLikelySurvive(){
    let survivalStat = 0;
    for(let i = 0; i < this.dna.length; i++){
      if(this.dna[i] === 'C' || this.dna[i] === 'G'){
        survivalStat++;
      }
    }
    let survivalPercentage = Math.floor(survivalStat / this.dna.length * 100);
    //console.log(`Specimen has ${survivalStat} C or G DNA bases resulting in a ${survivalPercentage}% total.`);
    if(survivalPercentage >= 60){
      //console.log('Specimen will likely survive.');
      return true;
    } else {
      //console.log(`He's done mate.`);
      return false;
    }
  }
});

//Global array for specimens
let specimens = [];

const createSpecimens = amount => {
  let specimenNumber = 0;
  while(specimens.length < amount){
    let potentialSpecimen = pAequorFactory(specimenNumber, mockUpStrand());
    if(potentialSpecimen.willLikelySurvive()){
      specimens.push(potentialSpecimen);
      specimenNumber++;
    }
  }
  return specimens;
}

createSpecimens(30);
console.log(specimens[20].specimenNum, specimens[20].dna);
console.log(specimens[20].willLikelySurvive());
