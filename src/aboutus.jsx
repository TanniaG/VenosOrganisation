import React from 'react';
import { Navigation } from './App';
import us from "./Images/image4.jpg";
import work from "./Images/image5.jpg";
import impact from "./Images/image6.jpg";
import school from "./Images/school.jpg";
import './aboutus.css';
import anim1 from "./animations/alms.gif";
import anim2 from "./animations/charity.gif";
import kind from "./animations/kindness.gif";
import talk from "./animations/talk.gif";
import andrew from "./Images/andrew.jpg";
import cyrus from "./Images/cyrus.jpg";
import henry from "./Images/henry.jpg";
import joshua from "./Images/joshua.jpg";
import carolynne from "./Images/caro.jpg";

const AboutUs = () => {
  return (
    <div class="bg-amber-50">
    <div class="mx-auto px-4 py-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-1 gap-y-10">
        <div class="group">
          <img src={school} alt="school" 
          class="aspect-square w-3/5 rounded-lg bg-zinc-800 object-cover mx-auto fade-in"/>
        </div>
        <div class="group">
          <p class="aspect-square w-3/5 rounded-lg bg-transparent object-cover mx-auto text-lg text-zinc-800 fly-in duration-500 "> 
               <strong>Who We Are</strong> <br/>
          The Venos Charity Foundation is a registered charity organization based in Uganda. <br/>
          Venos Charity Foundation was established in 2020 with a clear mission: to empower, promote, and support 
          women, young women, their families, and people with Albinism in developing their full potential. <br/>
          Our mission is to empower and support communities through impactful initiatives by
          recognizing their choices, achieving their goals, and challenging injustice.
         </p>
         
        </div>
        
        <div class="group">
          <p class="aspect-square w-3/5 rounded-lg bg-transparent object-cover mx-auto text-lg text-zinc-800 fly-in duration-500">
               <strong>Our Work</strong> <br/>
           Our services encompass various areas of support.
           We are dedicated to assisting women and families who are struggling by offering them a safe space to express their emotions and providing practical assistance to alleviate their burdens.
           Committed to inclusivity, we ensure that every individual, 
           including those often marginalized, receive the support they deserve. We stand for equality, 
           regardless of race, and actively promote programs that empower people with Albinism, 
           fostering an environment where they can thrive.
           </p>
        </div>
  
        <div class="group">
          <img src= {us} alt="us" class="aspect-square w-3/5 rounded-lg bg-zinc-800 object-cover mx-auto fade-in"/> 
        </div>

      </div>
    </div>
    <section class="bg-zinc-800 py-12">
  <div class="container mx-auto text-center">
    <h2 class="text-3xl font-bold mb-6 text-amber-200">How You Can Help</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">

    <div className="flex flex-col items-center"> 
      <div class="hexagon-frame">
        <img src={anim1} alt="Donate Money" class="gif" />
      </div>
      <h3 class="text-xl font-semibold mt-2 text-amber-600">Donate Money</h3>
    </div>
    <div className="flex flex-col items-center">
      <div class="hexagon-frame">
        <img src={kind} alt="Volunteer Items" class="gif" />
      </div>
      <h3 class="text-xl font-semibold mt-2 text-amber-600 ">Volunteer Items</h3>
     </div>

     <div className="flex flex-col items-center"> 
      <div class="hexagon-frame">
        <img src={talk}alt="Spread the Word" class="gif" />
      </div>
      <h3 class="text-xl font-semibold mt-2 text-amber-600">Spread the Word</h3>
     </div>
    </div>
  </div>
</section>

<section className="meet-the-team py-12 bg-amber-50">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6 text-zinc-800">Meet the Team</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div className="leaf-box ml-8">
        <img src= {andrew} alt="Team Member 1" className="team-image" />
        <h3 className="team-name text-amber-600">Ivan Cyusa</h3>
        <p className="team-position text-2xl text-black ">Founder</p>
      </div>
      <div className="leaf-box">
        <img src={cyrus} alt="Team Member 2" className="team-image" />
        <h3 className="team-name text-amber-600">Andrew Kibeti</h3>
        <p className="team-position text-2xl text-black">Co Founder / Tech Lead</p>
      </div>
      <div className="leaf-box">
        <img src= {joshua} alt="Team Member 3" className="team-image" />
        <h3 className="team-name text-amber-600">Joshua Ngabirano</h3>
        <p className="team-position text-2xl text-black">Co-ordinator</p>
      </div>
      <div className="leaf-box ml-8">
        <img src= {henry} alt="Team Member 4" className="team-image" />
        <h3 className="team-name text-amber-600">Henry Kimbugwe</h3>
        <p className="team-position text-2xl text-black">Projects Manager</p>
      </div>
      <div className="leaf-box">
        <img src= {carolynne} alt="Team Member 5" className="team-image" />
        <h3 className="team-name text-amber-600">Carolynne Masibo</h3>
        <p className="team-position text-2xl text-black">Secretary</p>
      </div>
    </div>
  </div>
</section>
  </div>


  );
}; 

export default AboutUs;