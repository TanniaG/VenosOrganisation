import React from 'react';
import { useState } from 'react';
import albinokids from "./Images/albino.jpg";
import community from "./Images/community.jpg";
import communityposter from "./Images/communityposter.jpg";
import donation from "./Images/donation.jpg";
import pic1 from "./Images/image1.jpg";
import pic2 from "./Images/image2.jpg";
import pic3 from "./Images/image3.jpg";
import christmas from "./Images/xmas.jpg";

const projects = [
    {
      id: 1,
      image: albinokids,
      videoUrl: 'https://www.youtube.com/watch?v=PBqoOkh6Pjg',
      description: 'Albinism is an inherited condition that results in reduced melanin production.It has been a belief across the world, with high frequency in sub-Sahara of Africa. There is a very little research about the lives of people with albinism. The available evidence shows myths regarding their condition. They are feared, viewed with suspicion and believed to havesupernatural powers. This study conducted by venos organization, community based organization basing in Kampala Uganda took time to havea visit to Insingiro Nakivale refugee camp' 
    },
    {
      id: 2,
      image: community,
      videoUrl: 'https://www.youtube.com/watch?v=eywcQSiHfk4&t=1s',
      description: 'Many families that live in takajunge Salaama road, a suburb of Kampala, Uganda, find themselves vulnerable to many risks for example paying for rent, utilities, food, chicken feed, charcoal for cooking, school supplies, vocational training supplies, books among others. The living conditions are squalid and unsanitary. Because of this, Venos Family came up with the idea to help this community with the help of our donors, volunteers and well-wishers. We shared a meal with over 100 households in the festive season.',
    },
    {
      id: 3,
      image: pic1,
      videoUrl: 'https://www.youtube.com/watch?v=EHY_mTjW2O4',
      description: 'On 22nd December 2023, the Venos Charity Foundation partnered with Texas Childrens Hospital to create unforgettable moments for 50 extraordinary children courageously battling cancer at Mulago National Referral Hospital Inpatient Ward. Our festive celebration was a heartwarming success due to generous contributions that made it possible to bring warmth and joy to the children. Take a peek at the heartwarming memories and the radiant smiles that made this event truly magical.',
    },
    {
      id: 4,
      image: pic2,
      videoUrl: 'https://www.youtube.com/watch?v=MjOl_gcGi0o&t=3s',
      description: 'Our dedicated team contribute their time, energy, and talents to our numerous causes. Many families that live in takajunge Salaama road, a suburb of Kampala, Uganda, find themselves vulnerable to many risks for example paying for rent, utilities, food, and school supplies among others. The living conditions are squalid and unsanitary. Because of this, Venos Family came up with the idea to help this community with the help of our donors, volunteers and well-wishers and we ended up sharing a meal with over 30 households in the festive season.',
    },
    {
      id: 5,
      image: pic3,
      videoUrl: 'https://www.youtube.com/watch?v=1cmmL3NkSGk',
      description: 'Our future lies in the hands on our young generation. At Venos. Org, we are working toward the prevention of school dropouts and ensuring our children can achieve their dreams. Our work strives to influence the well-being of our future generation through supporting struggling single mothers. Be part of the dreams One Child Education program as we sponsor a selection of this year’s candidates on their way back to school with scholastic materials. "No Greater Gift There Is, Than A Generous Heart"',
    },
    {
      id: 6,
      image: communityposter,
      videoUrl: communityposter,
      description: 'Community Outreach',
    },
  ];
  
  const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
  
    const openModal = (project) => {
      setSelectedProject(project);
    };
  
    const closeModal = () => {
      setSelectedProject(null);
    };
  
    const nextProject = () => {
      const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
      const nextIndex = (currentIndex + 1) % projects.length;
      setSelectedProject(projects[nextIndex]);
    };
  
    const prevProject = () => {
      const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
      const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
      setSelectedProject(projects[prevIndex]);
    };
  
    return (
      <div className="p-4 bg-amber-50">
        <h2 className="text-4xl font-bold text-amber-500 text-center mt-6 mb-8">Projects Gallery</h2>
        <p className="text-zinc-600 mt-4 text-wrap text-center text-lg" >
          Here are some of the projects Venos Charity Foundation has been a part of over the years. <br/>
          These projects highlight the power of diversity and inclusivity in inspiring change to <br/> 
          marginalized communities all over the world.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-10">
          {projects.map(project => (
            <div key={project.id} className="cursor-pointer" onClick={() => openModal(project)}>
              <img src={project.image} alt={`Project ${project.id}`} className="w-full h-auto rounded-lg" />
            </div>
          ))}
        </div>
  
        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg w-1/2">
              <h2 className="text-xl font-bold">{`Project ${selectedProject.id}`}</h2>
              
              <iframe
                width="100%"
                height="315"
                src={selectedProject.videoUrl.replace('watch?v=', 'embed/')}
                title="YouTube video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <p className="text-zinc-700">{selectedProject.description}</p>

            <div className="flex justify-between mt-4">
              <button onClick={prevProject} className="bg-amber-600 p-2 rounded">Previous</button>
              <button onClick={closeModal} className="bg-red-500 text-white p-2 rounded">Close</button>
              <button onClick={nextProject} className="bg-amber-600 p-2 rounded">Next</button>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;