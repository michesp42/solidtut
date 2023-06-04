import { createSignal } from "solid-js";
import banner from "./assets/banner.png";
import Card from "./components/Card";

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false);

  function toggleTheme() {
    setDarkTheme(!darkTheme());
  }

  return (
    <div class="container m-auto">
      <header
        class="my-4 p-2 text-xl flex items-center gap-4"
        classList={{ "bg-neutral-900": darkTheme(), "text-white": darkTheme() }}
      >
        <span
          class="material-symbols-outlined cursor-pointer"
          onClick={toggleTheme}
        >
          light_mode
        </span>
        <h1>Ninja Merch</h1>
      </header>

      <img class="rounded-md" src={banner} alt="site banner" />

      <div class="grid grid-cols-4 gap-10 my-4">
        <Card rounded={true} flat={false}>
          <h2>Ninja Tee</h2>
          <p>
            Dolor ducimus porro sed sequi ipsum? Sapiente dolore et minima omnis
            provident? Inventore ea ducimus.
          </p>

          <button class="btn">View</button>
        </Card>

        <Card rounded={false} flat={true}>
          <h2>Ninja Hoodie</h2>
          <p>
            Dolor ducimus porro sed sequi ipsum? Sapiente dolore et minima omnis
            provident? Inventore ea ducimus.
          </p>

          <button class="btn">View</button>
        </Card>
      </div>
    </div>
  );
}

export default App;
