export function CarsWidget() {
    return (
        <section className="">
            <div className="container w-full ">
                <h1 className="p-[65px] text-[55px] font-semibold tracking-wide text-black text-center transform scale-y-[1.1]">
                    Все автомобили
                </h1>
                <div className="mx-[130px]">
                    <div className="mb-[100px]">
                        <h6 className=" text-[40px] font-semibold mb-12 tracking-tight text-black text-left">
                            Легковые
                        </h6>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            <div className="flex flex-col items-center">
                                <div className="relative w-full h-[154px] mb-8 flex justify-center items-center">
                                    <img className="object-cover object-center" src="/main/new-sonata.png" alt="Sonata" />
                                </div>
                                <p className="text-[23px] font-semibold text-black">i30</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="relative w-full h-[154px] mb-8 flex justify-center items-center">
                                    <img className="object-cover object-center" src="/main/new-elantra.png" alt="Sonata" />
                                </div>
                                <p className="text-[20px] font-semibold text-black">ELANTRA</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="relative w-full h-[154px] mb-8 flex justify-center items-center">
                                    <img className="object-cover object-center" src="/main/new-sonata.png" alt="Sonata" />
                                </div>
                                <p className="text-[20px] font-semibold text-black">SONATA</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-[100px]">
                        <h6 className="text-[40px] font-semibold mb-12 tracking-tight text-black text-left">
                            Кроссоверы
                        </h6>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ">
                            <div className="flex flex-col items-center">
                                <div className="relative w-full h-[154px] mb-8 flex justify-center items-center">
                                    <img className="object-cover object-center" src="/main/bayon.png" alt="Sonata" />
                                </div>
                                <p className="text-[20px] font-semibold text-black">BAYON</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="relative w-full h-[154px] mb-8 flex justify-center items-center">
                                    <img className="object-cover object-center" src="/main/tucson-bl.png" alt="Sonata" />
                                </div>
                                <p className="text-[20px] font-semibold text-black">TUCSON</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="relative w-full h-[154px] mb-8 flex justify-center items-center">
                                    <img className="object-cover object-center" src="/main/new-tucson.png" alt="Sonata" />
                                </div>
                                <p className="text-[20px] font-semibold text-black">НОВЫЙ TUCSON</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="relative w-full h-[154px] mb-8 flex justify-center items-center">
                                    <img className="object-cover object-center" src="/main/palisade.png" alt="Sonata" />
                                </div>
                                <p className="text-[20px] font-semibold text-black">SANTA FE</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="relative w-full h-[154px] mb-8 flex justify-center items-center">
                                    <img className="object-cover object-center" src="/main/new-santa-fe.png" alt="Sonata" />
                                </div>
                                <p className="text-[23px] font-semibold text-black">i30</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6 className="text-[40px] font-semibold mb-12 tracking-tight text-black text-left">
                            Минивэны
                        </h6>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            <div className="flex flex-col items-center">
                                <div className="relative w-full h-[154px] mb-8 flex justify-center items-center">
                                    <img className="object-cover object-center" src="/main/custin.png" alt="Sonata" />
                                </div>
                                <p className="text-[20px] font-semibold text-black">CUSTIN</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="relative w-full h-[154px] mb-8 flex justify-center items-center">
                                    <img className="object-cover object-center" src="/main/staria.png" alt="Sonata" />
                                </div>
                                <p className="text-[20px] font-semibold text-black">STARIA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
