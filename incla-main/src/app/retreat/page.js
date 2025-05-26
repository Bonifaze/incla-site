export default  function retreatServices () {
    return (
        <div>
            <div className="bg-retreat h-[170px] md:h-[300px] lg:h-[400px] max-h-[800px] bg-[#66165a]/55 bg-blend-overlay w-full bg-top bg-no-repeat bg-cover text-lg md:text-2xl lg:text-4xl font-bold text-white 2xl:text-6xl flex items-center justify-center">
                <h1>Retreat Services</h1>  
            </div> 
            <div className="w-full h-fit p-5 md:p-10 bg-[#F2F2F2] flex justify-center">
                <div
                    style={{
                        boxShadow: "0px 4px 4px 0px #00000040",
                    }} 
                    className="w-full h-[10%] bg-incla-purple rounded-lg md:p-5 lg:p-14 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto text-white"
                >
                    <div className="flex flex-col justify-center p-5">
                        <h1 className="mb-4 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center">Retreat Services</h1>
                        <p className="md:leading-loose md:text-lg text-sm lg:text-lg 2xl:text-2xl">The Institute Offers retreat services to Religious Congregations, Groups and Individuals. The Centre also provides retreat preachers for those who require one. The retreats could be guided or preached as one requires. There are also facilities for religious conferences and gathering with an auditorium with a capacity to sit 200.<br />
                        For more inquiries please call 09077214109 or 08064758374.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}