// ✏️ সব কনটেন্ট এই ফাইলে — এখান থেকেই পুরো পোর্টফোলিও বদলানো যাবে।
export type Project = {
  slug: string; name: string; image: string; stack: string[]; description: string;
  live: string; github: string; features: string[]; challenges: string[]; future: string[]; gallery?: string[];
};

export const profile = {
  name: "Rokon Sarker",
  role: "Front-End Developer",
  tagline:
    "Front-End Developer building fast, responsive and pixel-perfect web applications with React.js, Next.js, TypeScript, Tailwind CSS, Node.js and MongoDB. My 12+ years in photo retouching gave me a sharp eye for design and detail.",
  photo: "/images/rokon.jpg",
  roles: ["Front-End Developer", "React & Next.js Developer", "Full Stack Web Developer"],
  stats: [["3", "Web Projects"], ["9+", "Technologies"], ["12+", "Years in Visual Design"]] as [string, string][],
  resumeUrl: "/Rokon_Sarker_Resume.pdf", // public/ ফোল্ডারে এই নামে PDF রাখুন
  email: "odesk.rokon@gmail.com",
  phone: "+8801743928670",
  whatsapp: "8801743928670",
  socials: [
    { label: "GitHub", href: "https://github.com/Rokon70" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rokon-sarker" },
    { label: "Twitter", href: "https://x.com/Rokon_Editor" },
    { label: "Facebook", href: "https://www.instagram.com/rokon_retoucher/" },
  ],
  about: [
    "I’m a Front-End Developer who loves turning ideas into fast, responsive and pixel-perfect web applications. I work with JavaScript, TypeScript, React.js, Next.js and Tailwind CSS, and I build back-ends with Node.js, Express and MongoDB.",
    "I started in graphic design and photo retouching and spent more than 12 years in that field. It gave me a strong eye for layout, colour and detail, which I now bring into every interface I build. With a Diploma in Computer Science, I moved fully into web development.",
    "I enjoy clean, maintainable code, solving problems and learning new tools. Outside coding I enjoy photography and design. I’m detail-oriented, patient and always learning.",
  ],
  facts: [["📍", "Based in Bangladesh"], ["💻", "Front-End & Full Stack Web Developer"], ["🎓", "Diploma in Computer Science"], ["🖼", "12+ years in visual design"]] as [string, string][],
  interests: ["💻 Web Development", "📷 Photography", "🎨 Graphic Design", "🖼 Photo Retouching"],
};

export const skills: Record<string, [string, number][]> = {
  Frontend: [["HTML5 & CSS", 90], ["JavaScript", 88], ["TypeScript", 80], ["React.js", 88], ["Next.js", 82], ["Tailwind CSS", 90]],
  Backend: [["Node.js", 82], ["Express", 82], ["MongoDB", 75], ["REST API", 80], ["PostgreSQL", 72]],
  Tools: [["Git & GitHub", 90], ["VS Code", 95], ["Figma", 70], ["Postman", 80], ["Vercel & Netlify", 85]],
  Design: [["Adobe Photoshop", 95], ["Photo Retouching", 98], ["Adobe Illustrator", 85]],
};

export const education = [
  { period: "2011 – 2013", title: "Diploma in Graphic Design", place: "Graphic Design Institute", note: "Grade: A+" },
  { period: "2006 – 2010", title: "Diploma in Computer Science, Graphic Design & Photo Editing", place: "Kurigram Polytechnic Institute", note: "" },
];

export const experience = [
  { period: "2024 – Present", title: "Front-End Developer", place: "Personal & Freelance Projects", note: "Built StudioSpace, FitLog and Dev Stack with React.js, Next.js, Tailwind CSS and MongoDB." },
  { period: "2023 – Present", title: "Full Stack Web Developer (Freelance)", place: "Fiverr & Direct Clients", note: "End-to-end web apps with Next.js, Express and MongoDB — booking platforms, dashboards and REST APIs." },
  { period: "2023 – 2024", title: "React & Next.js Developer", place: "Remote Projects", note: "Responsive, pixel-perfect UIs and component systems with React.js, TypeScript and Tailwind CSS." },
  { period: "Dec 2022 – Jul 2024", title: "Main Photo Retoucher", place: "Amenex Group (Freelance)", note: "Retouched model and clothing photos; colour consulting and image editing." },
  { period: "Nov 2021 – Jun 2022", title: "Photo Retoucher", place: "Amenex Group (Freelance)", note: "Model and cloth photo editing, colour correction." },
  { period: "Jun 2020 – Jan 2022", title: "Product Photo Editing & Retouching", place: "Freelance", note: "Clipping paths, resizing and retouching for eCommerce clients." },
];

// ✏️ GitHub লিংক ও টেকনোলজি স্ট্যাক নিজের মতো ঠিক করে নিন।
export const projects: Project[] = [
  {
    slug: "studiospace", name: "StudioSpace — Studio Booking Platform", image: "/projects/p1.jpg",
    stack: ["Next.js", "React.js", "Tailwind CSS", "MongoDB"],
    description: "A marketplace where creators discover and book photo studios, sound stages, podcast rooms and music suites by the hour, and hosts list their own spaces and approve booking requests. It includes category filtering, price and location search, hourly booking with a total shown up front, and invoices.",
    live: "https://studiospace-client-fawn.vercel.app/", github: "https://github.com/Rokon70/studiospace-client",
    features: ["Browse studios by category, price and location", "Hourly booking with total and deposit shown up front", "Host flow to list a space and approve booking requests", "Favourites and downloadable invoices", "Light and dark theme"],
    challenges: ["Preventing double-booking of the same time slot.", "Calculating hourly totals and deposits accurately.", "Building filters for category, price and location that stay fast.", "Keeping the booking flow simple on mobile."],
    future: ["Online payments and automatic payouts to hosts.", "Reviews and ratings for studios.", "Calendar sync and email reminders.", "Host analytics dashboard."],
  },
  {
    slug: "fitlog", name: "FitLog — Workout Library & Planner", image: "/projects/p2.jpg",
    stack: ["React.js", "JavaScript", "Tailwind CSS", "REST API"],
    description: "A dark-themed gym companion with a library of twelve lifts covering every major muscle group. Users pick a workout, add it to today's plan, save favourites and watch the week's work add up on the My Plan page.",
    live: "https://fitlog-dusky.vercel.app/", github: "https://github.com/Rokon70/fitlog",
    features: ["Library of 12 lifts with muscle-group tags", "Add workouts to today's plan and save favourites", "Duration, calories and rating on every workout card", "My Plan page that adds up the week's work", "Dark, mobile-friendly interface"],
    challenges: ["Managing plan and saved-workout state across pages.", "Persisting the user's plan between visits.", "Designing a clear dark UI with good contrast.", "Loading workout data smoothly."],
    future: ["User accounts and cloud sync.", "Set, rep and weight logging with progress charts.", "Custom workouts and weekly schedules.", "Rest timer and workout history."],
  },
  {
    slug: "devstrack", name: "Dev Stack — Build Your Ideal Development Stack", image: "/projects/p3.jpg",
    stack: ["HTML5", "CSS", "JavaScript", "React.js"],
    description: "A developer learning platform that helps people explore technologies and build their ideal development stack, with a clean and responsive interface.",
    live: "https://devstrack.netlify.app/", github: "https://github.com/Rokon70/devstrack-client",
    features: ["Explore frontend, backend, database and tooling technologies", "Compare options with ratings and difficulty levels", "Build your own stack with Add to Stack", "Sign in and Sign up", "Responsive layout"],
    challenges: ["Organising technology content so it is easy to browse.", "Keeping the layout consistent across screen sizes.", "Structuring reusable components.", "Optimising load performance."],
    future: ["User accounts and saved stacks.", "Learning roadmaps and resources per technology.", "Stack comparison tool.", "Community contributions."],
  },
];

export const services = [
  { icon: "💻", title: "Web Development", desc: "Responsive websites and web apps built with React.js, Next.js, TypeScript and Tailwind CSS." },
  { icon: "⚙️", title: "Full-Stack Applications", desc: "End-to-end apps with Node.js, Express and MongoDB, from idea to deployment." },
  { icon: "📱", title: "Responsive UI Development", desc: "Pixel-perfect interfaces that work on every screen, from mobile to desktop." },
  { icon: "🔌", title: "API & Database", desc: "REST APIs and MongoDB data models for secure, scalable back-ends." },
  { icon: "🎨", title: "Web & Graphic Design", desc: "Clean, modern designs with a sharp eye for visual detail." },
  { icon: "🖼", title: "Photo Retouching", desc: "Product and portrait photo retouching, backed by 12+ years of experience." },
];

// ✏️ before/after ছবি public/gallery/ ফোল্ডারে রেখে এখানে নাম বদলান (এখন নমুনা ছবি আছে)।
export const gallery = [
  { title: "Handbag retouching", before: "/gallery/bag-before.svg", after: "/gallery/bag-after.svg" },
  { title: "Shoe retouching", before: "/gallery/shoe-before.svg", after: "/gallery/shoe-after.svg" },
];

// ✏️ LinkedIn-এর Recommendations থেকে হুবহু লেখা কপি করে এখানে বসান (এখন সারসংক্ষেপ দেওয়া আছে)।
export const testimonials = [
  { name: "Jill Alexander", role: "Client (LinkedIn recommendation)", text: "Rokon helped us publish a product catalog with hundreds of images. His Photoshop skills are excellent, especially with clipping paths and photo manipulation, and he is responsive and a pleasure to work with." },
  { name: "Caleb Brown", role: "Client (LinkedIn recommendation)", text: "A retoucher you can rely on over the long term: fast with big batches of product images, skilled with lifestyle images, reliable and easy to work with." },
];
