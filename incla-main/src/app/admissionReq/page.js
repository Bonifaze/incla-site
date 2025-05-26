export default function AdmissionReq () {
  return (
    <div>
      <div className="bg-admit-req h-[170px] md:h-[300px] lg:h-[400px] max-h-[800px] bg-[#66165a]/55 bg-blend-overlay w-full bg-center bg-no-repeat bg-cover text-lg md:text-2xl lg:text-4xl font-bold text-white 2xl:text-6xl flex items-center justify-center">
        <h1>Admission Requirement</h1>  
      </div> 
      <div className='bg-[#f2f2f2] p-4 md:p-10 lg:p-20 '>
        <div className="bg-white flex flex-col rounded-lg p-5 md:px-10 lg:px-20 text-sm md:text-base 2xl:text-xl text-Left pb-14"
          style={{
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          <h1 className="text-lg lg:text-2xl 2xl:text-4xl font-bold my-7">General Admission Requirement</h1>
          <p className="leading-relaxed">The criteria for admission into the PGD programme will be as follows: 
            <p>Matriculation requirement of five (5) o-level credits including English Language and Mathematics with either of the following: </p>
            <p>1. A candidate with at least 3rd class degree in a related field. </p>
            <p>2. HND holders with a minimum of Upper Credit from recognized institution may also be considered. </p>
            <p>3. Candidates seeking admission in each of the specialization should possess a credit and/or pass in the core subjects related to the area of specialization. </p>
            <p>4. The project topic should be in the candidates’ area of intended specialization.</p>
          </p>

          <h1 className="text-lg lg:text-2xl 2xl:text-4xl font-bold my-7">Basic Admission Requirements for Licentiate and Masters’ Programmes</h1>
          <p>To be admitted to the biennial courses of Licentiate in the Theology of Consecrated life the students should be in possession of a Bachelors Degree in Theology and have at least a discrete knowledge of Hebrew, Greek, and be proficient in 2 modern languages.</p>
        </div>
      </div>
    </div>
  )
}