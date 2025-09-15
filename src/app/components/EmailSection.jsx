"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-8 md:my-18 pt-24 gap-4 mx-14 relative">
      <div className="bg-[radial-gradient(circle_at_center,_var(--color-primary),_transparent)] rounded-full h-70 w-70 z-0 blur-2xl opacity-40 absolute top-138 -left-30 transform -translate-x-1/2 -translate-y-1/2">
      </div>

      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, and my inbox is always
          open. Whether you have a question or just want to say hi, I'll try my
          best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Mayank0204">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/mayank-sangwan-ab6795279/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>

      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm mb-2 font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="mksangwan2026@gmail.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Hello there!"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Type your message here..."
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-primary to-secondary text-white font-medium py-2.5 px-5 rounded-lg w-full hover:opacity-90 transition-all"
          >
            Send Message
          </button>

          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
