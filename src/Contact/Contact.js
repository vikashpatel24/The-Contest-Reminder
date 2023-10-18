import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

function Contact(){
    return (
        <section>
        <div class="container">
            <div class="grid">
                <div class="content">
                    <h1>Lets discuss your project now.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad harum dolor. Sit, optio corrupti!</p>
                    <div class="social">
                        <a href="#"><i class="fa fa-facebook-square"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                        <a href="#"><i class="fa fa-linkedin-square"></i></a>
                    </div>
                </div>
                <div class="form">
                    <form action="#">
                        <div class="flex">
                            <input type="text" name="" id="" placeholder="Name"/>
                            <input type="email" name="" id="" placeholder="Email"/>
                        </div>
                        <input type="text" name="" id="" placeholder="Subject"/>
                        <textarea name="" id="" cols="30" rows="8" placeholder="Message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
        <h2>CONTACT</h2>
    </section>
    )
}
export default Contact;