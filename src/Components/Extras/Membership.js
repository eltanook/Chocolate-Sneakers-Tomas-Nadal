
const Membership = () => {

    return (
        
    <section id="membership">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-8 text-center mx-auto">
                    <h2>Get Product Updates</h2>
                    <p className="text-white">Become a member of our community and recieve all our news.</p>
                    <div className="input-group">
                        <form action="#" className="w-100">

                            <input type="email" className="form-control" name="email" placeholder="Email Address Here..." required/>
                            
                            <button className="btn btn-main btn-submit" type="submit" onClick={() => {alert("Welcome to the Chocolate Club. Now you will be receiving all our news about early releases, discounts, and much more !!! : ) ")}}>Become a member</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    )
}

export default Membership
