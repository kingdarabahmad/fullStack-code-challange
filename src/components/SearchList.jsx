import React from "react";
import ImageCard from "./ImageCard";
import Loader from "./Loader";

const SearchList = ({ searchResult, isLoading }) => {
  if (isLoading) return <Loader />;
  return (
    <div className="flex flex-wrap gap-4 px-10 py-8 justify-center">
      {searchResult?.map((image) => (
        <ImageCard
          key={image.id}
          imageId={image?.cover_photo?.id}
          imageUrl={image?.cover_photo?.urls?.regular}
          name={image.user.name}
          userName={image.user.username}
          likes={image.cover_photo.likes}
        />
      ))}
    </div>
  );
};

export default SearchList;
