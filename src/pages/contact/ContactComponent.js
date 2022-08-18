import React, { useState, useRef } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";
import emailjs from '@emailjs/browser';

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function Contact(props) {

  const form = useRef();
  const theme = props.theme;
  const [name, setName] = useState();
  const [subject, setSubject] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  const handleSubmit= (e) => {
    e.preventDefault();
    // alert(name + ' - ' + subject + ' - ' +  email + ' - ' + message);

    emailjs.sendForm('service_wx34j79', 'template_mzwjhfa', form.current, 'EvwaE1j2xHA8E1MfR')
      .then((result) => {
          // console.log(result.text);
          alert("Message Sent.");
      }, (error) => {
          // console.log(error.text);
          alert("Failed to send.");
      });
  }

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">

        <Fade bottom duration={1000} distance="40px">
          <div className="">
            <h1 className="blog-heading-text" style={{ color: theme.text }}>
              {ContactData["title"]}
            </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
          </div>
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              {/* <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {ContactData["title"]}
              </h1> */}
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["contact_description"]}
              </p>
              <SocialMedia />
              <br />
              <div className="blogsite-btn-div">
                {/* <a {...styles} className="general-btn" href={greeting.resumeLink}>
                  Request my CV
                </a> */}
              </div>
            </div>
            <div className="blog-heading-img-div">

              <form id="contact-form" ref={form} role="form" action="#" method="post" onSubmit={e => {handleSubmit(e)}} style={{borderBottom: '50px'}}>
                <div className="col-md-12 col-sm-12 mb-3">
                    <input type="text" className="form-control" placeholder="Full Name" id="from_name" name="from_name" required="" onChange={e => setName(e.target.value)} value={name}></input>
                </div>

                <div className="col-md-12 col-sm-12 mb-3">
                    <input type="text" className="form-control" placeholder="Subject" id="subject" name="subject" required="" onChange={e => setSubject(e.target.value)} value={subject}></input>
                </div>

                <div className="col-md-12 col-sm-12 mb-3">
                    <input type="email" className="form-control" placeholder="Your Email" id="email" name="email" required="" onChange={e => setEmail(e.target.value)} value={email}></input>
                </div>

                <div className="col-md-12 col-sm-12 mb-3">
                    <textarea className="form-control" rows="6" placeholder="Your Message" id="message" name="message" style={{resize: 'none'}} required="" onChange={e => setMessage(e.target.value)} value={message}></textarea>
                </div>

                <div className="col-md-6 col-sm-12 mb-3">
                    <button type="submit" className="form-control contact-btn" name="submit" style={{background:'#ce3232', borderRadius: '100px', color: '#ffffff', fontWeight: '500'}}><i className="fa fa-send" id="contact-btn"></i> Send Message</button>
                </div>
              </form>

            </div>
          </div>
        </Fade>

        {/* <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {blogSection["title"]}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {blogSection["subtitle"]}
              </p>
              <div className="blogsite-btn-div">
                <a {...styles} className="general-btn" href={blogSection.link}>
                  My Twitter Profile
                </a>
              </div>
            </div>
            <div className="blog-heading-img-div">
              <BlogsImg theme={theme} />
            </div>
          </div>
        </Fade> */}
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;
