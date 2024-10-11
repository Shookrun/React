
import { useState } from "react";
import "./index.css"
function App() {
  let [mode,setMode]= useState(" ")
 
  const changeMode = ()=>{
      setMode(mode == " " ? "dark" : " ")
  }
  
  return (
    <div className={mode}>
      <button onClick={changeMode}>{mode == " " ? "☀️" : "🌙"}</button>

      <div>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          architecto ab, impedit perferendis, fugiat minima, deleniti saepe
          reiciendis error numquam accusamus cum! Magnam maiores molestiae
          sapiente harum? Quos, repellendus voluptatum. Ut voluptas sed illo
          asperiores? Officia commodi et corporis sed aperiam distinctio
          excepturi quasi. Animi nulla blanditiis pariatur maiores, laboriosam
          quia magni harum repellat reprehenderit natus expedita aperiam,
          consequatur sint. Vero cum expedita necessitatibus magnam! Veritatis
          error corrupti facilis. Ex possimus ipsa repellat, quidem architecto
          dolor odio dignissimos harum voluptatibus minus obcaecati distinctio
          laudantium culpa perspiciatis exercitationem et quos illo!
          Necessitatibus voluptatum natus animi molestiae incidunt quos saepe
          odit perferendis. Officiis voluptatem rem, quis totam nulla quia!
          Molestiae perferendis ipsam rerum temporibus aspernatur explicabo?
          Reiciendis explicabo dolore nesciunt corrupti magni? Ea, possimus!
          Atque culpa autem non excepturi doloremque repellendus voluptas at,
          corporis quisquam provident! Architecto repudiandae sunt soluta,
          adipisci nihil accusamus esse optio cum ea numquam neque reiciendis
          facilis ad? Placeat et tenetur repellendus eligendi voluptas
          reiciendis cumque, odit, adipisci expedita ab nostrum deserunt aperiam
          similique est, eaque eveniet! A similique debitis dolor quaerat velit
          soluta officia ex iusto asperiores. Vel ad officiis fuga velit natus
          asperiores iusto maxime quidem et totam magni, odio ab earum nam eos
          aut possimus, numquam eum adipisci nostrum, incidunt iure praesentium.
          Pariatur, eius fugit. Amet facilis perferendis ut optio suscipit iste,
          cum enim id cumque ipsa velit neque, dignissimos odit? Et, id.
          Praesentium officia similique porro, harum est asperiores voluptatum
          distinctio consequuntur voluptate quam? Asperiores error quaerat
          voluptas ipsam, iusto ullam natus expedita quo aliquam, corrupti
          beatae, perspiciatis quae consectetur. Aperiam in sint aut ad dolore,
          qui soluta architecto expedita fuga tempora velit quas? Commodi
          ducimus iure, tempora excepturi eligendi facilis, perferendis quidem
          aspernatur sunt explicabo reiciendis eius inventore sed! Deserunt a ab
          cumque omnis quaerat, dolor labore, quia aliquid temporibus incidunt
          molestiae totam.
        </p>
      </div>
    </div>
  );
}

export default App;
