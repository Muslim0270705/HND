import React from 'react'
import SectionElentra from '../CarSections/SectionElentra'
import SectionPower from '../CarSections/SectionPower'
import SectionCarColor from '../CarSections/SectionCarColor'
import SectionLattice from '../CarSections/SectionLattice'
import SectionHeadlights from '../CarSections/SectionHeadlights'
import SectionNav from '../CarSections/SectionNav'
import SectionTables from '../CarSections/SectionTables'

export function CarView() {
  return (
    <>
    <SectionElentra />
    <SectionNav />
    <SectionPower />
    <SectionCarColor />
    <SectionLattice />
    <SectionHeadlights />
    <SectionTables />
    </>
  )
}

export default CarView