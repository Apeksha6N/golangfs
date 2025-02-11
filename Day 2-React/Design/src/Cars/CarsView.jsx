import Navbar from "./PlaceHeader/Navbar";

export default function CarsView() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="forms-group mb-3">
                    <label htmlFor="number" className="form label">Car Number:</label>
                    <div className="form-control" id="number" >???</div>

                    <div className="forms-group mb-3">
                        <label htmlFor="model" className="form label">Car Model:</label>
                        <div className="form-control" id="model">???</div>
                        <div className="forms-group mb-3">
                            <label htmlFor="type" className="form label">Car Type(Suv/Cuv/Sedan):</label>
                            <div className="form-control" id="type">???</div>
                            <button className="btn btn-primary">View Car</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}