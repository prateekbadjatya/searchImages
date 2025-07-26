import React from "react";
import { useGlobalContext } from "../context";
import customAxios from "../utils/customAxios";
import { useQuery } from "@tanstack/react-query";

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const { data } = await customAxios.get(searchTerm);
      return data;
    },
  });

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (error) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = data?.results ?? [];
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          ></img>
        );
      })}
    </section>
  );
};

export default Gallery;
