
import Image from "next/image";
import Link from "next/link";




export default function Home() {
  return (
    <div className="w-screen h-screen flex  justify-evenly items-center bg-blue-300">
    <div className="flex flex-col">
    <h1 className="  font-extrabold text-[60px] text-black">THE DOG&apos;S API</h1>

    <div className="text-center mt-6">

      <Link href="/frontscreen">
        <button 
          
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-700 ease-in-out "
        >
          Explore
        </button>
        </Link>
      </div>
      </div>
    <div className=" grid grid-cols-3 gap-[10px] bg-white">
      <div>
        <Image
          src="/dog1.avif"
          alt="Picture of the author"
          width={150}
          height={150}
          className="w-56 h-56"
        />
      </div>
      <div>
        <Image
          src="/dog2.avif"
          alt="Picture of the author"
          width={150}
          height={150}
          className="w-56 h-56"
        />
      </div>
      <div>
        <Image
          src="/dog3.avif"
          alt="Picture of the author"
          width={150}
          height={150}
          className="w-56 h-56"
        />
      </div>

      <div>
        <Image
          src="/dog4.avif"
          alt="Picture of the author"
          width={150}
          height={150}
          className="w-56 h-56"
        />
      </div>

      <div>
        <Image
          src="/dog5.avif"
          alt="Picture of the author"
          width={150}
          height={150}
          className="w-56 h-56"
        />
      </div>

      <div>
        <Image
          src="/dog6.avif"
          alt="Picture of the author"
          width={150}
          height={150}
          className="w-56 h-56"
        />
      </div>
      
    </div>

    
  </div>
  );
}
