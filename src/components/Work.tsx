import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    name: "Mansha",
    category: "Full Stack / Real Estate",
    tools: "Next.js, Node.js, GSAP, MongoDB, REST APIs, Responsive UI",
    image: "/images/built-trust-image.png",
    link: "https://mansha-new.vercel.app/",
  },

  {
    name: "Sanskar Realty",
    category: "Full Stack / Real Estate",
    tools: "Next.js, Node.js, MongoDB, REST APIs, GSAP, CRM Integration",
    image: "/images/sanksar.png",
    link: "https://www.sanskarrealty.co.in/",
  },

  {
    name: "Novavista Education",
    category: "Full Stack / Education",
    tools: "Next.js, MySQL, Responsive UI, API Integration",
    image: "/images/nova.png",
    link: "https://novavistaeducation.com/",
  },

  {
    name: "SayaHomes",
    category: "Full Stack / Real Estate",
    tools: "PHP, MySQL, GSAP, Admin Panel, FileZilla FTP",
    image: "/images/goldavune.jpg",
    link: "https://sayahomes.com/",
  },

  {
    name: "Trinity-Network",
    category: "Telegram Mini App",
    tools:
      "React.js, TON Wallet, Leaderboard, Referral System, AI Chat",
    image: "/images/owl.jpg",
    link: "#",
  },

  {
    name: "Talktoguruji",
    category: "Frontend / API Integration",
    tools: "React.js, REST APIs, Responsive UI",
    image: "/images/talktoguruji.png",
    link: "https://talktoguruji.com/",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");

      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;

      const rect = box[0].getBoundingClientRect();

      const parentWidth =
        box[0].parentElement!.getBoundingClientRect().width;

      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;

      translateX =
        rect.width * box.length -
        (rectLeft + parentWidth) +
        padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="work-box"
              key={index}
              style={{
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
              }}
            >
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tools and Features</h4>
                <p>{project.tools}</p>
              </div>

              <WorkImage
                image={project.image}
                alt={project.name}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;