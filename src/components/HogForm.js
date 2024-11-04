import React, { useState } from "react";

function HogForm({ addHog }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    greased: false,
    weight: "",
    "highest medal achieved": "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHog(formData);
    setFormData({
      name: "",
      specialty: "",
      greased: false,
      weight: "",
      "highest medal achieved": "",
      image: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="specialty" placeholder="Specialty" value={formData.specialty} onChange={handleChange} required />
      <label>
        Greased:
        <input type="checkbox" name="greased" checked={formData.greased} onChange={handleChange} />
      </label>
      <input type="number" name="weight" placeholder="Weight" value={formData.weight} onChange={handleChange} required />
      <input type="text" name="highest medal achieved" placeholder="Highest Medal" value={formData["highest medal achieved"]} onChange={handleChange} required />
      <input type="url" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;
