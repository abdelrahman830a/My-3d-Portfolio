"use client";
import React from "react";

const Contact = () => {
  return (
    <section className="mt-5 overflow-hidden bg-gray-400/5 px-5 py-8 md:px-16">
      <div className="space-y-5">
        <div className="flex flex-col items-center justify-center gap-2 text-center text-slate-300">
          <h1 className="text-6xl font-bold leading-loose text-slate-300">
            Want to offer coffee?
          </h1>
        </div>
        <form>
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="flex flex-col gap-5">
              <input
                className="w-80 rounded-md border border-gray-200 border-opacity-40 bg-slate-900/50 px-5 py-2 text-white outline-none focus:ring-2 focus:ring-slate-600"
                type="text"
                placeholder="Name"
              />
              <input
                className="w-80 rounded-md border border-gray-200 border-opacity-40 bg-slate-900/50 px-5 py-2 text-white outline-none focus:ring-2 focus:ring-slate-600"
                type="email"
                placeholder="Email"
              />
            </div>
            <textarea
              className="min-h-[150px] w-80 rounded-md border border-gray-200 border-opacity-40 bg-slate-900/50 px-5 py-2 text-white outline-none focus:ring-2 focus:ring-slate-600"
              placeholder="Message"
            />
            <button
              className="w-80 rounded-md bg-slate-500 px-5 py-2 hover:bg-slate-600"
              type="submit"
              onClick={(e) => e.preventDefault()}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

// const Contact = () => {
//   return (
//     <section className="mt-5 overflow-hidden bg-gray-400/5 px-5 py-4 md:px-16">
//       <div className="space-y-5">
//         <div className="flex flex-col items-center justify-center gap-2 text-center text-white">
//           <h1 className="font-poppins text-4xl font-bold text-teal-500">
//             Want to offer coffee?
//           </h1>
//         </div>
//         <form>
//           <div className="flex flex-col items-center justify-center gap-5">
//             <div className="flex flex-col gap-5">
//               <input
//                 className="w-80 rounded-md border border-gray-200 border-opacity-40 bg-gray-900/50 px-5 py-2 text-white outline-none focus:ring-2 focus:ring-teal-500"
//                 type="text"
//                 placeholder="Name"
//               />
//               <input
//                 className="w-80 rounded-md border border-gray-200 border-opacity-40 bg-gray-900/50 px-5 py-2 text-white outline-none focus:ring-2 focus:ring-teal-500"
//                 type="email"
//                 placeholder="Email"
//               />
//             </div>
//             <input
//               className="w-80 rounded-md border border-gray-200 border-opacity-40 bg-gray-900/50 px-5 py-2 text-white outline-none focus:ring-2 focus:ring-teal-500"
//               type="text"
//               placeholder="Subject"
//             />
//             <textarea
//               className="w-80 rounded-md border border-gray-200 border-opacity-40 bg-gray-900/50 px-5 py-2 text-white outline-none focus:ring-2 focus:ring-teal-500"
//               placeholder="Message"
//             />
//             <button
//               className="w-80 rounded-md bg-teal-500 px-5 py-2 hover:bg-teal-600"
//               type="submit"
//               onClick={(e) => e.preventDefault()}
//             >
//               Send
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
// import React from "react";

// // const Contact = () => {
// //   return (
// //     <section className="mt-5 overflow-hidden bg-gray-400/5 px-5 py-4 md:px-16">
// //       <div className="space-y-5">
// //         <div className="flex flex-col items-center justify-center gap-2 text-center text-white">
// //           <h1 className="font-poppins text-4xl font-bold text-teal-500">
// //             Want to offer coffee?
// //           </h1>
// //         </div>
// //         <form>
// //           <div className="flex flex-col items-center justify-center gap-5">
// //             <div className="flex flex-col gap-5">
// //               <input
// //                 className="w-80 rounded-md border border-gray-200 border-opacity-40 bg-opacity-50 px-5 py-2 text-white outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-900"
// //                 type="text"
// //                 placeholder="Name"
// //               />
// //               <input
// //                 className="w-80  rounded-md border border-gray-200 border-opacity-40 bg-opacity-50 px-5 py-2 text-white outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-900"
// //                 type="email"
// //                 placeholder="Email"
// //               />
// //             </div>
// //             <input
// //               className="w-80  rounded-md border border-gray-200 border-opacity-40 bg-opacity-50 px-5 py-2 text-white outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-900"
// //               type="text"
// //               placeholder="Subject"
// //             />
// //             <textarea
// //               className="w-80 rounded-md border border-gray-200  border-opacity-40 bg-opacity-50 px-5 py-2 text-white outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-900"
// //               placeholder="Message"
// //             />
// //             <button
// //               className="w-80 rounded-md bg-teal-500 px-5 py-2 hover:bg-teal-600"
// //               type="submit"
// //               onClick={(e) => e.preventDefault()}
// //             >
// //               Send
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Contact;
