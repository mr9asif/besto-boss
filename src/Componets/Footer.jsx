import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="mt-7  text-neutral-content">
        <footer className="flex justify-center items-center">
            <div className="w-1/2 h-full bg-slate-500  p-16 px-12 flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold">Contact US</h1>
                <h1>123 ABS Street, Uni 21, Bangladesh </h1>
                <h1>+88 123456789</h1>
                 <h1>Mon - Fri: 08:00 - 22:00</h1>
                    <h1> Sat - Sun: 10:00 - 23:00</h1>
            </div>
             <div className="w-1/2 h-full bg-gray-700 p-[54px] px-12 flex flex-col justify-center items-center">
               <h1 className="text-3xl font-bold">Follow US</h1>
               <h1 className="text-xl font-semibold">Join Our Social Media</h1>
                <div className="flex justify-center items-center gap-4 my-9">
                <FaFacebook/>
                <FaInstagram />
                <FaTwitter />
                </div>
             </div>
      </footer>
        </div>
    );
};

export default Footer;