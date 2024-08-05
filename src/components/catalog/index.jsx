import "./catalog.scss"
import Banner from "../../assets/banner2.png"

const Catalog = () => {
    return (
        <div className="catalog">
            <br />
            <div className="title">
                <h1>Bizda bor avtolar</h1>
            </div>
            <br />
            <br />
            <div className="cards">
                <div className="card">
                    <img src={Banner} alt="" />
                    <h1>Jentra</h1>
                    <strong>$12000</strong>
                    <strong>2020</strong>
                    <strong>Malumotlar</strong>
                    <br />
                </div>
                <div className="card">
                    <img src={Banner} alt="" />
                    <h1>Jentra</h1>
                    <strong>$12000</strong>
                    <strong>2020</strong>
                    <strong>Malumotlar</strong>
                    <br />
                </div><div className="card">
                    <img src={Banner} alt="" />
                    <h1>Jentra</h1>
                    <strong>$12000</strong>
                    <strong>2020</strong>
                    <strong>Malumotlar</strong>
                    <br />
                </div>
                <div className="card">
                    <img src={Banner} alt="" />
                    <h1>Jentra</h1>
                    <strong>$12000</strong>
                    <strong>2020</strong>
                    <strong>Malumotlar</strong>
                    <br />
                </div>
                <div className="card">
                    <img src={Banner} alt="" />
                    <h1>Jentra</h1>
                    <strong>$12000</strong>
                    <strong>2020</strong>
                    <strong>Malumotlar</strong>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Catalog
