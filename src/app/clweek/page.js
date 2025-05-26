export default function clweek () {
    return (
        <div>
            <div className="bg-hallway h-[170px] md:h-[300px] lg:h-[400px] max-h-[800px] bg-[#66165a]/55 bg-blend-overlay w-full bg-center bg-no-repeat bg-cover text-lg md:text-2xl lg:text-4xl font-bold text-white 2xl:text-6xl flex items-center justify-center">
                <h1>Consecrated Life Week</h1>  
            </div> 
            <div className="w-full h-fit p-5 md:p-10 bg-incla-grey-200 flex justify-center">
                <div
                    style={{
                        boxShadow: "0px 4px 4px 0px #00000040",
                    }} 
                    className="w-full h-[10%] bg-white rounded-lg flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:max-lg:gap-5 md:p-5 lg:p-14 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto"
                >
                    <div className="flex flex-col justify-center p-5">
                        <p className="md:leading-loose md:text-lg text-sm lg:text-lg 2xl:text-2xl">The celebration of the consecrated Life week is an important activity of the institute. A national seminar shall be conducted in the institute based on relevant and major themes that pertain to the life and mission of consecrated persons. The seminar brings together resource persons who would present papers on various aspects of the major theme and promote dialogue and reflection among students. Students would present a reflection paper synthesizing the insights from the Seminar.</p>
                    </div>
                    <div 
                        style={{
                            boxShadow: "0px 4px 4px 0px #00000040",
                        }} 
                        className="w-full h-[200px] md:h-full bg-about-image bg-cover bg-top bg-no-repeat rounded-t-lg md:rounded-lg"
                    >
                    </div>
                </div>
            </div>                           
        </div>
    )
}