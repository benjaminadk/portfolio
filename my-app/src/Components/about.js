import React from 'react';
import { Image } from 'react-bootstrap';

export const about = () => ( <div id="about">
                         <h1>ABOUT</h1>
                            
                            <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1216298/me.jpg" 
                            circle width={175} height={175}
                            alt="ben working on computer"
                            className="circle-image"/>
                            <p id='p1'>I spent most of my early adult life working my way up to the managerial chain of a local pizzeria, in my hometown.  By my mid-thirties I was completely burnt out.  On a random day in May 2017, an add for an online coding school materialized in my browser.  With zero experience and plenty of boredom, I clicked.  From that point on my life has been totally transformed. I left my old job to fully commit to the process of becoming a web developer.  I code every day because I believe that is the price of becoming successful.  Truthfully, I am totally hooked on coding and learning new material at such a rapid pace is a joy.  I wake up everyday fully psyched and full of life.  My long term goals include earning a Bachelor's Degree in Software Development and becoming employed full time as a Junior Developer by May 1 2018.  One year of total commitment!</p>
                            <hr/>
                            <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1216298/IMG_0156.JPG"
                                   circle width={175} height={175}
                                   alt="ben rock climbing"
                                   className="circle-image2"/>
                            <p id='p2'>Before I move on, I need to mention <a href="https://www.freecodecamp.org/challenges/validate-us-telephone-numbers" target="_blank"> FreeCodeCamp. </a> They have been essential to my journey so far.  The scope of their curriculum now is staggering.  The community is thriving, with member totals in the hundreds of thousands from all over the world.  FreeCodeCamp is the foundation upon which my career in software development has been built.  I can only hope that someday my efforts in this field have a reach and impact even remotely close to that of FCC.  I have only been a member for a little over 2 months, and already I have learned so much.  I am excited for the future so long as I continue to follow their program and apply myself I feel like the sky is the limit.  *This is temporary filler text.  While the end product will be in a similar voice, I don't plan on publishing this page officially for a while.  My main focus right now is learning, not working.  That being said I will take on certain freelance work, depending on the project.</p>
                            
                    </div>);