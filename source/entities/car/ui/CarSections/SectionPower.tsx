import React from 'react'

export function SectionPower() {
  return (
    <section>
        <div className="container flex flex-col items-center justify-center m-[0_auto] text-center">
            <h1 className="text-[50px] font-normal mb-0 tracking-wider text-black pt-[60px]">Сила наследия и передовых технологий</h1>
            <p className="text-[16px] mb-0 text-black pt-[30px]">Новая ELANTRA – смелая и утонченная, с еще более стильными изменениями.</p>
            <p className="text-[16px] mb-0 text-black pt-[30px] pb-[40px]">Утонченная спортивность, изысканный дизайн интерьера, передовые функции  безопасности и удобства создают новый стиль <br /> жизни для тех, кто бросает  вызов будущему на собственных условиях.</p>
            <img src="http://localhost:3000/images/auth/powerh1.jpeg" alt="elentra" className="" />
            <div className="max-w-[1121px] flex m-[0_auto]">
                <img src="http://localhost:3000/images/auth/powerfirst.jpeg" alt="elentra" className="max-w-[560px]"/>
                <div className="text-start pl-[40px] pt-[40px]">
                  <h2 className="text-[30px] font-normal mb-0 tracking-wider text-black pb-[40px]">Изменения к лучшему</h2>
                  <p className="text-[16px] mb-0 text-black pt-[30px]">Новая передняя решетка подчеркивает спортивные <br /> черты новой ELANTRA. Новые линии и фары гармонично создают облик спортивной машины.</p>
                </div>
            </div>
            <div className="max-w-[1121px] flex m-[0_auto]">
                <div className="text-start pr-[40px] pt-[40px]">
                  <h2 className="text-[30px] font-normal mb-0 tracking-wider text-black pb-[40px]">Атмосферная подсветка </h2>
                  <p className="text-[16px] mb-0 text-black pt-[30px]">Атмосферная подсветка дает Вам возможность выбрать освещение под Ваше настроение</p>
                </div>
                <img src="http://localhost:3000/images/auth/powersecond.jpeg" alt="elentra" className="max-w-[560px]"/>
            </div>
        </div>
    </section>
  )
}

export default SectionPower