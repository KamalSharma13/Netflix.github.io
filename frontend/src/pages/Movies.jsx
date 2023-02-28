import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres } from '../store';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import {onAuthStateChanged} from 'firebase/auth'
import { firebaseauth } from '../utils/firebase-config'

import SelectGenre from '../Components/SelectGenre'
import Slider from '../Components/Slider';

import NotAvailable from '../Components/NotAvaialble';




function Movies() {
    const [isScrolled, setIsScrolled] = useState(false);
    const movies = useSelector((state) => state.netflix.movies);
    const genres = useSelector((state) => state.netflix.genres);
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getGenres());
    }, []);
  
    useEffect(() => {
      if (genresLoaded) {
        dispatch(fetchMovies({ genres, type: "movie" }));
      }
    }, [genresLoaded]);
  
    const [user, setUser] = useState(undefined);
  
    onAuthStateChanged(firebaseauth, (currentUser) => {
      if (currentUser) setUser(currentUser.uid);
      else navigate("/login");
    });
  
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  
    return (
      <Container>
        <div className="navbar">
          <Navbar isScrolled={isScrolled} />
        </div>
        <div className="data">
          <SelectGenre genres={genres} type="movie" />
          {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
        </div>
      </Container>
    );
  }
  
  const Container = styled.div`
    .data {
      margin-top: 8rem;
      .not-available {
        text-align: center;
        color: white;
        margin-top: 4rem;
      }
    }
`  
export default Movies