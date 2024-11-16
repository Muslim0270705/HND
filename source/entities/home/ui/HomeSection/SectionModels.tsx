import HomeSwiper from "./HomeSwiper";


export function SectionModels() {
    return (
        <section className="bg-[#F6F3F2]">
            <div className="container m-[0_auto] flex max-w-[1300px] pt-[76px] items-center">
                <div className=" w-full">
                    <div>
                        <h2 className="p-[65px] text-[55px] font-semibold tracking-wide text-black text-center transform scale-y-[1.1] pt-[110px]">
                            Модели
                        </h2>
                    </div>
                    <div className="w-full h-[260px] ">
                        <HomeSwiper />
                    </div>
                    <div className=" flex items-center justify-center py-5">
                        <button className="w-[189px] h-[49px] bg-[#002C5F] text-white mb-[70px]">
                            Больше моделей
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}