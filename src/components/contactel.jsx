export default function Contactel() {
  return (
    <div className="h-[80dvh] flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold my-20 ">CONTACT US</h1>

      <div className="card">
        <div className="relative bg-black w-[500px] sm:w-[650px] group transition-all duration-700 aspect-video flex items-center justify-center">
          <div className="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-16">
            <p className="text-base sm:text-2xl font-semibold text-gray-500 font-serif ">
              OUR OFFICE
            </p>
            <p className="px-10 text-[10px] sm:text-[12px] text-gray-700 my-4">
              00000 Willms Station Suite 000, Washington, USA
            </p>
            <p className="text-xl sm:text-2xl font-semibold text-gray-500 font-serif">
              CONTACT INFO
            </p>
            <p className="font-serif text-[10px] sm:text-[12px text-gray-700">
              Tel: (000) 000-0000
              <br />
              Email: greatstackdev@gmail.com
            </p>
            <p className="font-sans text-[10px] text-gray-700 pt-5">
              PrimeCare
            </p>
          </div>
          <button className="seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900">
            Open
          </button>
          <div className="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"></div>
          <div className="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
          <div className="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
          <div className="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
        </div>
      </div>
    </div>
  );
}
