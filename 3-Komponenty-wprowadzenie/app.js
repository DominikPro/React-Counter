// komponent funkcyjny, bezstanowy (stateless)
const Header = () => {
  return <h1>Witaj na stronie </h1>;
};

// komponent klasowy, stanowy (stateful)

class Blog extends React.Component {
  state = {
    number: 0
  };
  render() {
    return (
      <section>
        <h2>Artykuł</h2>
        <p>
          lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem{" "}
        </p>
      </section>
    );
  }
}

const App = () => {
  return (
    <>
      <Header />
      <Blog />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
