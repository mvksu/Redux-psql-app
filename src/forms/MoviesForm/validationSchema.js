import * as yup from 'yup';

export const peopleValidationSchema = yup.object().shape({
  id: yup.string().required(),
  first_name: yup.string().max(60).required(),
  last_name: yup.string().max(60).required(),
  birth_date: yup.date().required(),
  nationality: yup.string().required()
});

export const moviesValidationSchema = yup.object().shape({
  title: yup.string().max(60).required(),
  genre: yup.string().max(50).required(),
  release_date: yup.date().required(),
  description: yup.string().required(),
  image_url: yup.string(),
  director_id: yup.string()
});

export const actorsValidationSchema = yup.object().shape({
  id: yup.string().required(),
  movie_id: yup.string().required(),
  person_id: yup.string().required()
})