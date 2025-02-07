import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b0595f06-2b21-423c-b0b6-52192a8e768d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact p-4 pb-20 h-auto w-full'>
      <div className='p-4'>
        <p className='text-center font-medium text-md pt-4'>Contact Us</p>
        <h3 className='text-center font-bold text-2xl '>Get in Touch</h3>
      </div>
      <div className=' sm:flex items-center justify-evenly sm:mx-8 '>
        <div>
          <p className='text-3xl font-bold'>Send us a message</p>
          <p className='text-xl text-gray-500'>Fill in the form to start a conversation</p>
          <div className='space-y-3 pt-3'>
            <div className='flex gap-x-2 text-lg'>
              <LocationOnIcon style={{ fontSize: '25px' }} />
              <p>Ranchi, Jharkhand</p>
            </div>
            <div className='flex gap-x-2 text-lg'>
              <PhoneIcon style={{ fontSize: '25px' }} />
              <p>+91 6666******</p>
            </div>
            <div className='flex gap-x-2 text-lg'>
              <EmailOutlinedIcon style={{ fontSize: '25px' }} />
              <p>info@gmail.com</p>
            </div>
          </div>
        </div>

        <div className='mt-10'>
          <form onSubmit={onSubmit} className='flex flex-col'>
            <label className='font-medium mb-1'>Your Name</label>
            <input
              type="text"
              placeholder='Enter your name'
              className='mb-3 border bg-input-bg border-gray-500 outline-none rounded-md px-2 py-2 max-w-80'
              required
            />
            <label className='font-medium mb-1'>Phone Number</label>
            <input
              type="tel"
              placeholder='Enter mobile number'
              className='mb-3 bg-input-bg border border-gray-500 outline-none rounded-md px-2 py-2 max-w-80'
              required
            />
            <label className='font-medium mb-1'>Write message here</label>
            <textarea
              name="message"
              className='mb-3 bg-input-bg resize-none rounded-md h-28 border border-black px-2 py-2 sm:w-80 max-w-80'
              rows="6"
              cols="10"
              placeholder='Enter your message'
              required
            ></textarea>
            <button className='border border-black rounded-full py-1 bg-blue-300 hover:bg-blue-700 hover:text-white font-medium w-28 transition duration-300'>
              Submit
            </button>
          </form>
          <span className='text-green-600 font-medium'>{result}</span>
        </div>
    </div>
    </div>
  )
}

export default Contact
