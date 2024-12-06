// // components/Footer.js
// const Footer = () => {
//     return (
//       <footer className="bg-gray-800 text-gray-300 p-4">
//         <div className="container mx-auto text-center">
//           <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
//           <div className="space-x-4 mt-2">
//             <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
//               GitHub
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
//               LinkedIn
//             </a>
//           </div>
//         </div>
//       </footer>
//     );
//   };
  
//   export default Footer;
  
// components/Footer.js
// export default function Footer() {
//     return (
//       <footer className="bg-gray-900 text-gray-400 py-4">
//         <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
//           <p className="text-sm">
//             © {new Date().getFullYear()} Your Company, Inc. All rights reserved.
//           </p>
//           <div className="flex space-x-4 mt-2 sm:mt-0">
//             <a href="#" className="hover:text-gray-200">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="#" className="hover:text-gray-200">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="#" className="hover:text-gray-200">
//               <i className="fab fa-twitter"></i> {/* Replace with X for branding */}
//             </a>
//             <a href="#" className="hover:text-gray-200">
//               <i className="fab fa-github"></i>
//             </a>
//             <a href="#" className="hover:text-gray-200">
//               <i className="fab fa-youtube"></i>
//             </a>
//           </div>
//         </div>
//       </footer>
//     );
//   }
  
// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-400 py-6">
//       <div className="container mx-auto px-6 md:px-12">
//         {/* Top Links Section */}
//         <div className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-sm md:text-base mb-4">
//           <a href="#" className="hover:text-white transition-colors">
//             About
//           </a>
//           <a href="#" className="hover:text-white transition-colors">
//             Blog
//           </a>
//           <a href="#" className="hover:text-white transition-colors">
//             Jobs
//           </a>
//           <a href="#" className="hover:text-white transition-colors">
//             Press
//           </a>
//           <a href="#" className="hover:text-white transition-colors">
//             Accessibility
//           </a>
//           <a href="#" className="hover:text-white transition-colors">
//             Partners
//           </a>
//         </div>

//         {/* Social Media Icons */}
//         <div className="flex justify-center space-x-6 text-xl mb-4">
//           <a href="#" className="hover:text-white transition-colors">
//             <i className="fab fa-facebook"></i>
//           </a>
//           <a href="#" className="hover:text-white transition-colors">
//             <i className="fab fa-instagram"></i>
//           </a>
//           <a href="#" className="hover:text-white transition-colors">
//             <i className="fab fa-twitter"></i>
//           </a>
//           <a href="#" className="hover:text-white transition-colors">
//             <i className="fab fa-github"></i>
//           </a>
//           <a href="#" className="hover:text-white transition-colors">
//             <i className="fab fa-youtube"></i>
//           </a>
//         </div>

//         {/* Copyright Section */}
//         <div className="text-center text-sm md:text-base">
//           &copy; 2024 Your Company, Inc. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Links Section */}
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-sm md:text-base mb-4">
          <a href="/AboutMe" className="hover:text-white transition-colors">
            About
          </a>
          <a href="/Contact" className="hover:text-white transition-colors">
            Contact
          </a>
          <a href="/projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="index" className="hover:text-white transition-colors">
            Home
          </a>
          {/* <a href="#" className="hover:text-white transition-colors">
            Accessibility
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Partners
          </a> */}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 text-xl mb-4">
          <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/___arif___uz__zaman___/profilecard/?igsh=aTk2cm85NHZjM2Zm" aria-label="Instagram" className="hover:text-white transition-colors">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="https://github.com/Airfzaman" aria-label="GitHub" className="hover:text-white transition-colors">
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-white transition-colors">
            <FaYoutube className="h-6 w-6" />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm md:text-base">
          &copy; 2024 Arif uz zaman, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
