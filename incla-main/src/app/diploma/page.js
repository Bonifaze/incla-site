export default function Diploma () {
    return (
        <div>
            <div className="bg-diploma h-[170px] md:h-[300px] lg:h-[400px] max-h-[800px] bg-[#66165a]/55 bg-blend-overlay w-full bg-center bg-no-repeat bg-cover text-lg md:text-2xl lg:text-4xl font-bold text-white 2xl:text-6xl flex items-center justify-center">
                <h1>Diploma</h1>  
            </div> 
            <div className="flex flex-col items-center bg-[#f2f2f2] p-7">
                <div className="flex flex-col justify-center items-center max-w-[95%] lg:max-w-[80%] gap-5">
                    <div className="bg-white rounded-lg p-5 text-black w-full leading-normal mt-5 lg:mt-10"
                        style={{
                            boxShadow: "0px 4px 4px 0px #00000040",
                        }} 
                    >
                        <h1 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold lg:text-center">To obtain the grade of diploma, it is necessary:</h1>
                        <p>
                        <p>1. To have successfully completed one year curriculum of studies foreseen for the diploma course</p>
                        <p>2. To have duly prepared and submitted reviews of at least four books on the theology of consecrated life, totaling a minimum of 800 pages</p>
                        <p>3. To have submitted a research paper duly completed on a theme and developed under the direction of a member of the teaching body; or alternatively to have periodically presented a personal summary of each of the subjects taught during the year and finally a synthesis of all the subjects taught.</p><br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}