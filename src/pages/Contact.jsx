import { useEffect } from "react"
import ContactImg from "../assets/contact.png.png"

const Contact = () => {
  useEffect(()=>{
      scrollTo(0,0)
    },[])
  return (
    <div className="w-full">
      <div><span>Home</span><span>Contact</span></div>
      {/* left right */}
      <div className="w-full flex p-4 text-dark">
        {/* left */}
        <div className="w-[50%] bg-primaryBg p-4">
          <div className="font-semibold text-2xl mt-3 mb-6">Ready to work with us</div>
          <div className="my-3 text-dark/70">Contact us for all your questions and opinions</div>
          <div className="w-full flex justify-between mb-3">
            <div className="w-[48%] flex flex-col">
              <label htmlFor="fname" className="mb-2">First Name*</label>
              <input className="border border-dark/50 px-3 py-1 rounded-md ring ring-greenish" type="text" id="fname"/>
            </div>
            <div className="w-[48%] flex flex-col">
              <label  htmlFor="lname" className="mb-2">Last Name*</label>
              <input className=" border border-dark/50 rounded-md py-1 px-3 ring-1 ring-greenish" type="text" id="lname"/>
            </div>
          </div>
          <div className="w-full flex flex-col mb-3">
            <label className="mb-2" htmlFor="email">Email Address*</label>
            <input className="border border-dark/50 px-3 py-1 rounded-md ring ring-greenish" type="email" id="email"/>
          </div>
          <div className="w-full flex flex-col mb-3">
            <label className="mb-2" htmlFor="pnumber">Phone Number (optional)</label>
            <input className="border border-dark/50 px-3 py-1 rounded-md ring ring-greenish" type="number" id="pnumber"/>
          </div>
          <div  className="w-full flex flex-col mb-3">
            <label className="mb-2"  htmlFor="country">Country / Regioin *</label>
            <select className="border border-dark/50 px-3 py-1 rounded-md ring ring-greenish" name="country" id="country">
              <option value="">Select Country </option>
              <option value="dynamic">dynamic</option>
            </select>
          </div>
          <div className="w-full flex flex-col mb-3">
            <label className="mb-2" htmlFor="subjecy">Subject (optional)</label>
            <input  className="border border-dark/50 px-3 py-1 rounded-md ring ring-greenish" type="text" id="subject"/>
          </div>
          <div className="w-full flex flex-col mb-3">
            <label className="mb-2" htmlFor="message">Message</label>
            <textarea className="border border-dark/50 px-3 py-1 rounded-md ring ring-greenish" name="message" id="message" rows='6'></textarea>
          </div>
          <div className="w-full my-2">
            <input className="me-2 accent-greenish size-4" type="checkbox" id="checkbox"/>
            <label htmlFor="checkbox">I want to receive news and updates once in a while. By submitting, I’m agreed to the <span>Terms & Conditons</span></label>
          </div>
          <div className="">
            <button className="bg-greenish px-8 py-2 text-primaryBg text-lg rounded-md hover:rounded-3xl transition-all duration-100 hover:bg-greenish/80">Send Message</button>
          </div>
        </div>
        {/* right */}
        <div className="w-[50%] bg-primaryBg p-4">
          <div className="font-semibold text-2xl mt-3 mb-6">United state (head quater)</div>
          <div className="my-3 text-dark/70">152 Thatcher Road St, Mahattan, 10463, US (+025) 3886 25 16</div>
          <div className="text-greenish mb-6">hello@swattechmart.com</div>
          <div className="my-3 text-dark/70">united kingdom (branch)</div>
          <div className="mb-2">12 Buckingham Rd, Thornthwaite, HG3 4TY, UK(+718) 895-5350</div>
          <div className="mb-9">contact@swattechmart.co.uk</div>
          <div className="w-[90%]  h-[300px] aspect-square"><img className="rounded-2xl w-full h-full object-cover object-center" src={ContactImg} alt="" /></div>
        </div>
      </div>
      {/* map  */}
      <div className="w-full p-4 bg-primaryBg">
        <div className="w-full mb-6">find us on google map</div>
        <div className="shadow">
          <iframe
          title="Google Maps location"
          className="w-full h-[300px] rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.17948956487!2d73.18256017458691!3d22.30905057968033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf525f615555%3A0x5802f0e8447fc6c1!2sBRIGHT%20Computer%20Education!5e0!3m2!1sen!2sin!4v1779636241791!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact