import { useEffect, useState } from "react";
import axios from "axios";

function About() {

  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");

  const [description, setDescription] = useState("");

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {

    const res = await axios.get(
      "http://localhost:5000/products"
    );

    setProducts(res.data);
  };

  const addProduct = async () => {

    await axios.post(
      "http://localhost:5000/products",
      {
        name,
        description,
      }
    );

    fetchProducts();

    setName("");
    setDescription("");
  };

  const editProduct = (product) => {

    setName(product.name);

    setDescription(product.description);

    setEditId(product._id);
  };

  const updateProduct = async () => {

    await axios.put(
      `http://localhost:5000/products/${editId}`,
      {
        name,
        description,
      }
    );

    fetchProducts();

    setName("");
    setDescription("");

    setEditId(null);
  };

  const deleteProduct = async (id) => {

    await axios.delete(
      `http://localhost:5000/products/${id}`
    );

    fetchProducts();
  };

  return (

    <div style={{ textAlign: "center" }}>

      <h1>Shopping Products</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <button
        onClick={
          editId ? updateProduct : addProduct
        }
      >
        {editId ? "Update Product" : "Add Product"}
      </button>

      <br /><br />

      <table
        border="1"
        cellPadding="10"
        style={{
          margin: "auto"
        }}
      >

        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>

          {products.map((item) => (

            <tr key={item._id}>

              <td>{item.name}</td>

              <td>{item.description}</td>

              <td>
                <button
                  onClick={() => editProduct(item)}
                >
                  Update
                </button>
              </td>

              <td>
                <button
                  onClick={() => deleteProduct(item._id)}
                >
                  Delete
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <footer>
        <h3>
         Krutika,4BD23IS063
        </h3>
      </footer>

    </div>
  );
}

export default About;