// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import Head from 'next/head';
// import Link from 'next/link';

// export default function About() {
//   return (
//     <div className="bg-black text-white min-h-screen flex flex-col dark:bg-gray-900">
//       <Head>
//         <title>About Me</title>
//         <meta name="description" content="About Arif Uz Zaman" />
//       </Head>

//       {/* Header Section */}
//       <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
//         <Header />
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
//         <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-12">
//           {/* Image Section */}
//           <div className="relative rounded-full overflow-hidden w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-orange-500">
//             <img
//               src="/p-pic.png"
//               alt="Arif Uz Zaman"
//               className="object-cover w-full h-full"
//             />
//           </div>

//           {/* Text Section */}
//           <div className="max-w-xl text-center lg:text-left space-y-6">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500">
//               About <span className="text-white">Me</span>
//             </h2>
//             <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
//               Frontend Developer
//             </h3>
//             <p className="text-gray-300 text-sm sm:text-base">
//               Hello! I'm <span className="text-orange-500 font-semibold">Arif Uz Zaman</span>, a passionate <strong>Software Developer</strong> dedicated to crafting innovative solutions. My expertise spans across <strong>web development</strong>, <strong>data science</strong>, and programming languages like <strong>C++, Java, JavaScript</strong>, and <strong>Python</strong>.
//             </p>
//             <p className="text-gray-300 text-sm sm:text-base">
//               I thrive on creating projects that make a meaningful impact, such as:
//             </p>
//             <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-3">
//               <li>
//                 <strong>Mood-Based Movie Recommendation System</strong>: Personalized recommendations based on user emotions.
//               </li>
//               <li>
//                 <strong>Tomato Leaf Disease Detection</strong>: Achieved 99.36% accuracy using deep learning models.
//               </li>
//               <li>
//                 <strong>House Price Prediction</strong>: Advanced ML techniques for accurate house price prediction.
//               </li>
//               <li>
//                 <strong>Diabetes Prediction</strong>: Early detection system to enable timely preventive measures.
//               </li>
//             </ul>
//             <div className="flex justify-center lg:justify-start">
//               <Link href="/projects">
//                 <button className="bg-orange-500 text-white px-8 py-3 rounded shadow-lg hover:bg-orange-600 mt-6 mb-6">
//                   Explore My Work
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer Section */}
//       <footer className="bg-white shadow">
//         <Footer />
//       </footer>
//     </div>
//   );
// }

import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col dark:bg-gray-900">
      <Head>
        <title>About Me</title>
        <meta name="description" content="About Arif Uz Zaman" />
      </Head>

      {/* Header Section */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 mb-20">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <div className="relative rounded-full overflow-hidden w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-orange-500">
              <img
                src="/p-pic.png"
                alt="Arif Uz Zaman"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="max-w-xl space-y-6 ">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 text-center lg:text-left">
              About <span className="text-white">Me</span>
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center lg:text-left">
              Software Developer & Designer
            </h3>
            <p className="text-gray-300 text-sm sm:text-base text-justify lg:text-left">
              Hello! I'm <span className="text-orange-500 font-semibold">Arif Uz Zaman</span>, a passionate <strong>Software Developer</strong> dedicated to crafting innovative solutions. My expertise spans across <strong>web development</strong>, <strong>data science</strong>, and programming languages like <strong>C++, Java, JavaScript</strong>, and <strong>Python</strong>.
            </p>
            <p className="text-gray-300 text-sm sm:text-base text-justify lg:text-left">
              I thrive on creating projects that make a meaningful impact, such as:
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-3 text-justify">
              <li>
                <strong>Mood-Based Movie Recommendation System</strong>: Personalized recommendations based on user emotions.
              </li>
              <li>
                <strong>Tomato Leaf Disease Detection</strong>: Achieved 99.36% accuracy using deep learning models.
              </li>
              <li>
                <strong>House Price Prediction</strong>: Advanced ML techniques for accurate house price prediction.
              </li>
              <li>
                <strong>Diabetes Prediction</strong>: Early detection system to enable timely preventive measures.
              </li>
            </ul>
            <div className="flex justify-center lg:justify-start">
              <Link href="/projects">
                <button className="bg-orange-500 text-white px-8 py-3 rounded shadow-lg hover:bg-orange-600 transition mt-6">
                  Explore My Work
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-white shadow">
        <Footer />
      </footer>
    </div>
  );
}
