// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}
//console.log(returnRandBase());

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
//console.log(mockUpStrand());

let sampleDNA = mockUpStrand();

// Factory function
const pAequorFactory = (uniqNum, arr) => {
  return {
    specimenNum: uniqNum,
    dna: arr,
    mutate() {
      let randIndex = Math.floor(Math.random() * this.dna.length);
      let currentBase = this.dna[randIndex];
      let newBase = returnRandBase();
      if (currentBase === newBase) {
        returnRandBase();
      }
      else {
        currentBase = newBase;
      }
      return this.dna
    },
    compareDNA(newDNA) {
      let orgDNA = this.dna;
      console.log(newDNA)
      console.log(this.dna)
      let match = 0;
      for (let i = 0; i < orgDNA.length; i++) {
        if (newDNA[i] === orgDNA[i]) {
          match += 1
        }
      }
      const similar = Math.floor((match / orgDNA.length) * 100);
      console.log(`Specimen #1 and Specimen #2 have ${similar}% DNA in common`)
    },
    willLikelySurvive() {
      let dna = this.dna;
      var survive;
      const goodBases = dna.filter(base => base === 'C' || base === 'G');
      let survRate = (goodBases.length / dna.length * 100);
      //        console.log(`This DNA contains ${survRate.toFixed()}% of C or G bases. Likely to survive?`)
      survRate >= 60 ? survive = true : survive = false;
      //        console.log(survive);
      return survive;
    }
  } //ends object
} // end pAequorFactory

const survivors = [];
let count = 1;
while (survivors.length < 30) {
  let strand = pAequorFactory(count, mockUpStrand());
  if (strand.willLikelySurvive()) {
    survivors.push(strand)
  }
  count++;
}
console.log(survivors)

// To test various parts of the project
//const test = pAequorFactory(1, mockUpStrand());
//console.log(test.specimenNum)
//console.log(test.dna)
//test.mutate()
//console.log(test.specimenNum)
//console.log(test.dna)
//let sample = mockUpStrand();
//test.compareDNA(sampleDNA)
//test.willLikelySurvive()
