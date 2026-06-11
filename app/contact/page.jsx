"use client";

import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });


  const [submitted, setSubmitted] =
    useState(false);



  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };



  const handleSubmit = (e) => {

    e.preventDefault();


    if(
      !form.name ||
      !form.email ||
      !form.message
    ){

      alert(
        "Mohon lengkapi data terlebih dahulu"
      );

      return;

    }


    setSubmitted(true);


    setForm({
      name:"",
      email:"",
      subject:"",
      message:""
    });

  };



  return (

    <main className="contact-page">


      <section className="contact-header">

        <span>
          📩 Contact Us
        </span>


        <h1>
          Let's Talk With Us
        </h1>


        <p>
          Punya pertanyaan, saran,
          atau ingin bekerja sama?
          Hubungi tim MovieHub.
        </p>

      </section>




      <section className="contact-container">



        {/* INFORMASI */}

        <div className="contact-info">


          <h2>
            Get In Touch
          </h2>


          <p>
            Kami siap membantu memberikan
            pengalaman terbaik untuk kamu.
          </p>



          <div className="info-card">

            📍
            <div>
              <h3>
                Location
              </h3>

              <p>
                Jakarta, Indonesia
              </p>
            </div>

          </div>




          <div className="info-card">

            📧

            <div>

              <h3>
                Email
              </h3>

              <p>
                support@moviehub.com
              </p>

            </div>

          </div>




          <div className="info-card">

            📞

            <div>

              <h3>
                Phone
              </h3>

              <p>
                +62 812 3456 7890
              </p>

            </div>

          </div>



          <div className="social">

            <button>
              Instagram
            </button>

            <button>
              YouTube
            </button>

            <button>
              TikTok
            </button>

          </div>



        </div>






        {/* FORM */}


        <div className="contact-form">


          {
            submitted && (

              <div className="success">

                ✅ Pesan berhasil dikirim.
                Terima kasih sudah menghubungi kami.

              </div>

            )
          }



          <form
            onSubmit={handleSubmit}
          >


            <input

              type="text"

              name="name"

              placeholder="Nama Lengkap"

              value={form.name}

              onChange={handleChange}

            />



            <input

              type="email"

              name="email"

              placeholder="Email"

              value={form.email}

              onChange={handleChange}

            />



            <input

              type="text"

              name="subject"

              placeholder="Subject"

              value={form.subject}

              onChange={handleChange}

            />



            <textarea

              name="message"

              placeholder="Pesan"

              rows="6"

              value={form.message}

              onChange={handleChange}

            />



            <button
              type="submit"
            >

              Send Message 🚀

            </button>


          </form>


        </div>




      </section>



    </main>

  );

}