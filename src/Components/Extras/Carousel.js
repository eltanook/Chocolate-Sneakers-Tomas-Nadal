const Carousel = () => {
    return (
        <div id="carousel">
         <div id="carouselExampleLight" className="carousel carousel-light slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">

                <div id="slide" className="carousel-item active" data-bs-interval="7000">
                <img src="https://i.pinimg.com/736x/ea/e2/b0/eae2b0cbd83743c40726f3825c141ef9.jpg" alt="Slide 1"/>
                <div className="carousel-caption d-none d-md-block">
                    <h3>Exclusive.</h3>
                </div>
                </div>

                <div id="slide" className="carousel-item" data-bs-interval="7000">
                <img src="https://wallpapercave.com/wp/wp4020962.jpg" alt="Slide 2"/>
                <div className="carousel-caption d-none d-md-block">
                    <h3>Premium.</h3>
                </div>
                </div>

                <div id="slide" className="carousel-item" data-bs-interval="7000">
                <img src="https://i2.wp.com/latterdaysaintinsights.byu.edu/wp-content/uploads/2021/04/FI_Rath_PC_Tobi-scaled.jpg?fit=1024%2C512&ssl=1" alt="Slide 3"/>
                <div className="carousel-caption d-none d-md-block">
                    <h3>Limited.</h3>
                </div>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleLight" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleLight" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

            </div>
        </div>
    )
}

export default Carousel
