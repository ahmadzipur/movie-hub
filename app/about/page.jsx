export default function About() {
  return (
    <main className="about-page">

      <section className="about-hero">

        <div className="about-content">

          <span className="badge">
            🎬 About MovieHub
          </span>


          <h1>
            Bringing Movies
            <br />
            Closer To You
          </h1>


          <p>
            MovieHub adalah platform digital
            yang menghadirkan pengalaman
            menikmati film secara modern.
            Kami membantu pengguna menemukan
            film terbaik berdasarkan genre,
            rating, dan rekomendasi terbaru.
          </p>


          <button>
            Explore Our Story
          </button>

        </div>


        <div className="about-image">

          <div className="circle">

            🎥

          </div>

        </div>

      </section>



      <section className="about-stats">


        <div className="stat-card">
          <h2>
            10K+
          </h2>

          <p>
            Movies Available
          </p>
        </div>



        <div className="stat-card">
          <h2>
            50K+
          </h2>

          <p>
            Active Users
          </p>
        </div>



        <div className="stat-card">
          <h2>
            99%
          </h2>

          <p>
            Satisfaction
          </p>
        </div>


      </section>




      <section className="features">


        <h2>
          Why Choose MovieHub?
        </h2>



        <div className="feature-grid">


          <div className="feature-card">

            <div>
              🎞️
            </div>

            <h3>
              Huge Collection
            </h3>

            <p>
              Ribuan film dari berbagai
              genre tersedia untuk kamu.
            </p>

          </div>




          <div className="feature-card">

            <div>
              ⭐
            </div>

            <h3>
              Smart Recommendation
            </h3>

            <p>
              Temukan film sesuai
              selera dan rating terbaik.
            </p>

          </div>





          <div className="feature-card">

            <div>
              🚀
            </div>

            <h3>
              Fast Experience
            </h3>

            <p>
              Tampilan cepat, modern,
              dan nyaman digunakan.
            </p>

          </div>



        </div>


      </section>


    </main>
  );
}