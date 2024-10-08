import { Heart } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
      <header className="w-full min-h-10 p-4 rounded-lg border shadow grid place-items-center backdrop-blur-lg ">
          <div className=" w-full h-full flex justify-between items-center gap-4 ">
              <Link href={"/"} className=" text-2xl sm:text-4xl font-extrabold text-center text-indigo-500 ">
                  PixAI
              </Link>
              <div className=" flex justify-between items-center gap-4 sm:gap-8 ">
                  <Link href={"/favorites"} className=" hover:bg-slate-200 text-indigo-500  transition-all ease-linear p-2 rounded-full ">
                      <Heart size={28} />
                  </Link>
                  <Link href={"/generate"} className="bg-indigo-500 text-white rounded-lg px-3 py-3 hover:shadow-md hover:bg-indigo-600 transition-all ease-linear font-bold">
                      ✨ Imagine with PixAI
                  </Link>
              </div>
          </div>
      </header>
  )
}

export default Navbar
