import React from "react";
import { useGetPhotoListQuery } from "../redux/services/apiSlice";
import ImageCard from "./ImageCard";
import Loader from "./Loader";

const ImageList = () => {
  const { isLoading,data } = useGetPhotoListQuery();
  if (isLoading) return <Loader />;
  return (
    <div className="flex flex-wrap gap-4 px-10 py-8 justify-center">
      {data?.map((image) => (
        <ImageCard
          key={image.id}
          imageId={image.id}
          imageUrl={image.urls.regular}
          name={image.user.name}
          userName={image.user.username}
          likes={image.likes}
        />
      ))}
    </div>
  );
};

export default ImageList;
