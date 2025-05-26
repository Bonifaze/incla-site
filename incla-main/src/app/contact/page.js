import Link from "next/link"

export default function Contact () {
    return (
        <div className="bg-incla-grey-200 pb-10">
            <div className="bg-slide2 h-[170px] md:h-[300px] lg:h-[400px] max-h-[800px] bg-[#66165a]/55 bg-blend-overlay w-full bg-center bg-no-repeat bg-cover text-xl md:text-2xl lg:text-4xl font-bold text-white 2xl:text-6xl flex flex-col items-center justify-center gap-0">
                <h1>Contact Us</h1><br />  
            </div> 
            <div className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto flex flex-col lg:grid lg:grid-cols-2 lg:p-20 gap-16 lg:gap-32">                
                <div className="gap-5 bg-incla-blue lg:bg-transparent p-7 py-16 lg:p-0">
                    <h1 className="text-white lg:text-black text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">Drop us a note and we’ll get back to you, or use the details below to get in touch</h1>
                    <div className="bg-white p-2 lg:p-10 my-10 rounded-lg flex flex-col"
                        style={{
                            boxShadow: "0px 4px 4px 0px #00000040",
                        }} 
                    > 
                        <p className="font-semibold">Email</p>
                        <Link href={'mailto:info@incla.org.ng'}>info@incla.org.ng</Link>
                    </div>
                    <div className="bg-white p-2 lg:p-10 mt-10 rounded-lg flex flex-col"
                        style={{
                            boxShadow: "0px 4px 4px 0px #00000040",
                        }} 
                    > 
                        <p className="font-semibold">Phone</p>
                        <Link href={'tel:08064758374'}>(234) - 80 6475 8374</Link>
                    </div>
                </div>
                <div className="p-7 lg:p-0">
                    <form action ="" method="POST" className="grid grid-cols-1 gap-3">
                        <label for='name'>Full name</label>
                        <input type="text" id='name' name="name" required  className="rounded-lg p-2"
                            style={{
                                boxShadow: "0px 4px 4px 0px #00000040",
                            }} 
                        />
                        <label for='email'>Email</label>
                        <input type="email" id='email' name="email" required className="rounded-lg p-2"
                            style={{
                                boxShadow: "0px 4px 4px 0px #00000040",
                            }} 
                        />
                        <label for='phone'>Phone</label>
                        <input type="tel" id="phone" name="phone" maxlength="11" pattern="\d{10,11}" required className="rounded-lg p-2"
                            style={{
                                boxShadow: "0px 4px 4px 0px #00000040",
                            }} 
                        />
                        <label for='message'>Message</label>
                        <textarea id='message' name="message" rows={4} cols={50} required className="rounded-lg p-2"
                            style={{
                                boxShadow: "0px 4px 4px 0px #00000040",
                            }} 
                        ></textarea>

                        <button type="submit" id='submit' className="w-fit bg-incla-purple p-2 px-4 text-white rounded-lg">
                            Send a message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}