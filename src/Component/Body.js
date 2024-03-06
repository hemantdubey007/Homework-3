import './Body.css'
import people from '../Assests/Images/people.jpg'
import Button from './Button';


function Body(){
    return(
        <main>
            <div className='image'>
                <img src = {people}/>
            </div>

            <div className='contact'>
                <h2>Think Health. Think Massage</h2>
                <p>We are open 9am to 6pm; Monday through Sunday.If you would like to schedule an appointment with us, please call us at 987-654-3210 today!</p>
                <div>
                    <Button className="btn">LEARN MORE ABOUT US</Button>
                    <Button className="btn">CONTACT US TODAY</Button>
                </div>
            </div>
            <div className='content'>
                <p>Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage</p>

                <p>We are commited to your long term health and well-being.Our multi-disciplinary clinic provides a balanced approach to a health lifestyle. Enhance your health and improve your performance with out treatments.</p>

                <p>We welcome you to come expolre all the benefits you'll enjoy as one of out balued guests. Our professional staff is committed to offering the best therapy in Mainland</p>
            </div>

            <div className='address'>
                <h3>Family Wellness Massage Therapy</h3>

                <p>9876 Main Street, Suite 123, Mainland, ML12345 Phone:987,654,3210</p>
            </div>

        </main>

    )
}

export default Body;