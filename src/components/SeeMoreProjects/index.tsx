import React, { useState } from 'react';
import CardProject from '@components/common/card/project';

interface Project {
  id: string;
  data: {
    imgSrc: string;
  };
}

interface SeeMoreProjectsProps {
  projects: Project[];
}

const SeeMoreProjects: React.FC<SeeMoreProjectsProps> = ({ projects }) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-15">
        {projects.slice(0, visibleCount).map((project) => (
          <CardProject key={project.id} imgSrc={project.data.imgSrc} id={project.id} />
        ))}
      </div>
      {visibleCount < projects.length && (
        <button
          className="mt-20 cursor-pointer px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          onClick={handleSeeMore}
        >
          See More
        </button>
      )}
    </div>
  );
};

export default SeeMoreProjects; 