import { DownloadIcon } from '@/source/shared/ui'
import Link from 'next/link'
import React from 'react'

export function SectionNav() {
  return (
    <section className="nav">
        <div className="m-[0_auto] flex max-w-[1800px] items-center border-b border-solid border-[#b2b2b2]">
            <div className="container">
                <div className='pt-[30px] pb-[30px] flex justify-between items-center'>
                    <div className="nav_left flex flex-wrap space-y-15 list-none gap-y-10 gap-x-10">
                        <Link href="/SectionPower" className="text-lg font-normal text-[22px]">Особенности</Link>
                        <Link href="/Section" className="text-lg font-normal text-[22px]">Производительность</Link>
                        <Link href="" className="text-lg font-normal text-[22px]">Безопасность</Link>
                        <Link href="" className="text-lg font-normal text-[22px]">Комфорт</Link>
                        <Link href="" className="text-lg font-normal text-[22px]">Характеристики</Link>
                        <Link href="" className="text-lg font-normal text-[22px]">Цены</Link>
                    </div>
                    <div className="flex items-center gap-x-[8px]">
                        <DownloadIcon />
                        <p className="text-lg font-normal text-[22px]">
                            e-брошюра
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionNav