import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillInstagram, AiFillFacebook } from 'react-icons/ai'; // Import the icons
import Image from "./assets/linkine.jpg";
import { RiFileChart2Fill } from 'react-icons/ri';

export default function Example() {
  return (
    <>
      <div className="min-h-full">
        <header className="bg-zinc-300">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Home</h1>
          </div>
        </header>

        <main className='bg-gray-300' >
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {/* Main content */}
            <div className="flex items-center justify-between">
              <div className="w-1/2">
                <p className="mt-4 text-xl ">Je suis lahcen</p>
                <p>Actuellement,je suis en train de suivre une formation dans l'association Ahmed Al Hansali</p>
                <p>, qui propose des informations sur la façon de modifier les applications informatiques.</p>
              </div>

              {/* Sliding Image */}
              <div className="relative max-w-full w-80 h-80">
                <img
                  src={Image}
                  alt="Linkine"
                  className="rounded-full object-cover w-full h-full animate-slide" // Applying the animation class here
                />
              </div>
            </div>
          </div>
        </main>

        {/* Social Media Icons */}
        <div className='flex justify-center gap-10 py-10 text-gray-600 bg-slate-400'>
          <a href="https://chatgpt.com/"><AiFillTwitterCircle className="text-5xl text-sky-500" /></a>
          <a href="https://fr-fr.facebook.com/"><AiFillFacebook className="text-5xl text-blue-700" /></a>
          <AiFillLinkedin className="text-5xl" />
          <a href="https://www.youtube.com/"><AiFillYoutube className="text-5xl text-red-600" /></a>
          <a href="https://www.instagram.com/"><AiFillInstagram className="text-5xl text-pink-600" /></a>
        </div>

      </div>

      <style jsx>{`
        /* Keyframe animation for sliding image */
        @keyframes slideImage {
          0% {
            transform: translateX(10%);
          }
          10% {
            transform: translateX(-10%);
          }
        }

        /* Apply the animation to the image */
        .animate-slide {
          animation: slideImage 10s linear infinite;
        }
      `}</style>
    </>
  );
}
