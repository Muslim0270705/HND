import React from 'react'

export function SectionCarColor() {
  return (
    <section>
        <div className="container flex flex-col items-center m-[0_auto]">
            <img src="http://localhost:3000/images/auth/carcolor.png" alt="elentra" className="pt-[100px]" />
            <div className="w-[1121px] flex m-[0_auto] justify-between items-center">
                <div>
                    <p className="font-bold">Цвет кузова </p>
                    <p>Черный / Abyss Black Pearl</p>
                </div>
                <div className="flex flex-wrap space-y-15 list-none gap-y-10 gap-x-10">
                  <div className="w-[60px] h-[60px] bg-[#3D3D3D]"></div>
                  <div className="w-[60px] h-[60px] bg-[#777777]"></div>
                  <div className="w-[60px] h-[60px] bg-[#D9D9D9]"></div>
                  <div className="w-[60px] h-[60px] bg-[#ABABAB]"></div>
                  <div className="w-[60px] h-[60px] bg-[#B22424]"></div>
                  <div className="w-[60px] h-[60px] bg-[#2D51AC]"></div>
                  <div className="w-[60px] h-[60px] bg-[#D9D9D9]"></div>
                </div> 
            </div>
        </div>
    </section>
  )
}

export default SectionCarColor