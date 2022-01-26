const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row" id="footer-info">

                    <div className="col">
                        <a id="brand" href="/#"><h4>Chocolate Sneakers</h4></a>
                        <ul className="list-unstyled">
                        <li>Gmail: chocolate.sneakers@gmail.com</li>
                        <li>Instagram: @choc.sneakers</li>
                        <li>Twitter: @choc.sneakers1</li>
                        </ul>
                    </div>

                    <div className="col">
                        <h4>Contact us</h4>
                        <ul className="list-unstyled">
                        <li>Villa Devoto, CABA, Argentina</li>
                        <li>Avenida Siempreviva 742</li>
                        <li>+54 11 3555 3555</li>
                        </ul>
                    </div>

                    <div className="col">
                        <h4>Our schedule</h4>
                        <ul className="list-unstyled">
                        <li>Monday-Friday: 8:00 - 20:00</li>
                        <li>Saturday: 12:00 - 19:00</li>
                        <li>Sunday: closed</li>
                        </ul>
                    </div>  

                </div>
                <hr />
                <div className="row" id="copyright">
                    <p>&copy;{new Date().getFullYear()} Tomás Nadal | All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
