import React, { useState } from "react";
import { useMovieContext } from "../../context/MovieContext";
import Input from "../shared/Input/Input";
import { generate as id } from "shortid";
import { Redirect } from "react-router-dom";



const AddMovieForm = () => {
  const initialFormData = {
    title: "",
    description: "",
    img: "http://via.placeholder.com/250x250",
    director: "",
    duration: "",
    price: "",
    featured: true,
    _id: id()
  };

  const movieContext = useMovieContext();
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmit, setIsSubmit] = useState(false);
 

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked,
    });
  };


  const handleOnSubmit = (e) => {
    e.preventDefault();
    movieContext.addMovie(formData);
    setIsSubmit({

    })
  }; 
  if(isSubmit) {
    return <Redirect to="/movies" />
  }
  return (
    <div className="AddMovieForm">
      <div className="ui stackable grid">
        <form className="ui form" onSubmit={handleOnSubmit}>
          <div className="ui  grid">
            <div className="twelve wide column">
              <Input
                label="Film title"
                type="text"
                name="title"
                id="title"
                placeholder="film title"
                value={formData.title}
                onChange={handleOnChange}
              />

              <div className="field">
                <label>Film description</label>
                <textarea
                  value={formData.description}
                  onChange={handleOnChange}
                  name="description"
                  id="description"
                  placeholder="film description"
                />
              </div>
            </div>

            <div className="four wide column">
              <img src={formData.img} className="ui image" />
            </div>

            <Input
              className="twelve wide column"
              label="Image"
              type="text"
              name="img"
              id="img"
              placeholder="img"
              value={formData.img}
              onChange={handleOnChange}
            />

            <Input
              className="six wide column"
              label="Director"
              type="text"
              name="director"
              id="director"
              placeholder="film director"
              value={formData.director}
              onChange={handleOnChange}
            />

            <Input
              className="six wide column"
              label="Duration"
              type="number"
              name="duration"
              id="duration"
              placeholder="Duration"
              value={formData.duration}
              onChange={handleOnChange}
            />

            <Input
              className="six wide column"
              label="Price"
              type="number"
              name="price"
              id="price"
              placeholder="price"
              value={formData.price}
              onChange={handleOnChange}
            />

            <div className="six wide column inline field">
              <label htmlFor="featured">Featured</label>
              <input
                type="checkbox"
                name="featured"
                id="featured"
                checked={formData.featured}
                onChange={handleCheckboxChange}
              />
            </div>
          </div>

          <div className="ui fluid buttons mt-2">
            <button className="ui button primary" type="submit">
                Save
            </button>
            <div className="or" />
            <a href="#" className="ui button">
              Hide form
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovieForm;
