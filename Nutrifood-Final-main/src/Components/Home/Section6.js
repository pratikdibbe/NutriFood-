import React from 'react'
import "../CSS/Section6.css"
import github from "../images/github.png"
import insta from "../images/insta.png"
import fb from "../images/fb.png"

export default function Section6() {
  return (
    <>
      <div className='Section6' id='dd'>

        <h4>contact us</h4>
        <p>we would <span style={{ color: "red" }}>&#x2764;</span> to help you</p>
        <div className='row'>
          <div className='col-md-5 c1'>
            <form action="">
              <div>
                <input type="text" placeholder='Name' className='inpname' />
              </div>
              <div>
                <input type="email" placeholder='Email' className='inpmail' />
              </div>
              <div>
                <textarea name="" id="" cols="30" rows="10" placeholder='message' className='inpmsg'></textarea>
              </div>
              <div>
                <input type="submit" className='subbtn' value="send" />
              </div>

            </form>

          </div>
          <div className='col-md-5 c1'>
            <div className='maindiv'>
              <div className='div1'>
                <a href="https://instagram.com/nutri_food_003?igshid=MzNlNGNkZWQ4Mg==" target='_blank'>
                  <img className="insta" src={insta} alt="" />
                </a>
                <a href="https://www.facebook.com/1000094722261884/posts/112317401935668/?substory_index=974290157215141&mibextid=rS40aB7S9Ucbxw6v" target='_blank'>
                  <img src={fb} alt="" />

                </a>
                <a href="https://github.com/pratikdibbe" target='_blank'>
                  <img src={github} alt="" />

                </a>
              </div>
              <div className='div2'>
                <p>+919145216875</p>
                <p>nutrifood@gmail.com</p>
                <p> Sitaburdi-442184, Nagpur, Maharashtra.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
