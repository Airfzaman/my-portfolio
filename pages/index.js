// import Link from 'next/link';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// export default function Home() {
//   return (
//     <div>
//       <head>
//         <Header/>
//       </head>
// <div className="bg-gray-100 h-screen flex items-center justify-center">
//       <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-12">
//         {/* Left Section */}
//         <div className="text-center lg:text-left max-w-lg">
//           <h1 className="text-4xl lg:text-6xl font-bold text-gray-800">
//             Hi <br />
//             I'm <span className="text-orange-500">Hannah</span> <br />
//             a Frontend Developer
//           </h1>
//           <p className="mt-4 text-gray-600">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
//             dolorem eum laudantium, unde voluptatum nemo non exercitationem
//             neque ab delectus voluptas asperiores architecto ad eveniet mollitia
//             provident harum pariatur porro.
//           </p>
//           <div className="mt-6 flex justify-center lg:justify-start space-x-4">
//             <button className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800">
//               Hire Me
//             </button>
//             <button className="bg-orange-500 text-white px-6 py-2 rounded shadow hover:bg-orange-600">
//               Experience
//             </button>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden">
//           <img
//             // src="/images/hannah.jpg" // Replace with your image URL
//             src="/profile.jpg" // Replace with your image URL
//             alt="Hannah"
//             className="object-cover w-full h-full"
//           />
//         </div>
//       </div>
//     </div>
//     <div>
//       <Footer/>
//     </div>
//     </div>

//   );
// }

// import Head from 'next/head'; // Import Head from Next.js
// import Header from '../components/Header'; // Ensure this is a valid React component
// import Footer from '../components/Footer'; // Ensure this is a valid React component
// import { useEffect } from 'react';

// export default function Home() {
//   useEffect(() => {
//     const skills = [
//       "Web-development",
//       "Data Science",
//       "C++",
//       "Java",
//       "JavaScript",
//       "Python",
//     ];
//     let index = 0;

//     const skillElement = document.getElementById("animated-skills");

//     const displaySkill = () => {
//       if (skillElement) {
//         skillElement.textContent = skills[index];
//         index = (index + 1) % skills.length; // Loop back to the first skill
//       }
//     };

//     // Update skill every 2 seconds
//     const interval = setInterval(displaySkill, 2000);

//     // Show the first skill immediately
//     displaySkill();

//     // Clear interval on component unmount
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       {/* Page Metadata */}
//       <Head>
//         <title>Portfolio</title>
//         <meta name="description" content="Frontend Developer Portfolio" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Fixed Header */}
//       <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
//         <Header />
//       </header>

//       {/* Main Content */}
//       <main className="pt-20 dark:bg-gray-900 bg-gray-100 min-h-screen flex items-center justify-center pl-10 pr-10">
//         <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-12">
//           {/* Left Section */}
//           <div className="text-center lg:text-left max-w-lg">
//             <h1 className="text-4xl lg:text-6xl font-bold text-white text-gray-800">
//               Hi <br />
//               I'm <span className="text-orange-500">Arif Uz Zaman</span> <br />
//               a Software Developer
//             </h1>
//             <div className="">
//               <p className="text-4xl lg:text-6xl font-bold text-white text-gray-800">My skills are:</p>
//               <p className="mt-4 text-gray-600 text-orange-500 font-bold text-2xl ">
//                 {/* My Skills are -  */}
//                 <span id="animated-skills"></span>
//               </p>
//             </div>

//             <div className="mt-6 flex justify-center lg:justify-start space-x-4">
//               {/* <button className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800">
//                 Hire Me
//               </button> */}
//               <Link href="/HireMe">
//               <button className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-600">
//                 Hire Me
//               </button>
//               </Link>
//               <Link href="/projects">
//               <button className="bg-orange-500 text-white px-6 py-2 rounded shadow hover:bg-orange-600">
//                 Experience
//               </button>
//               </Link>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden">
//             <img
//               src="/p-pic.png" // Replace with your image URL
//               alt="Arif uz zaman"
//               className="object-cover w-full h-full"
//             />
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white shadow">
//         <Footer />
//       </footer>
//     </div>
//   );
// }


import Head from 'next/head'; // Import Head from Next.js
import Header from '../components/Header'; // Ensure this is a valid React component
import Footer from '../components/Footer'; // Ensure this is a valid React component
import { useEffect } from 'react';
import Link from 'next/link'; // Import Link from Next.js

export default function Home() {
  useEffect(() => {
    const skills = [
      "Web-development",
      "Data Science",
      "C++",
      "Java",
      "JavaScript",
      "Python",
    ];
    let index = 0;

    const skillElement = document.getElementById("animated-skills");

    const displaySkill = () => {
      if (skillElement) {
        skillElement.textContent = skills[index];
        index = (index + 1) % skills.length; // Loop back to the first skill
      }
    };

    // Update skill every 2 seconds
    const interval = setInterval(displaySkill, 2000);

    // Show the first skill immediately
    displaySkill();

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Page Metadata */}
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Frontend Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <Header />
      </header>

      {/* Main Content */}
      <main className="lg:pt-20  dark:bg-gray-900 bg-gray-100 min-h-screen flex items-center justify-center px-6 lg:px-12">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="text-left lg:text-left max-w-lg">
            <h1 className="text-3xl lg:text-6xl font-bold text-white">
              Hi <br />
              I'm <span className="text-orange-500 ">Arif Uz Zaman</span> <br/>
              a Software Developer & Designer
            </h1>
            <div className="mt-4">
              <p className="text-2xl lg:text-4xl font-bold text-white">My skills are:</p>
              <p className="mt-4 text-gray-600 text-orange-500 font-bold text-xl lg:text-2xl">
                <span id="animated-skills"></span>
              </p>
            </div>

            {/* <div className="mt-6 flex justify-center lg:justify-start space-x-4">
              <Link href="/HireMe">
                <button className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-600">
                  HireMe
                </button>
              </Link>
              <Link href="/projects">
                <button className="bg-orange-500 text-white px-6 py-2 rounded shadow hover:bg-orange-600">
                  Experience
                </button>
              </Link>
            </div> */}
            <div className="mt-6 flex flex-col lg:flex-row justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4">
  <Link href="/HireMe">
    <button className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-600 w-full lg:w-40">
      Hire Me
    </button>
  </Link>
  <Link href="/projects">
    <button className="bg-orange-500 text-white px-6 py-2 rounded shadow hover:bg-orange-600 w-full lg:w-40">
      Experience
    </button>
  </Link>
</div>

          </div>

          {/* Right Section */}
          <div className="relative w-40 h-40 sm:w-60 sm:h-60 lg:w-96 lg:h-96 rounded-full overflow-hidden">
            <img
              src="/p-pic.png" // Replace with your image URL
              alt="Arif uz zaman"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow">
        <Footer />
      </footer>
    </div>
  );
}
