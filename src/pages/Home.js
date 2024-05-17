import React, { useState } from "react";
import hero from "../images/woman-reg.webp";
import complaintSubmit from "../images/ComplaintSubmission.jpg";
import statusTrack from "../images/StatusTrack.jpg";
import location from "../images/LocationOfComplaint-removebg-preview.png";
import { useTranslation } from "react-i18next";
import { HomeContent } from "../pages/HomeContent";
import "../Home.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Home = () => {
  const { t } = useTranslation();

  const features = [
    {
      name: [t("serviceP1heading")],
      description: [t("serviceP1para")],
      img: complaintSubmit,
    },
    {
      name: [t("serviceP2heading")],
      description: [t("serviceP2para")],
      img: statusTrack,
    },
    {
      name: [t("serviceP3heading")],
      description: [t("serviceP3para")],
      img: location,
    },
    {
      name: [t("serviceP4heading")],
      description: [t("serviceP4para")],
      img: hero,
    },
  ];

  const slides = [
    {
      id: 1,
      title: [t("aboutusP1heading")],
      description: [t("aboutusP1para")],
    },

    {
      id: 1,
      title: [t("aboutusP2heading")],
      description: [t("aboutusP2para")],
    },

    {
      id: 1,
      title: [t("aboutusP3heading")],
      description: [t("aboutusP3para")],
    },

    {
      id: 1,
      title: [t("aboutusP4heading")],
      description: [t("aboutusP4para")],
    },

    {
      id: 1,
      title: [t("aboutusP5heading")],
      description: [t("aboutusP5para")],
    },

    {
      id: 1,
      title: [t("aboutusP6heading")],
      description: [t("aboutusP6para")],
    },

    {
      id: 1,
      title: [t("aboutusP7heading")],
      description: [t("aboutusP7para")],
    },
  ];

  const faq = [
    {
      id: "1",
      question: [t("faqP1question")],
      answer: [t("faqP1answer")],
      faqanswer: false,
    },

    {
      id: "2",
      question: [t("faqP2question")],
      answer: [t("faqP2answer")],
      faqanswer: "false",
    },

    {
      id: "3",
      question: [t("faqP3question")],
      answer: [t("faqP3answer")],
      faqanswer: "false",
    },

    {
      id: "4",
      question: [t("faqP4question")],
      answer: [t("faqP4answer")],
      faqanswer: "false",
    },

    {
      id: "5",
      question: [t("faqP5question")],
      answer: [t("faqP5answer")],
      faqanswer: "false",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };



  return (
    <div>
      {/* <br /><br /><br />
      className="fixed top-0 left-0 w-full bg-gray-100" */}
      <div>
        <HomeContent />
      </div>

      {/* hero section */}

      <div
        className="justify-center md:flex relative px-0 pt-0 lg:px-0 bg-fixed hero-image-background"
      >
        <div style={{ height: "250px" }}></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-38 lg:py-46" style={{}}>
          <div className="text-center mt-10">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {t("heroHeading")}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              {t("heropara1")}
              <br />
              {t("heropara2")}
            </p>
            <div className="mt-10  gap-x-6">
              <AnchorLink href="#service">
              <button
              className="text-white text-sm border-white"
              style={{
                width: "114px",
                height: "43px",
                border: "1px solid white",
              }}
              >
                {t("herobutton")}
              </button>
                </AnchorLink>
            </div>
          </div>
          <div style={{ height: "50px" }}></div>
        </div>
      </div>
      <br />
      <br />

      {/* our service */}

      <div className="">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div id="service" className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-black-400">
              {t("ourservice")}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t("serviceheading")}
            </p>
            <p className="mt-6 text-center text-base leading-7 text-black">
              {t("servicepara")}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-2xl grid-cols-1 gap-x-20 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 text-justify">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative ring-1 ring-amber-400 text-center bg-white shadow-lg"
                  style={{
                    padding: "10px",
                    borderRadius: "20px",
                  }}
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="flex justify-center">
                      <img
                        src={feature.img}
                        alt="serviceImage"
                        style={{ height: "180px" }}
                      />
                    </div>
                    <br />
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base p-5 leading-7 text-gray-600 text-justify">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* about us */}

      <div className="py-24 sm:py-32">
        <div id="aboutus" className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-black-400">
              {t("aboutus")}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t("aboutusheading")}
            </p>
            <p className="mt-6 text-center text-base leading-7 text-black ">
              {t("aboutuspara")}
            </p>
          </div>
          <br />
          <br />
          <div
            className="max-w-[500px] w-full bg-white shadow-lg justify-center m-auto py-5 px-0 relative group aboutus"
            style={{
              border: "1px solid orange",
              padding: "10px",
              borderRadius: "20px",
              height: "150px",
            }}
          >
            <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
              <div className="flex max-w-xl flex-col items-center justify-center">
                <div className="group relative">
                  <div className="grid grid-cols-3">
                    <div></div>

                    <div
                      className="place-self-center"
                      style={{ width: "230px" }}
                    >
                      <h3 className="mt-3 font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        {slides[currentIndex].title}
                      </h3>
                    </div>

                    <div>
                      <p className="mt-3 text-right">
                        {currentIndex + 1}/{slides.length}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 ml-3 line-clamp-3 text-sm leading-6 text-gray-600 text-justify">
                    {slides[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-1xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <br />
            {/* <div className='flex top-4 justify-center py-2' style={{color: "grey", backgroundColor:"white"}}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div> */}
          </div>
        </div>
      </div>

      {/* faq section */}

      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-xl font-semibold leading-7 text-black-400"> {t("faqheading")} </h2>
        <p className="mt-6 text-center text-base text-black m-10">
          {t("faqpara")}
        </p>

        <div className="grid grid-row-1 m-5">
          <br />

          {faq.map((content) => (
            <article key={content.id} className="my-0 ">
              <hr className="border-black" />
              <div className="grid grid-cols-2">
                <div className="" style={{ width: "300px" }}>
                  <h3 className="mt-5 text-left font-semibold leading-6 text-black">
                    {content.question}
                  </h3>
                </div>

                <div className="justify-center place-self-end">
                  {/* <button onClick={() => {setFaqAnswer(!faqAnswer)}}>
                      <PlusIcon className="h-5 w-5 mt-3" />
                    </button> */}
                </div>
              </div>

              <p className="mt-3 mb-5 text-sm leading-6 text-black text-justify">
                {content.answer}
              </p>
            </article>
          ))}

          <hr className="border-black" />
        </div>
      </div>

      <br />

      {/* contact */}

      <div className="flex justify-center items-center flex-col mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t("contactheading")}
        </p>
        <p className="mt-6 text-center text-base leading-7 text-black ">
          {t("contactpara")}
        </p>
        <button
          className="flex justify-center items-center ring-1 ring-black p-3 mt-4 text-sm"
          style={{  width: "auto", height: "auto" }}
          onClick={() => window.location = 'mailto:empoweringtamilnadu@gmail.com'}
        >
          {/* {t("contactbutton")} */}
          <EnvelopeIcon className="h-6 w-6 pt-1" /> : empoweringtamilnadu@gmail.com
        </button>
        {/* <button
          className="flex p-3 ring-1 ring-black mt-2 text-sm"
          style={{  width: "auto", height: "auto" }}
          onClick={() => window.location = 'mailto:prabhuvasu396@gmail.com'}
        >
          <PhoneIcon className="h-5 w-5" /> : 6383166943
        </button> */}
      </div>
      <br /><br />
      
      {/* <Button href="https://mailto:prabhuvasu396@gmail.com" style={{ color: "#61dafb" }}>
      Click me
    </Button> */}
      {/* footer */}
      
      <hr className="border-black m-5" />
      
      {/* <footer className="mt-5 grid grid-cols-2 gap-y-10" style={{ height: "50px" }}>
        <div className="place-self-start ml-5 text-sm" style={{width:"195px"}} >
          <p>
          © 2024 All Rights Reserved
          </p>
        </div>
        <div className="place-self-end text-sm mb-20 mr-10" >
          <button>Privacy Policy</button>
        </div>
      </footer> */}

      <footer className="flex justify-center mt-5" style={{height:"50px"}}>
        <div className="">
          <p>© 2024 All Rights Reserved</p>
        </div>
      </footer>

      {/* <br /><br />
      <footer className="flex justify-center bg-white m-4 light:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-black-500 sm:text-center light:text-black-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black-500 light:text-black-400 sm:mt-0">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
    </ul>
    </div>
</footer> */}
    </div>
  );
};
