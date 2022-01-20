# Mysterious Organism Project 🧬
### Codecademy Project
*Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.*

## JavaScript Usage:
- Loops
- Arrays
- Objects
- Iterators

## Details:
- pAequorFactory() - factory function that returns an object containing **specimenNum** and **dna**
- .mutate() - method that randomly selects a base in the object's **dna** and returns a new, different base
- .compareDNA() - compares the **original DNA** to the **mutated DNA** and computes how many bases (%) are identical in the same locations
- .willLikelySurvive() - returns true if the DNA contains at least 60% of **C** or **G** bases
