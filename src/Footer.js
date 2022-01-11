const Footer = ({titulo}) => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                {/* primera columna */}
                <div className="col">
                    <h4 id="brand">Chocolate Sneakers ®</h4>
                    <ui className="list-unstyled">
                    <li>Instagram: @choc.sneakers</li>
                    <li>Twitter: @choc.sneakers1</li>
                    <li>Gmail: chocolate.sneakers@gmail.com</li>
                    </ui>
                </div>
                {/* segunda columna */}
                <div className="col">
                    <h4>Contact us</h4>
                    <ui className="list-unstyled">
                    <li>Villa Devoto, CABA, Argentina</li>
                    <li>Avenida Siempreviva 742</li>
                    <li>+54 11 3555 3555</li>
                    </ui>
                </div>
                {/* tercera columna */}
                <div className="col">
                    <h4>Our schedule</h4>
                    <ui className="list-unstyled">
                    <li>Monday-Friday: 8:00 - 20:00</li>
                    <li>Saturday: 12:00 - 19:00</li>
                    <li>Sunday: closed :(</li>
                    </ui>
                </div>
                </div>
                <hr />
                <div className="row">
                <p id="copyright">
                    &copy;{new Date().getFullYear()} Tomás Nadal | All rights reserved 
                </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
