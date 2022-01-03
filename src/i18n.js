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
          "People" : "People",
          "Statistics": "Statistics",
          "Movies": "Movies",
          "ludzi": "people",
          "Thereis": "There",
          "ConfirmDelete": "Delete confirmation",
          "ConfirmDeleteMsg": " Are you sure you want to delete movie? This action cannot be undone.", 
          "All": "All",
          "Directors": "Directors",
          "Actors": "Actors",
          "OlderThan50": "Older than 50 years",
          "YoungerThan50": "Younger than 50 years",
          "Directed": "Directed:",
          "NoActors": "There's no actors yet",
          "NoDir": "Unfortunetly, director is not available",
          "are": "are",
          "is": "is",
        }
      },
      pl: {
        translation: {
          "People": "Ludzie",
          "Statistics": "Statystki",
          "Movies": "Filmy",
          "ludzi": "ludzi",
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