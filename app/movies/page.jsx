const movies = [
  {
    id: 1,
    title: "Interstellar",
    year: 2014,
    rating: "8.7",
    genre: "Sci-Fi, Adventure",
    duration: "2h 49m",
    country: "USA",
    director: "Christopher Nolan",
    cast: [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain"
    ],
    poster:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description:
      "Seorang pilot melakukan perjalanan melalui wormhole untuk mencari planet baru bagi umat manusia."
  },


  {
    id: 2,
    title: "Avengers: Endgame",
    year: 2019,
    rating: "8.4",
    genre: "Action, Adventure",
    duration: "3h 1m",
    country: "USA",
    director: "Anthony Russo, Joe Russo",
    cast: [
      "Robert Downey Jr.",
      "Chris Evans",
      "Scarlett Johansson"
    ],
    poster:
      "https://image.tmdb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    description:
      "Para Avengers berusaha mengembalikan keadaan setelah kejadian besar yang menghilangkan separuh kehidupan."
  },


  {
    id: 3,
    title: "The Batman",
    year: 2022,
    rating: "7.8",
    genre: "Crime, Action",
    duration: "2h 56m",
    country: "USA",
    director: "Matt Reeves",
    cast: [
      "Robert Pattinson",
      "Zoë Kravitz",
      "Paul Dano"
    ],
    poster:
      "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    description:
      "Batman menghadapi kasus kriminal besar yang mengungkap korupsi di Gotham City."
  },


  {
    id: 4,
    title: "Joker",
    year: 2019,
    rating: "8.3",
    genre: "Drama, Crime",
    duration: "2h 2m",
    country: "USA",
    director: "Todd Phillips",
    cast: [
      "Joaquin Phoenix",
      "Robert De Niro"
    ],
    poster:
      "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    description:
      "Kisah seorang pria yang berubah menjadi sosok kriminal terkenal di Gotham."
  }
];



export default function Movies() {

  return (

    <main className="movies-page">


      <section className="movie-header">

        <span>
          🎬 Movie Collection
        </span>

        <h1>
          Explore Your Favorite Movies
        </h1>

        <p>
          Koleksi film pilihan dengan
          informasi lengkap.
        </p>

      </section>




      <section className="movie-grid">


        {movies.map((movie)=>(


          <article
            className="movie-card"
            key={movie.id}
          >


            <div className="poster">

              <img
                src={movie.poster}
                alt={movie.title}
              />


              <div className="rating">

                ⭐ {movie.rating}

              </div>


            </div>




            <div className="movie-content">


              <h2>
                {movie.title}
              </h2>


              <p className="genre">

                {movie.genre}

              </p>



              <p>
                📅 {movie.year}
                {" | "}
                ⏱ {movie.duration}
              </p>



              <p>
                🌎 {movie.country}
              </p>



              <p>
                🎬 Director:
                <br/>
                <b>
                  {movie.director}
                </b>
              </p>



              <p>
                👥 Cast:
              </p>


              <ul>

                {movie.cast.map(
                  (actor,index)=>(

                  <li key={index}>
                    {actor}
                  </li>

                ))}

              </ul>



              <p className="description">

                {movie.description}

              </p>


            </div>


          </article>


        ))}


      </section>


    </main>

  );
}