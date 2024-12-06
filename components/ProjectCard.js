// components/ProjectCard.js

// const ProjectCard = ({ project }) => {
//   return (
//     <div className="border rounded-lg p-4 bg-white shadow-md dark:bg-gray-800 dark:text-gray-200">
//       <h2 className="text-xl font-bold mb-2">{project.title}</h2>
//       <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
//       <Link href={`/projects/${project.slug}`} legacyBehavior>
//         <a className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline">
//           Learn More
//         </a>
//       </Link>
//     </div>
//   );
// };

// export default ProjectCard;

import Link from 'next/link';
export default function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{project.title}</h2>
        <p className="mt-4  text-gray-600 dark:text-gray-300 text-justify">{project.description}</p>
        <a
          href={`/${project.slug}`}
          className="block mt-4 text-orange-500 hover:underline font-semibold"
        >
          Read More &rarr;
        </a>
      </div>
    </div>
  );
}

