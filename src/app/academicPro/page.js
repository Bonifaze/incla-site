import { AcademicProgram } from "@/data/nav"

export default function AcademicPrograms () {
    return (
        <div>
            <div className="bg-acPro h-[170px] md:h-[300px] lg:h-[400px] max-h-[800px] bg-[#66165a]/55 bg-blend-overlay w-full bg-center bg-no-repeat bg-cover text-lg md:text-2xl lg:text-4xl font-bold text-white 2xl:text-6xl flex items-center justify-center">
                <h1>Academic Programs</h1>  
            </div> 
            <div className="bg-[#f2f2f2] flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center lg:max-w-[60%] max-w-[95%]">
                    {AcademicProgram.map((value, index) => (
                        <div key={index} className={`flex flex-col w-full bg-incla-blue rounded-lg my-4 p-5 mt-5 lg:mt-10 text-white text-center ${index === 1 || index === AcademicProgram.length -1 ? 'bg-incla-purple' : '' || index === 3 ? 'bg-white !text-black' : ''}`}
                            style={{
                                boxShadow: "0px 4px 4px 0px #00000040",
                            }} 
                        >
                            <h1 className="text-base md:text-lg lg:text-xl 2xl:text-3xl">{value.heading}</h1>
                            {value.description && Array.isArray(value.description) && value.description.length > 0 ? (
                    value.description.map((sublink, index) => {
                                return(
                                <li key={index} className="text-left lg:mx-10">
                                    {sublink}
                                </li>
                                )})
                            ) : (
                                <p>{value.description}</p>
                            )}
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}