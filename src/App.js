import "./App.css";
import ViewImg from "./Components/ViewImg/ViewImg";

function App() {
  return (
    <div className="container">
      <ViewImg
        name="Gallery"
        count={4}
        Img_array={[
          {
            src: "https://picsum.photos/id/237/200/300",
            ready: false,
            error: true,
          },
          {
            src: "https://picsum.photos/seed/picsum/200/300",
            ready: true,
            error: false,
          },
          {
            src: "https://picsum.photos/200/300/?blur",
            ready: true,
            error: false,
          },
          {
            src: "https://picsum.photos/200/300.jpg",
            ready: true,
            error: false,
          },
        ]}
      />
        <div className="text">
          <h2>Explorin Academy</h2>
          <p>3+ offline centers</p>
        </div>
      
    </div>
  );
}

export default App;
