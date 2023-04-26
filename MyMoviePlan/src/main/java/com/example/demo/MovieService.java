package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieService {
	@Autowired
	MovieRepo movierepo;
	
	public Movie insertmovie(Movie movie) {
		return movierepo.save(movie);
	}
	
	public List<Movie> viewallmovie(){
		return movierepo.findAll();
	}
	
	public List<Movie> deletemovie(int movieid){
		if(movierepo.findById(movieid)!=null) {
			movierepo.deleteById(movieid);
			return movierepo.findAll();
		}
		else {
			return null;
		}
	}
	
	public Movie updatemovie(int movieid,Movie newmovie) {
		Movie oldmovie=movierepo.findById(movieid).get();
		if(oldmovie!=null) 
		oldmovie.setMoviename(newmovie.getMoviename());
		oldmovie.setLanguage(newmovie.getLanguage());
		oldmovie.setGenres(newmovie.getGenres());
		oldmovie.setTheatre(newmovie.getTheatre());
		oldmovie.setShowtime(newmovie.getShowtime());
		oldmovie.setShowdate(newmovie.getShowdate());
		oldmovie.setAvailable(newmovie.isAvailable());
		oldmovie.setPrice(newmovie.getPrice());
		return movierepo.save(oldmovie);
	}
	
	public List<Movie> getbymoviename(String moviename){
		return movierepo.findbymoviename(moviename);
	}
	
	public List<Movie> getbymovielanguage(String language){
		return movierepo.findbylanguage(language);
	}
	
	public List<Movie> getbymoviegenres(String genres){
		return movierepo.findbygenres(genres);
	}
	
	public List<Movie> getbyshowdate(String showdate){
		return movierepo.findbyshowdate(showdate);
	}
	
	public List<Movie> getbytheatre(String theatre){
		return movierepo.findbytheatre(theatre);
	}
	
	public List<Movie> getbyticketavailable(boolean available){
		return movierepo.findbyticketavailable(available);
	}
	
	public List<String> getonlytheatres(){
		return movierepo.findonlytheatres();
	}
	
	}
	
