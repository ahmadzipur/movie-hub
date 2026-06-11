"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const [showTrailer, setShowTrailer] = useState(false);

  const [typing, setTyping] = useState("");

  const [visitor, setVisitor] = useState(1200);

  const fullText = "Discover Amazing Movies";

  // Typing animation
  useEffect(() => {
    let index = 0;

    const typingEffect = setInterval(() => {
      setTyping(fullText.substring(0, index));

      index++;

      if (index > fullText.length) {
        clearInterval(typingEffect);
      }

    }, 120);


    return () => clearInterval(typingEffect);

  }, []);


  // Fake visitor counter
  useEffect(() => {

    const counter = setInterval(() => {

      setVisitor((prev) => prev + 1);

    }, 3000);


    return () => clearInterval(counter);

  }, []);



  return (
    <main className="hero">


      <div className="hero-content">


        <span className="badge">
          🎬 #1 Movie Platform
        </span>


        <h1>
          {typing}
          <span className="cursor">
            |
          </span>
        </h1>


        <p>
          Jelajahi ribuan film terbaik dari
          berbagai genre. Temukan rekomendasi
          film favoritmu dengan pengalaman
          modern dan cepat.
        </p>


        <div className="hero-button">


          <Link href="/movies">

            <button className="primary-btn">
              Explore Now 🚀
            </button>

          </Link>



          <button
            className="secondary-btn"
            onClick={() => setShowTrailer(true)}
          >

            Watch Trailer 🎬

          </button>


        </div>



        <div className="stats">


          <div>
            <h2>
              10K+
            </h2>
            <p>
              Movies
            </p>
          </div>


          <div>
            <h2>
              5K+
            </h2>
            <p>
              Users
            </p>
          </div>


          <div>
            <h2>
              {visitor}
            </h2>
            <p>
              Online
            </p>
          </div>


        </div>



      </div>



      <div className="hero-image">

        <div className="movie-box">

          <img
            src="https://picsum.photos/400/550"
            alt="Movie"
          />


          <div className="movie-info">

            <h3>
              Interstellar
            </h3>

            <p>
              ⭐ 9.5 Rating
            </p>

          </div>

        </div>


      </div>




      {showModal && (

        <Modal
          closeModal={() =>
            setShowModal(false)
          }
        />

      )}

      {
        showTrailer && (

          <div className="overlay">

            <div className="trailer-modal">


              <h2>
                🎬 MovieHub Trailer
              </h2>


              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/8Qn_spdM5Zg"
                title="Trailer"
                allowFullScreen
              >
              </iframe>


              <button
                onClick={() =>
                  setShowTrailer(false)
                }
              >

                Close

              </button>


            </div>

          </div>

        )
      }


    </main>
  );
}