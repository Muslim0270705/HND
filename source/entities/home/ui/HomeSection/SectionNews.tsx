export function SectionNews() {
    return (
        <section className="">
            <div className="container w-full bg-[#FFFFFF]">
                <div className="mx-[130px] ">
                    <h2 className="p-[65px] text-[55px] font-semibold tracking-wide text-black text-center transform scale-y-[1.1] pt-[110px]">
                        Новости
                    </h2> 
                    <ul className="flex justify-center flex-wrap list-none gap-y-[2px] gap-x-10">
                        <li>
                            <div className="max-w-[325px] p-3 mb-5">
                                <div className="pb-5">
                                    <img className="w-[315px] h-[205px] object-cover" src="/main/new-santa-fe_news.png" alt="//" />
                                </div>
                                <p className="font-normal mb-2 text-[12px] text-[#858585]">18 сентября, 2024</p>
                                <h3 className="text-[16px] font-normal leading-[24px] text-left text-black mb-2">
                                    Подведены итоги 2023 года: Hyundai – лидер авторынка Казахстана
                                </h3>
                            </div>
                        </li>
                        <li>
                            <div className="max-w-[325px] p-3 mb-2">
                                <div className="pb-5">
                                    <img className="w-[310px] h-[205px] object-cover" src="/main/tucson_news.jpeg" alt="//" />
                                </div>
                                <p className="font-normal mb-2 text-[12px] text-[#858585]">16 сентября, 2024</p>
                                <h3 className="text-[16px] font-normal leading-[24px] text-left text-black mb-2">
                                    «АзиаМоторс» объявляет о старте продаж нового Hyundai Tucson                                </h3>
                            </div>
                        </li>
                        <li>
                            <div className="max-w-[325px] p-3 mb-2">
                                <div className="pb-5">
                                    <img className="w-[310px] h-[205px] object-cover" src="/main/custin_news.png" alt="//" />
                                </div>
                                <p className="font-normal mb-2 text-[12px] text-[#858585]">12 сентября, 2024</p>
                                <h3 className="text-[16px] font-normal leading-[24px] text-left text-black mb-2">
                                    Новый минивэн Hyundai Custin – впервые в Кыргызстане!                                </h3>
                            </div>
                        </li>
                        <li>
                            <div className="max-w-[325px] p-3 mb-2">
                                <div className="pb-5">
                                    <img className="w-[310px] h-[205px] object-cover" src="/main/tucson-prem_news.jpeg" alt="//" />
                                </div>
                                <p className="font-normal mb-2 text-[12px] text-[#858585]">9 сентября, 2024</p>
                                <h3 className="text-[16px] font-normal leading-[24px] text-left text-black mb-2">
                                    Hyundai Premium Bishkek: автомобильный сервис премиальног...                                </h3>
                            </div>
                        </li>
                        <li>
                            <div className="max-w-[325px] p-3 mb-2">
                                <div className="pb-5 ">
                                    <img className="w-[310px] h-[205px] object-cover" src="/main/santa-fe-upd_news.jpeg" alt="//" />
                                </div>
                                <p className="font-normal mb-2 text-[12px] text-[#858585]">9 сентября, 2024</p>
                                <h3 className="text-[16px] font-normal leading-[24px] text-left text-black mb-2">
                                    Обновленный Santa Fe удостоен премии iF Design Award
                                </h3>
                            </div>
                        </li>
                        <li>
                            <div className="max-w-[325px] p-3 mb-2">
                                <div className="pb-5">
                                    <img className="w-[310px] h-[205px] object-cover" src="/main/palisade_news.jpeg" alt="//" />
                                </div>
                                <p className="font-normal mb-2 text-[12px] text-[#858585]">5 сентября, 2024</p>
                                <h3 className="text-[16px] font-normal leading-[24px] text-left text-black mb-2">
                                    Выгодное приобретение: PALISADE под 0%                                </h3>
                            </div>
                        </li>
                    </ul>
                </div>  
                <div className="flex items-center justify-center py-5">
                    <button className="w-[189px] h-[49px] bg-[#002C5F] text-white flex items-center justify-center  mb-[70px]">
                        Больше новостей
                    </button>
                </div>
            </div>
        </section>
    )
}
