// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { useState } from 'react';
// // import { ChevronDownIcon } from '@heroicons/react/16/solid';
// // import { Field, Label, Switch } from '@headlessui/react';

// export default function Example() {
//   const [agreed, setAgreed] = useState(false);

//   return (
//     <div className="flex flex-col min-h-screen ">
//       {/* Header */}
//       <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
//         <Header />
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow dark:bg-gray-900 px-6 py-12 sm:py-20 mt-5 lg:px-8">
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
//         >
//           <div
//             style={{
//               clipPath:
//                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//             }}
//             className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
//           />
//         </div>
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-orange-500">
//             Get in Touch
//           </h2>
//           <p className="mt-4 text-lg text-justify text-gray-500 md:pl-12 md:pr-10 lg:pl-12 lg:pr-10 ">
//             Let's turn ideas into reality together! Whether you're looking to
//             collaborate, have a question, or just want to say hello, I'm always
//             excited to connect. Drop me a message, and let's start a
//             conversation!
//           </p>
//         </div>
//         <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
//           <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//             {/* First Name */}
//             <div>
//               <label
//                 htmlFor="first-name"
//                 className="block text-sm font-semibold text-white "
//               >
//                 First name
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   id="first-name"
//                   name="first-name"
//                   type="text"
//                   autoComplete="given-name"
//                   className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
//                 />
//               </div>
//             </div>

//             {/* Last Name */}
//             <div>
//               <label
//                 htmlFor="last-name"
//                 className="block text-sm font-semibold text-gray-900 text-white"
//               >
//                 Last name
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   id="last-name"
//                   name="last-name"
//                   type="text"
//                   autoComplete="family-name"
//                   className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
//                 />
//               </div>
//             </div>

//             {/* Company */}
//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="company"
//                 className="block text-sm font-semibold text-white"
//               >
//                 Company
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   id="company"
//                   name="company"
//                   type="text"
//                   autoComplete="organization"
//                   className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-semibold text-white"
//               >
//                 Email
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
//                 />
//               </div>
//             </div>

//             {/* Message */}
//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-semibold text-white"
//               >
//                 Message
//               </label>
//               <div className="mt-2.5">
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
//                   defaultValue={''}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="mt-10">
//             <button
//               type="submit"
//               className="block w-full rounded-md bg-indigo-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
//             >
//               Let's talk
//             </button>
//           </div>
//         </form>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white shadow">
//         <Footer />
//       </footer>
//     </div>
//   );
// }


import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Example() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormStatus('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          message: '',
        });
      } else {
        setFormStatus('Failed to send the message. Please try again later.');
      }
    } catch (error) {
      setFormStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-grow dark:bg-gray-900 px-6 py-12 sm:py-20 mt-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-orange-500">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-justify text-gray-500 md:pl-12 md:pr-10 lg:pl-12 lg:pr-10">
            Let's turn ideas into reality together! Whether you're looking to
            collaborate, have a question, or just want to say hello, I'm always
            excited to connect. Drop me a message, and let's start a
            conversation!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8  max-w-xl"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold text-white"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  required
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold text-white"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  required
                />
              </div>
            </div>

            {/* Company */}
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold text-white"
              >
                Company
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-white"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-white"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
          {/* Status Message */}
          {formStatus && (
            <p className="mt-4 text-center text-sm text-gray-500">{formStatus}</p>
          )}
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow">
        <Footer />
      </footer>
    </div>
  );
}
