import React from 'react';

interface CardProjectProps {
  imgSrc: string;
  id: string;
}

const CardProject: React.FC<CardProjectProps> = ({ imgSrc, id }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <a
      href={`/project/${id}`}
      target="_blank"
      className="rounded-2xl p-2 border border-gray-200 bg-gray-100 h-[500px] cursor-none hover:scale-95 transition-all duration-300 block"
    >
      {imgSrc && !imgError ? (
        <img
          src={imgSrc}
          alt={`Project ${id}`}
          className="w-full h-full object-cover object-left rounded-2xl"
          onError={() => {
            setImgError(true);
          }}
        />
      ) : null}
      <div
        className="w-full h-full rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400"
        style={{ display: imgSrc && !imgError ? 'none' : 'flex' }}
      >
        <span className="text-white text-2xl font-bold">{id}</span>
      </div>
    </a>
  );
};

export default CardProject; 