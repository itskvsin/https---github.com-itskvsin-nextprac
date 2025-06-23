import React from "react";
import Carousel from "@/components/Carousel";

const Carousels = () => {
  return (
    <div>
      <div className="h-screen flex items-center justify-center w-screen">
        <Carousel
          images={[
            "https://images.unsplash.com/photo-1749587452499-ea1fd591e63f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
            "https://images.unsplash.com/photo-1750008267598-7f68e1a25ab8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
            "https://images.unsplash.com/photo-1749813482475-3c12a8c4a5bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
          ]}
          speed={10} // slower or faster depending on your need
          // imageWidth={400}
        />
      </div>
    </div>
  );
};

export default Carousels;
