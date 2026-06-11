import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-brand">

                    <h2>
                        🎬 MovieHub
                    </h2>

                    <p>
                        Platform streaming modern untuk
                        menemukan film terbaik dari
                        seluruh dunia.
                    </p>

                </div>



                <div className="footer-menu">

                    <h3>
                        Navigation
                    </h3>


                    <Link href="/">
                        Home
                    </Link>


                    <Link href="/about">
                        About
                    </Link>


                    <Link href="/movies">
                        Movies
                    </Link>


                    <Link href="/contact">
                        Contact
                    </Link>


                </div>



                <div className="footer-social">

                    <h3>
                        Follow Us
                    </h3>

                    <p>
                        📷 Instagram
                    </p>

                    <p>
                        ▶️ YouTube
                    </p>

                    <p>
                        🎵 TikTok
                    </p>

                </div>


            </div>



            <div className="footer-bottom">

                <p>
                    © 2026 MovieHub by Ahmad Zaelani.
                    All Rights Reserved.
                </p>

            </div>


        </footer>
    );
}