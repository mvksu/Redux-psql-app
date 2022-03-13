import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          "People": "People",
          "Statistics": "Statistics",
          // "Movies": "Filmy",
          "ludzi": "ludzi",
          "Thereis": "There",
          "ConfirmDelete": "Confirm Delete",
          "ConfirmDeleteMsg": "Are you sure you want delete this movie? This action cannot be undone",
          "All": "All",
          "Directors": "Directors",
          "Actors": "Actors",
          "OlderThan50": "Older than 50",
          "YoungerThan50": "Younger than 50",
          "View": "View",
          "Add new": "Add new", 
          "Items": "Items",
          "Check": "Check",
          "Back": "Back",
          "Edit": "Edit",
          "Delete": "Delete",
          "Starring in:": "Starring in:",
          "Directed": "Directed:",
          "movies": "movies",
          "are": "are",
          "is": "is",
          "Comedy": "Comedy",
          "Drama": "Drama",
          "Cast": "Cast",
          "NoActors": "There are no actors",
          "NoDir": "There is no director",
          "Director": "Director",
          "Change": "Change",
          "Add": "Add",
          "New Movie": "New Movie",
          "Title": "Title",
          "Release Date": "Release Date",
          "Description": "Description",
          "Image URL": "Image URL",
          "Genre": "Genre",
          "Create": "Create",
          "New Item": "New Item",
          "First Name": "First Name",
          "Last Name": "Last Name",
          "Birth Date": "Birth Date",
          "Nationality": "Nationality",
        }
      },
      pl: {
        translation: {
          "people": "ludzi",
          "People": "Ludzie",
          "Statistics": "Statystki",
          "Movies": "Filmy",
          "Thereis": "Tu jest",
          "ConfirmDelete": "Potwierdź usunięcie",
          "ConfirmDeleteMsg": "Czy jesteś pewny, zeby usunąć ten film? Ta akcja nie moze być cofnięta",
          "All": "Wszyscy",
          "Directors": "Dyrektorzy",
          "Actors": "Aktorzy",
          "OlderThan50": "Starsi niż 50 lat",
          "YoungerThan50": "Młodsi niż 50 lat",
          "View": "Zobacz",
          "Add new": "Dodaj", 
          "Items": "Pozycje",
          "Check": "Sprawdź",
          "Back": "Cofnij",
          "Edit": "Edytuj",
          "Delete": "Usuń",
          "Starring in:": "Znany z:",
          "Directed": "Wyreźyserował:",
          "movies": "filmów",
          "are": "",
          "is": "",
          "Comedy": "Komedia",
          "Drama": "Dramat",
          "Cast": "Obsada",
          "NoActors": "Ten film nie ma aktorów",
          "NoDir": "Ten film nie ma rezysera",
          "Director": "Reźyser",
          "Change": "Zmień",
          "Add": "Dodaj",
          "New Movie": "Nowy Film",
          "Title": "Tytuł",
          "Release Date": "Data produkcji",
          "Description": "Opis",
          "Image URL": "URL grafiki",
          "Genre": "Gatunek",
          "Create": "Utwórz",
          "New Item": "Nowa pozycja",
          "First Name": "Imię",
          "Last Name": "Naziwsko",
          "Birth Date": "Data urodzenia",
          "Nationality": "Narodowość",
        }
      }
    }
  });

export default i18n;