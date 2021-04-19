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
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: mockUpStrand(),
    mutate() {
      let randomIndex = Math.floor(Math.random() * this.dna.length);
      let randomBase = this.dna[randomIndex];
      let dnaBases = ['A', 'T', 'C', 'G'];
      dnaBases.splice(dnaBases.indexOf(randomBase),1);
      this.dna[randomIndex] = dnaBases[Math.floor(Math.random() * 3)] 
      return this.dna
  },
  compareDNA() {
    let equalBase = [];
    compareDna1 = specimenOne.dna;
    compareDna2 = specimenTwo.dna;
    for (let i = 0; i < compareDna1.length; i++) {
      if (compareDna1[i] === compareDna2[i]) {
        equalBase.push(compareDna1[i])
      }
    }
    let equalDNA = ((equalBase.length/compareDna1.length)*100).toFixed(2);

    return ('specimen #1 and specimen #2 have '+ equalDNA + '% in common.');
  },
  willLikelySurvive() {
    let willSurviveArray = [];
    for ( let i = 0; i < this.dna.length; i++) {
      if (this.dna[i] === 'C' || this.dna[i] === 'G') {
        willSurviveArray.push(this.dna[i]);
      }
    }
    let willSurvive = ((willSurviveArray.length/this.dna.length)*100).toFixed(2);
    if (willSurvive >= 60.00) {
      return true;
    } else {
      return false;
    }
  },
  survivalInstances() {
    let i = 0;
    let survivors = [];
    while (survivors.length < 30) {
      testStrands = pAequorFactory(i, mockUpStrand())
      if (testStrands.willLikelySurvive()) {
        survivors.push(testStrands.dna)
      }
    }
    return survivors;
  }
}
};
const specimenOne = pAequorFactory(1, mockUpStrand())
// const specimenTwo = pAequorFactory(2, mockUpStrand())
// console.log(specimenOne);
// console.log(specimenTwo);
console.log(specimenOne.survivalInstances());








