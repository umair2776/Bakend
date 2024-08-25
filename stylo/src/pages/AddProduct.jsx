import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    price: '',
    thumbnail: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'thumbnail' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('productName', formData.productName);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('thumbnail', formData.thumbnail);

    try {
      const response = await axios.post("http://localhost:9000/api/admin/product", data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("There was an error uploading the product!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product Name:</label>
        <input
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Thumbnail:</label>
        <input
          type="file"
          name="thumbnail"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
