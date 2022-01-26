import { toast } from 'react-toastify';


const Membership = () => {
    const thanksToast = () => {
        toast.success('Thank you! Now you will be receiving all our news.', {position: 'top-center', autoClose: 3000} )
    }

    return (    
    <section id='membership'>
    <div className='container'>
    <div className='row'>
        <div className='col-lg-6 col-md-8 text-center mx-auto'>
            <h2>Get Product Updates</h2>
            <p className='text-white'>Write your Email here and recieve all our news, or create an account so as to become a memer of the Chocolate Club.</p>
            <div className='input-group'>
                <form action='#' className='w-100'>
                    <input type='email' className='form-control' name='email' placeholder='Email Address Here...' required/>      
                    <button className='btn btn-main btn-submit' type='submit' onClick={thanksToast}>Receive our news</button>
                </form>
            </div>
        </div>
    </div>
    </div>    
    </section>  
    )
}

export default Membership
