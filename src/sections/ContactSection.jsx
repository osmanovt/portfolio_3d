import React from 'react';
import TitleHeader from '../components/TitleHeader.jsx';
import ContactExperience from '../components/models/contact/ContactExperience.jsx';

function ContactSection () {
  const handleChange = () => {

  }

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
      <div className="mt-16 grid-12-cols">
        <div className="xl:col-span-5">
          <div className="flex-center card-border rounded-xl p-10">
            <form className="w-full flex flex-col gap-7">
              <div>
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="What’s your good name?"
                  // value={formData.name}
                  // onChange={handleChange}\
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Your email</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="What’s your email address?"
                  // value={formData.name}
                  // onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"

                  placeholder="How can I help you?"
                  // value={formData.name}
                  // onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">
                <div className="cta-button group">
                  <div className="bg-circle" />
                  <p className="text">Send Message</p>
                  <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow"/>
                  </div>
                </div>
              </button>
            </form>
          </div>
        </div>
        <div className="xl:col-span-7 min-h-96">
          <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden">
            <ContactExperience />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default ContactSection;
