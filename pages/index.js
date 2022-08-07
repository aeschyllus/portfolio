import {
  FaCss3Alt,
  FaGitAlt,
  FaLaravel,
  FaVolleyballBall,
} from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import {
  SiDjango,
  SiHtml5,
  SiJavascript,
  SiNeovim,
  SiNextdotjs,
  SiRedux,
  SiReduxsaga,
} from "react-icons/si";
import Container from "../components/Container";
import Spacer from "../components/Spacer";

export default function Home() {
  const tools = [
    { id: 1, title: "Neovim", icon: <SiNeovim /> },
    { id: 2, title: "Git", icon: <FaGitAlt /> },
    { id: 3, title: "HTML", icon: <SiHtml5 /> },
    { id: 4, title: "CSS", icon: <FaCss3Alt /> },
    { id: 5, title: "Javascript", icon: <SiJavascript /> },
    { id: 6, title: "React", icon: <GrReactjs /> },
    { id: 7, title: "Next.js", icon: <SiNextdotjs /> },
    { id: 8, title: "Laravel", icon: <FaLaravel /> },
    { id: 9, title: "Django", icon: <SiDjango /> },
    { id: 10, title: "Redux", icon: <SiRedux /> },
    { id: 11, title: "Redux-Saga", icon: <SiReduxsaga /> },
  ];
  const projects = [
    {
      id: 1,
      title: "Haikyuu!!",
      description: "An anime themed web app",
      link: "https://haikyu.netlify.app/",
    },
  ];

  return (
    <Container>
      <Spacer />
      <section className="w-full h-[30%] flex items-center justify-center">
        <div>
          <p>Hi, my name is</p>
          <h1 className="font-bold text-3xl">Mark Anthony Lapada</h1>
          <p className="text-right">Fullstack Developer</p>
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
            <div className="border border-neutral-500 p-4 space-y-4 grid place-items-center">
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
              className="flex items-center justify-around border border-neutral-500 p-4"
            >
              <FaVolleyballBall className="text-5xl" />
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
