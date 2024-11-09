import React from 'react'

export function SectionTables() {
  return (
    <section>
        <div className="container flex flex-col items-center justify-center m-[0_auto] text-center">
            <div>
                <h1 className="text-[50px] font-normal mb-0 tracking-wider text-black pt-[60px] pb-[20px]">Задние фары</h1>
                <table className="w-[1121px] border border-solid boreder-[#E4DCD3]">
                    <thead>
                        <tr className="bg-[#002C5F] text-white">
                            <th colSpan="2" className="p-4 text-center text-lg">Экстерьер</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border">
                            <td className="p-4 bg-[#F6F3F2] text-left  w-[360px]">Общая длина (мм)</td>
                            <td className="p-4 text-left">4710</td>
                        </tr>
                        <tr className="border">
                            <td className="p-4 text-left bg-[#F6F3F2]">Общая ширина (мм)</td>
                            <td className="p-4 text-left">1825</td>
                        </tr>
                        <tr className="border">
                            <td className="p-4 text-left bg-[#F6F3F2]">Общая высота (мм)</td>
                            <td className="p-4 text-left">1430</td>
                        </tr>
                        <tr className="border">
                            <td className="p-4 text-left bg-[#F6F3F2]">Колесная база (мм)</td>
                            <td className="p-4 text-left">2720</td>
                        </tr>
                        <tr className="border">
                            <td className="p-4 text-left bg-[#F6F3F2]">Колея передняя</td>
                            <td className="p-4 text-left">1593 / 1585 / 1579</td>
                        </tr>
                        <tr>
                            <td className="p-4 text-left bg-[#F6F3F2]">Колея задняя</td>
                            <td className="p-4 text-left">1593 / 1585 / 1579</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h1 className="text-[50px] font-normal mb-0 tracking-wider text-black pt-[60px] pb-[20px]">Колеса</h1>
                <table className="w-[1121px] border border-solid boreder-[#E4DCD3]">
                    <thead>
                        <tr className="bg-[#002C5F] text-white">
                            <th colSpan="2" className="p-4 text-center text-lg">Экстерьер</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border">
                            <td className="p-4 bg-[#F6F3F2] text-left  w-[360px]">Общая длина (мм)</td>
                            <td className="p-4 text-left">15" / 16" / 17"</td>
                        </tr>
                        <tr className="border">
                            <td className="p-4 text-left bg-[#F6F3F2]">Общая ширина (мм)</td>
                            <td className="p-4 text-left">15" / 16" / 17"</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="pb-[100px]">
                <h1 className="text-[50px] font-normal mb-0 tracking-wider text-black pt-[60px] pb-[20px]">Производительность</h1>
                <table className="w-[1121px] border border-solid boreder-[#E4DCD3]">
                    <thead>
                        <tr className="bg-[#002C5F] text-white">
                            <th colSpan="2" className="p-4 text-center text-lg">Экстерьер</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border">
                            <td className="p-4 bg-[#F6F3F2] text-left  w-[360px]">Тип двигателя</td>
                            <td className="p-4 text-left">1.6 MPI</td>
                        </tr>
                        <tr className="border">
                            <td className="p-4 text-left bg-[#F6F3F2]">Рабочий объем (см3)</td>
                            <td className="p-4 text-left">1591</td>
                        </tr>
                        <tr className="border">
                            <td className="p-4 text-left bg-[#F6F3F2]">Макс мощность (л.с./об.мин)</td>
                            <td className="p-4 text-left">127.5/6300</td>
                        </tr>
                        <tr className="border">
                            <td className="p-4 text-left bg-[#F6F3F2]">Макс крутящий момент об.мин</td>
                            <td className="p-4 text-left">4850</td>
                        </tr>
                        <tr className="border">
                            <td className="p-4 text-left bg-[#F6F3F2]">Количество цилиндров</td>
                            <td className="p-4 text-left">4</td>
                        </tr>
                        <tr>
                            <td className="p-4 text-left bg-[#F6F3F2]">Клапанов на цилиндр</td>
                            <td className="p-4 text-left">4</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr className="bg-[#002C5F] text-white">
                            <th colSpan="2" className="p-4 text-center text-lg">Трансмиссия</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border">
                            <td className="p-4 bg-[#F6F3F2] text-left  w-[360px]">Тип трансмиссии</td>
                            <td className="p-4 text-left">6AT</td>
                        </tr>
                        <tr className="border">
                            <td className="p-4 text-left bg-[#F6F3F2]">Конфигурация привода</td>
                            <td className="p-4 text-left">FWD</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr className="bg-[#002C5F] text-white">
                            <th colSpan="2" className="p-4 text-center text-lg">Расход топлива</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border">
                            <td className="p-4 bg-[#F6F3F2] text-left  w-[360px]">Вид топлива</td>
                            <td className="p-4 text-left">Бензин</td>
                        </tr>
                        <tr className="border">
                            <td className="p-4 text-left bg-[#F6F3F2]">Объем топливного бака</td>
                            <td className="p-4 text-left">47 л</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  )
}

export default SectionTables