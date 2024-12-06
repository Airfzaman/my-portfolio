// export default function Projects() {
  //   return (
  //     <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
  //       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">My Projects</h1>
  //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  //         {projects.map((project) => (
  //           <ProjectCard key={project.id} project={project} />
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }
// const projects = [
//   { id: 1, title: 'House Price Prediction System for Real Estate', description: 'Developed an automated machine learning system to assist real estate companies in predicting house prices with precision. Analyzed multiple algorithms using the Boston House dataset from Kaggle to improve prediction accuracy.', slug: 'house-price-prediction-ML' },
//   { id: 2, title: 'Tomato Leaf Disease Detection using Deep Learning', description: 'Designed a hybrid deep learning model combining CNN and MLP to detect diseases in tomato leaves with 99.36% accuracy. Utilized the PlantVillage dataset and a self-collected field dataset to enhance model robustness.', slug: ' tomato-leaf-disease-detection' },
//   { id: 3, title: ' Early Detection of Diabetes using Machine Learning', description: 'Built a system to identify diabetes at early stages, enabling timely preventive measures. Explored various machine learning algorithms using the Kaggle Diabetes Dataset to optimize prediction accuracy', slug: 'diabetes-prediction-ml'},
//   { id: 4, title: ' Personalized Mood-Based Movie Recommendation System', description: ' Developed a unique recommendation platform to suggest movies tailored to users moods. Integrated a mood slider and mood-based filters to create personalized watchlists. Utilized user mood history and advanced filtering techniques to enhance recommendations.', slug: 'mood-based-movie-recommendation'}
 
// ];

// export default function Projects() {
//   return (
//     <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">My Projects</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {projects.map((project) => (
//           <ProjectCard key={project.id} project={project} />
//         ))}
//       </div>
//     </div>
//   );
// }
// import ProjectCard from '../components/ProjectCard';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// const projects = [
//   { 
//     id: 1, 
//     title: 'House Price Prediction System for Real Estate', 
//     description: 'Developed an automated machine learning system to assist real estate companies in predicting house prices with precision. Analyzed multiple algorithms using the Boston House dataset from Kaggle to improve prediction accuracy.', 
//     slug: 'house-price-prediction-ML',
//     image: '/hou.jpg' // Add the project image
//   },
//   { 
//     id: 2, 
//     title: 'Tomato Leaf Disease Detection using Deep Learning', 
//     description: 'Designed a hybrid deep learning model combining CNN and MLP to detect diseases in tomato leaves with 99.36% accuracy. Utilized the PlantVillage dataset and a self-collected field dataset to enhance model robustness.', 
//     slug: 'tomato-leaf-disease-detection',
//     image: '/tomato.jpg' // Add the project image
//   },
//   { 
//     id: 3, 
//     title: 'Early Detection of Diabetes using Machine Learning', 
//     description: 'Built a system to identify diabetes at early stages, enabling timely preventive measures. Explored various machine learning algorithms using the Kaggle Diabetes Dataset to optimize prediction accuracy.', 
//     slug: 'diabetes-prediction-ml',
//     image: '/dia.jpg' // Add the project image
//   },
//   { 
//     id: 4, 
//     title: 'Personalized Mood-Based Movie Recommendation System', 
//     description: 'Developed a unique recommendation platform to suggest movies tailored to users moods. Integrated a mood slider and mood-based filters to create personalized watchlists. Utilized user mood history and advanced filtering techniques to enhance recommendations.', 
//     slug: 'mood-based-movie-recommendation',
//     image: '/mov.jpg' // Add the project image
//   }
// ];

// import ProjectCard from '../components/ProjectCard';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const projects = [
//   { 
//     id: 1, 
//     title: 'House Price Prediction System for Real Estate', 
//     description: 'Developed an automated machine learning system to assist real estate companies in predicting house prices with precision. Analyzed multiple algorithms using the Boston House dataset from Kaggle to improve prediction accuracy.', 
//     slug: 'house-price-prediction-ML',
//     image: '/hou.jpg' 
//   },
//   { 
//     id: 2, 
//     title: 'Tomato Leaf Disease Detection using Deep Learning', 
//     description: 'Designed a hybrid deep learning model combining CNN and MLP to detect diseases in tomato leaves with 99.36% accuracy. Utilized the PlantVillage dataset and a self-collected field dataset to enhance model robustness.', 
//     slug: 'tomato-leaf-disease-detection',
//     image: '/tomato.jpg' 
//   },
//   { 
//     id: 3, 
//     title: 'Early Detection of Diabetes using Machine Learning', 
//     description: 'Built a system to identify diabetes at early stages, enabling timely preventive measures. Explored various machine learning algorithms using the Kaggle Diabetes Dataset to optimize prediction accuracy.', 
//     slug: 'diabetes-prediction-ml',
//     image: '/dia.jpg' 
//   },
//   { 
//     id: 4, 
//     title: 'Personalized Mood-Based Movie Recommendation System', 
//     description: 'Developed a unique recommendation platform to suggest movies tailored to users moods. Integrated a mood slider and mood-based filters to create personalized watchlists. Utilized user mood history and advanced filtering techniques to enhance recommendations.', 
//     slug: 'mood-based-movie-recommendation',
//     image: '/mov.jpg' 
//   }
// ];

// export default function Projects() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
//       {/* Header */}
//       <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
//         <Header />
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow pt-20 sm:pt-24 px-6 sm:px-8">
//         <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
//           My Projects
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transform transition duration-300"
//               style={{ minHeight: '400px' }} // Ensures adequate height for all content
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="h-48 w-full object-cover"
//               />
//               <div className="p-6">
//                 <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
//                   {project.title}
//                 </h2>
//                 <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
//                   {project.description}
//                 </p>
//                 <a
//                   href={`/projects/${project.slug}`}
//                   className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-800"
//                 >
//                   Read More →
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white dark:bg-gray-800 shadow">
//         <Footer />
//       </footer>
//     </div>
//   );
// }
import ProjectCard from '../components/ProjectCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

const projects = [
  { 
    id: 1, 
    title: 'Personalized Mood-Based Movie Recommendation System', 
    description: 'Developed a unique recommendation platform to suggest movies tailored to users moods. Integrated a mood slider and mood-based filters to create personalized watchlists. Utilized user mood history and advanced filtering techniques to enhance recommendations.', 
    slug: 'https://www.youtube.com/',
    image: '/mov.jpg' 
  },
  {
    id: 2,
    title: 'Rent a Bike System',
    description: 'Developed a user-friendly platform for renting bikes, streamlining the process for customers and providers. The system features a real-time inventory management system, secure payment integration, and a responsive design for seamless accessibility across devices. Implemented using modern web technologies to ensure reliability and scalability.',
    slug: 'rent-a-bike-system',
    image: '/bike.jpg'
  },
  {
    id: 3,
    title: 'Image Forgery Detection Using Deep Learning',
    description: 'Designed and implemented a deep learning-based system to detect image forgeries with high accuracy. Utilized convolutional neural networks (CNNs) to analyze and identify tampered regions in digital images. Trained and tested the model using datasets of manipulated images, enhancing robustness against various types of forgery techniques.',
    slug: 'image-forgery-detection-deep-learning',
    image: '/forgery.jpg'
  },
  { 
    id: 4, 
    title: 'House Price Prediction System for Real Estate', 
    description: 'Developed an automated machine learning system to assist real estate companies in predicting house prices with precision. Analyzed multiple algorithms using the Boston House dataset from Kaggle to improve prediction accuracy.', 
    slug: 'house-price-prediction-ML',
    image: '/hou.jpg' 
  },
  { 
    id: 5, 
    title: 'Tomato Leaf Disease Detection using Deep Learning', 
    description: 'Designed a hybrid deep learning model combining CNN and MLP to detect diseases in tomato leaves with 99.36% accuracy. Utilized the PlantVillage dataset and a self-collected field dataset to enhance model robustness.', 
    slug: 'tomato-leaf-disease-detection',
    image: '/tomato.jpg' 
  },
  { 
    id: 6, 
    title: 'Early Detection of Diabetes using Machine Learning', 
    description: 'Built a system to identify diabetes at early stages, enabling timely preventive measures. Explored various machine learning algorithms using the Kaggle Diabetes Dataset to optimize prediction accuracy.', 
    slug: 'diabetes-prediction-ml',
    image: '/dia.jpg' 
  },
  
  
  
];

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 sm:pt-24 px-6 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 bg-white dark:bg-gray-800 shadow">
        <Footer />
      </footer>
    </div>
  );
}
