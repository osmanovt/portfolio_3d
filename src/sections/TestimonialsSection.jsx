import React from 'react';
import { testimonials } from '../constants/index.js';
import GlowCard from '../components/GlowCard.jsx';
import TitleHeader from '../components/TitleHeader.jsx';

function TestimonialsSection () {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="👥 Client Feedback Highlights"
        />
        <div className="lg:colums-3 md:columns-2 columns-1 mt-16">
          {testimonials.map(({name, imgPath, mentions, review}) => (
            <GlowCard card={{review}}>
              <div  className="flex items-center gap-3">
                <div>
                  <img src={imgPath} alt={name}/>
                </div>
                <div className="">
                  <p className="font-bold">{name}</p>
                  <p className="text-white-50">{mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
