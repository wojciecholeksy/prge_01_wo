import "./App.css";

const lista_uzytkownikow = [
  { imie: "Piotr" },
  { imie: "Szymon" },
  { imie: "Wojciech" },
  { imie: "Maciej" },
];
console.log(lista_uzytkownikow);

function App() {
  return (
    <div className="App">
      {lista_uzytkownikow.map((zolnierz) => {
        return <div>{zolnierz.imie}</div>;
      })}
    </div>
  );
}

export default App;
