import { BsGithub, BsLinkedin } from "react-icons/bs";
import {
  FaCss3Alt,
  FaGitAlt,
  FaLaravel,
  FaVolleyballBall,
} from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { GrReactjs } from "react-icons/gr";
import { IoFlowerOutline } from "react-icons/io5";
import {
  SiDjango,
  SiHtml5,
  SiJavascript,
  SiNeovim,
  SiNextdotjs,
  SiRedux,
  SiReduxsaga,
  SiTailwindcss,
} from "react-icons/si";
import Container from "../components/Container";
import Spacer from "../components/Spacer";

export default function Home() {
  const profileLinks = [
    {
      id: 1,
      icon: <BsLinkedin />,
      path: "https://www.linkedin.com/in/mark-lapada-44647a1b1/",
    },
    { id: 2, icon: <BsGithub />, path: "https://github.com/aeschyllus" },
  ];
  const tools = [
    { id: 1, title: "CSS", icon: <FaCss3Alt /> },
    { id: 2, title: "Django", icon: <SiDjango /> },
    { id: 3, title: "Git", icon: <FaGitAlt /> },
    { id: 4, title: "HTML", icon: <SiHtml5 /> },
    { id: 5, title: "Javascript", icon: <SiJavascript /> },
    { id: 6, title: "Laravel", icon: <FaLaravel /> },
    { id: 7, title: "Neovim", icon: <SiNeovim /> },
    { id: 8, title: "Next.js", icon: <SiNextdotjs /> },
    { id: 9, title: "React", icon: <GrReactjs /> },
    { id: 10, title: "Redux-Saga", icon: <SiReduxsaga /> },
    { id: 11, title: "Redux", icon: <SiRedux /> },
    { id: 12, title: "Tailwind", icon: <SiTailwindcss /> },
  ];
  const projects = [
    {
      id: 1,
      title: "Haikyuu!!",
      description: "An anime themed web app",
      link: "https://haikyu.netlify.app/",
      icon: <FaVolleyballBall className="text-5xl" />,
    },
    {
      id: 2,
      title: "Puti",
      description: "E-commerce for apparel",
      link: "https://puti.vercel.app/",
      icon: <FiShoppingBag className="text-5xl" />,
    },
    {
      id: 3,
      title: "Flowerized (WIP)",
      description: "Online store for a flower shop",
      link: "https://flowerized-staging.herokuapp.com/",
      icon: <IoFlowerOutline className="text-5xl" />,
    },
  ];

  return (
    <Container>
      <Spacer />
      <Spacer />
      <section className="w-full flex items-center justify-center">
        <div>
          <p>Hi, my name is</p>
          <h1 className="font-bold text-3xl">Mark Anthony Lapada</h1>
          <p className="text-right">Fullstack Developer</p>
          <div className="flex items-center justify-end space-x-4 mt-3">
            {profileLinks.map((profileLink) => (
              <a
                key={profileLink.id}
                href={profileLink.path}
                className="text-3xl"
              >
                {profileLink.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="space-y-4">
        <Spacer />
        <h2 className="text-2xl font-bold tracking-widest">/about</h2>
        <p>
          I&apos;m a Fullstack Developer, based in the Philippines, specializing
          in building exceptionally digital experiences. Currently I&apos;m
          focused on building responsive frontend web applications.
        </p>
        <p>
          I graduated with a degree in Bachelor of Science in Information System
          in the Technological University of the Philippines in 2019.
        </p>
        <p>
          Oh, I use Neovim as my code editor by the way. I recently transitioned
          from using VS Code and I&apos;m never going back.
        </p>
      </section>

      <section id="tools" className="space-y-4">
        <Spacer />
        <h2 className="text-2xl font-bold tracking-widest">/tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="border border-neutral-500 dark:border-amber-50 p-4 space-y-4 grid place-items-center"
            >
              <p className="text-4xl">{tool.icon}</p>
              <p className="text-center">{tool.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="space-y-4">
        <Spacer />
        <h2 className="text-2xl font-bold tracking-widest">/projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="flex items-center justify-around border border-neutral-500 dark:border-amber-50 p-4"
            >
              {project.icon}
              <div>
                <p className="font-bold text-xl">{project.title}</p>
                <small>{project.description}</small>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Spacer />
      <section className="grid place-items-center">
        <figure className="text-sm space-y-3">
          <blockquote className="italic">
            &quot;Simplicity is the ultimate sophistication&quot;
          </blockquote>
          <figcaption className="text-right">- Leonardo da Vinci</figcaption>
          <Spacer />
        </figure>
      </section>
    </Container>
  );
}
