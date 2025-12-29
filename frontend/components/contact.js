"use client";

import Image from "next/image";
import { useState } from "react";
import { submitContact } from "@/lib/api";

export default function Contact({ profile }) {
  const { email, social_links } = profile || {};
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await submitContact(formData);
      if (res) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="section-contact style-1 section spacing-6">
      <div className="row">
        <div className="col-lg-6">
          <div className="heading-section">
            <div className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_40">
              Contact
            </div>
            <div className="title mb_44">
              <h3 className="text_white fw-5 animationtext clip">
                Lets{" "}
                <span className="tf-text s1 cd-words-wrapper text_primary-color">
                  <span className="item-text is-visible">Code</span>
                  <span className="item-text is-hidden">Develop</span>
                  <span className="item-text is-hidden">Design</span>
                </span>
                Incredible
              </h3>
              <h3 className="text_white title fw-5">Work Together</h3>
            </div>
            <div className="heading-title">
              <div className="mb_12">
                <h4 className="text_white fw-4 mb_4">
                  <a
                    href={`mailto:${email || "tarekhn175@gmail.com"}`}
                    className="hover-underline-link link"
                  >
                    {email || "tarekhn175@gmail.com"}
                  </a>
                </h4>
                {/* <p className="text-caption-2 text_secondary-color font-3">
                  Based in San Francisco, CA
                </p> */}
              </div>
              <ul className="list-icon d-flex">
                <li>
                  <a href="#" className="icon-LinkedIn"></a>
                </li>
                <li>
                  <a href="#" className="icon-GitHub"></a>
                </li>
                <li>
                  <a href="#" className="icon-X"></a>
                </li>
                <li>
                  <a href="#" className="icon-dribbble"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <form className="form-contact bs-light-mode" onSubmit={handleSubmit}>
            <div className="d-grid gap_24 mb_24">
              <fieldset>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Message..."
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </fieldset>
            </div>

            <div className="button-submit">
              <button
                className="tf-btn style-1 animate-hover-btn"
                type="submit"
                disabled={status === "loading"}
              >
                <span>{status === "loading" ? "Sending..." : "Get Started !"}</span>
              </button>
            </div>
            {status === "success" && (
              <p className="text-success mt-3">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-danger mt-3">Failed to send message. Please try again.</p>
            )}
            <div className="item-shape">
              <Image
                src="/assets/images/item/small-comet.webp"
                alt="item"
                width={50}
                height={50}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
