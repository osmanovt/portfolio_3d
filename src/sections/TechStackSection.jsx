import React from 'react';
import TitleHeader from '../components/TitleHeader.jsx';
import { techStackIcons, techStackImgs } from '../constants/index.js';
import TechIcon from '../components/models/tech_logos/TechIcon.jsx';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

function TechStackSection () {
  useGSAP(() => {
    gsap.fromTo('.tech-card',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#skills',
          start: 'top center',
        },
      });
  });

  return (
    <section id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🛠️ The Skills I Bring to the Table "
        />
        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div key={icon.name}
                 className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg relative">
              <div className="tech-card-animated-bg"/>
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon icon={icon}/>
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
          {techStackImgs.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg relative"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={icon.imgPath} alt={icon.name}/>
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
