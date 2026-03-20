import { FaVolleyballBall } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { GrReactjs, GrMoney } from "react-icons/gr";
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";

export const PROJECTS = [
  {
    id: 1,
    title: "Samsung Privacy",
    description: "Samsung's privacy site",
    link: "https://privacy.samsung.com/",
    icon: <MdOutlinePrivacyTip className="text-5xl" />,
    techs: [
      { id: 1, icon: <GrReactjs /> },
      { id: 2, icon: <SiRedux /> },
    ],
  },
  {
    id: 2,
    title: "Xpense API",
    description: "Expense tracker",
    link: "https://github.com/aeschyllus/expensetracker-be",
    icon: <GrMoney className="text-5xl" />,
    techs: [
      { id: 1, icon: <SiNestjs /> },
      { id: 2, icon: <SiPrisma /> },
      { id: 3, icon: <SiDocker /> },
      { id: 4, icon: <SiPostgresql /> },
    ],
  },
  {
    id: 3,
    title: "Haikyuu!!",
    description: "An anime themed web app",
    link: "https://haikyu.netlify.app/",
    icon: <FaVolleyballBall className="text-5xl" />,
    techs: [
      { id: 1, icon: <SiHtml5 /> },
      { id: 2, icon: <SiTailwindcss /> },
    ],
  },
  {
    id: 4,
    title: "Puti",
    description: "E-commerce for apparel",
    link: "https://puti.vercel.app/",
    icon: <FiShoppingBag className="text-5xl" />,
    techs: [
      { id: 1, icon: <SiNextdotjs /> },
      { id: 2, icon: <SiTailwindcss /> },
    ],
  },
];
