import { Link } from 'react-router-dom';
import img4 from '../assets/CourseBoximg/img4.jpg';

// Course data array with images and descriptions
const courses = [
  { id: 1, title: "DATA STRUCTURE 1", description: <ul><li>Sorting</li><li>Stack</li><li>Queue</li></ul>, image: img4 },
  { id: 2, title: "DATA STRUCTURE 2", description: <ul><li>Hashing</li><li>Linked List</li><li>Trees</li></ul>, image: img4 },
  { id: 3, title: "MACHINE LEARNING", description: "ML Basics", image: img4 },
  { id: 4, title: "DEEP LEARNING", description: "DL Basics", image: img4 },
];

export default function Courses() {
  return (
    <div className="flex flex-wrap justify-center px-60">
      {courses.map(course => (
        <Link to={`/courses/${course.id}`} key={course.id} className="relative flex flex-col w-1/4 rounded-xl bg-[#575761] bg-clip-border text-white shadow-md m-20">
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <img src={course.image} alt={course.title} className="object-cover w-full h-full" />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-white ">
              {course.title}
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit  text-white antialiased">
              {course.description}
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              data-ripple-light="true"
              type="button"
              className="select-none border rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Get started &gt; 
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

// import styles from '../Stylesheets/CourseBox.module.css'; // Adjust the path as necessary

// // Card data array
// const cards = [
//   {
//     id: 1,
//     header: '',
//     title: "How to make this material card?",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi.",
//     tags: "#HTML #CSS",
//     buttonText: "Get started",
//   },
//   {
//     id: 2,
//     header: '',
//     title: "How to make this material card?",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi.",
//     tags: "#HTML #CSS",
//     buttonText: "Get started",
//   },
//   {
//     id: 3,
//     header: '',
//     title: "How to make this material card?",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi.",
//     tags: "#HTML #CSS",
//     buttonText: "Get started",
//   },
//   {
//     id: 4,
//     header: '',
//     title: "How to make this material card?",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi.",
//     tags: "#HTML #CSS",
//     buttonText: "Get started",
//   }
// ];

// export default function MaterialCard() {
//   return (
//     <div className={styles.container}>
//       {cards.map(card => (
//         <div key={card.id} className={styles.card}>
//           <div className={styles.header}></div>
//           <div className={styles.info}>
//             <p className={styles.title}>{card.title}</p>
//             <p>{card.description}</p>
//           </div>
//           <div className={styles.footer}>
//             <p className={styles.tag}>{card.tags}</p>
//             <button type="button" className={styles.action}>{card.buttonText}</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
