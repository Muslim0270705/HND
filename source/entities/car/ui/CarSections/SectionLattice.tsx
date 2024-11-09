import React from 'react'

export function SectionLattice() {
  return (
    <section>
        <div className="container flex flex-col items-center justify-center m-[0_auto] text-center">
            <h1 className="text-[50px] font-normal mb-0 tracking-wider text-black pt-[100px]">Совершенно новая решетка</h1>
            <p className="text-[16px] mb-0 pt-[30px] pb-[40px]">Стереоскопический дизайн Parametric Jewel подчеркивает глубину передней  решетки, делая ее <br /> напоминающей драгоценные камни ромбовидной огранки,  смелые и удлиненные передние <br /> фары вместе придают новой ELANTRA  спортивный вид.</p>
            <img src="http://localhost:3000/images/auth/lattice.jpeg" alt="elentra" className="" />
        </div>
    </section>
  )
}

export default SectionLattice