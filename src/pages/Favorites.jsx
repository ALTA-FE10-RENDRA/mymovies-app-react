import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";

import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

import { deleteFav } from "../utils/redux/reducer/favSlice";

const Favorites = () => {
  const listFav = useSelector((state) => state.listFav);
  const dispatch = useDispatch();
  console.log(listFav);

  const remove = (movie) => {
    dispatch(deleteFav(movie));
  };
  {
    return (
      <Container>
        <Navbar />
        <div className="w-full h-screen">
          <div className=" grid 2xl:grid-cols-6 bg-opacity-0 stic lg:grid-cols-4 gap-5 p-5 md:grid-cols-3 sm:grid-cols-2 z-0 backdrop-blur-2xl">
            {listFav.map((movie) => {
              return (
                <Card
                  key={movie.id}
                  image={movie.poster_path}
                  title={movie.title}
                  date={movie.release_date}
                  onClick={() => getDetails(movie.id)}
                  actionCard={
                    <BsTrash
                      className={`cursor-pointer hover:scale-110 `}
                      onClick={() => remove(movie)}
                    ></BsTrash>
                  }
                />
              );
            })}
          </div>
        </div>
      </Container>
    );
  }
};

export default Favorites;
