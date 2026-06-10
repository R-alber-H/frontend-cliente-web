import img_1 from "../assets/img_1.png";
import img_2 from "../assets/img_2.png";
import img_3 from "../assets/img_3.png";
import img_4 from "../assets/img_4.png";

export default function Categorias() {
    return (
        <div>
            <div className="mt-4 ">
        <h2>Categorias </h2>
      </div>
            <div className="d-flex flex-right justify-content-evenly mt-3 border p-4 rounded">
                <img className="rounded-5" src={img_1} alt={"ads"} width="230" />
                <img className="rounded-5" src={img_2} alt={"ads"} width="230" />
                <img className="rounded-5" src={img_3} alt={"ads"} width="230" />
                <img className="rounded-5" src={img_4} alt={"ads"} width="230" />
            </div>
        </div>

    )
}