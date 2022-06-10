import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function Foods({ food }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = ["small"];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function addtoCart(){

  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="card" style={{ width: "25rem" }}>
          <h1 className="p-2">{food.name}</h1>
          <img
            src={food.img}
            className="card-img-top"
            alt="..."
            onClick={handleShow}
          />
          <div className="card-body">
            <div className=" d-flex justify-content-between">
              <div className="w-50 mt-3 ">
                <p>Seçenekler</p>
                <select
                  className="form-select"
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {food.varient.map((varient) => (
                    <option value={varient}>{varient}</option>
                  ))}
                </select>
              </div>

              <div className="w-50 mt-3">
                <p>Miktar</p>
                <select
                  className="form-select"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((x, i) => (
                    <option value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="w-100 mt-3">
              <p>Price: {food.prices[0][varient] * quantity} TL</p>
            </div>
            <div className="w-100 mt-3">
              <button className="btn btn-outline-warning w-100" onClick={addtoCart}>
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{food.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img-fluid" src={food.img} />
          <h1>Kategori: {food.category}</h1>
          <p>{food.desc}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Kapat
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Foods;
