import { render, fireEvent, screen } from "@testing-library/react";
import Task1 from "./Task1";

test("displays 'Hello World!' heading", async () => {
  render(<Task1 />);
  
  // Assert that the "Hello World!" heading is displayed
  const helloWorldHeading = screen.getByRole("heading", { name: "Hello World!" });
  expect(helloWorldHeading).toBeInTheDocument();
});

test("displays list of favorite movies", async () => {
  render(<Task1 />);
  
  // Assert that the list of favorite movies is displayed
  const favoriteMoviesList = screen.getByRole("list", { name: "Favorite Movies" });
  expect(favoriteMoviesList).toBeInTheDocument();
});

test("displays list of other good movies", async () => {
  render(<Task1 />);
  
  // Assert that the list of other good movies is displayed
  const otherGoodMoviesList = screen.getByRole("list", { name: "Other Good Movies" });
  expect(otherGoodMoviesList).toBeInTheDocument();
});

test("displays 'Amadeus' in favorite movies list", async () => {
  render(<Task1 />);
  
  // Assert that 'Amadeus' is displayed in the favorite movies list
  const amadeusListItem = screen.getByRole("listitem", { name: "Amadeus" });
  expect(amadeusListItem).toBeInTheDocument();
});

test("displays 'Stand By Me' in favorite movies list", async () => {
  render(<Task1 />);
  
  // Assert that 'Stand By Me' is displayed in the favorite movies list
  const standByMeListItem = screen.getByRole("listitem", { name: "Stand By Me" });
  expect(standByMeListItem).toBeInTheDocument();
});

test("displays 'Amelie' in favorite movies list", async () => {
  render(<Task1 />);
  
  // Assert that 'Amelie' is displayed in the favorite movies list
  const amelieListItem = screen.getByRole("listitem", { name: "Amelie" });
  expect(amelieListItem).toBeInTheDocument();
});

test("displays 'Alien' in other good movies list", async () => {
  render(<Task1 />);
  
  // Assert that 'Alien' is displayed in the other good movies list
  const alienListItem = screen.getByRole("listitem", { name: "Alien" });
  expect(alienListItem).toBeInTheDocument();
});

test("displays 'Parasite' in other good movies list", async () => {
  render(<Task1 />);
  
  // Assert that 'Parasite' is displayed in the other good movies list
  const parasiteListItem = screen.getByRole("listitem", { name: "Parasite" });
  expect(parasiteListItem).toBeInTheDocument();
});

test("displays 'Annie Hall' in other good movies list", async () => {
  render(<Task1 />);
  
  // Assert that 'Annie Hall' is displayed in the other good movies list
  const annieHallListItem = screen.getByRole("listitem", { name: "Annie Hall" });
  expect(annieHallListItem).toBeInTheDocument();
});
