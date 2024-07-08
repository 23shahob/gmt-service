import React, { useState } from "react";

const RegistrationForm = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [agreed, setAgreed] = useState(false);
  //   const dispatch = useDispatch();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (agreed) {
  //       dispatch(register({ email, password }));
  //     } else {
  //       alert("You must agree to the privacy policy");
  //     }
  //   };

  return <div>hello</div>;
};

export default RegistrationForm;

//   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//     <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
//       <h2 className="mb-4 text-2xl font-semibold">Регистрация</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700">Ваш email*</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#088269]"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Пароль*</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#088269]"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               required
//               checked={agreed}
//               onChange={(e) => setAgreed(e.target.checked)}
//               className="form-checkbox h-5 w-5 text-[#088269]"
//             />
//             <span className="ml-2 text-gray-700">
//               Я соглашаюсь с обработкой персональных данных на условиях{" "}
//               <a href="/privacy-policy" className="text-[#088269] underline">
//                 Политики конфиденциальности
//               </a>
//               .
//             </span>
//           </label>
//         </div>
//         <div className="flex justify-end">
//           <button
//             type="submit"
//             className="rounded-lg bg-[#088269] px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-[#07745E] focus:outline-none"
//           >
//             Регистрация
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>;
