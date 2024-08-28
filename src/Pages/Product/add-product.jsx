import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import axios from "axios";

const initialCategories = [
  "Electronics",
  "Clothing",
  "Home Appliances",
  "Books",
  "Toys",
];

const initialProductState = {
  title: "",
  price: "",
  discount_price: "",
  description: "",
  shortdescription: "",
  category: "",
  image: "",
  featureImage: "",
};

const AddProduct = () => {
  const [product, setProduct] = useState(initialProductState);
  const [imagePreview, setImagePreview] = useState("");
  const [imageFeature, setImageFeature] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState(initialCategories);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleCat = (e) => {
    setProduct({
      ...product,
      category: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct({
          ...product,
          image: file.name,
        });
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct({
          ...product,
          featureImage: file.name,
        });
        setImageFeature(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const DataSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/Product", product)
      .then((result) => {
        console.log(result);
        // Reset the form after successful submission
        setProduct(initialProductState);
        setImagePreview("");
        setImageFeature("");
      })
      .catch((err) => console.log(err));
  };

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setProduct({
        ...product,
        category: newCategory,
      });
      setNewCategory("");
      setDialogOpen(false);
    }
  };

  return (
    <Container style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        <b>Add New Product</b>
      </Typography>
      <Paper style={{ padding: 20 }}>
        <form onSubmit={DataSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Product Name"
                name="title"
                value={product.title}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Product Price"
                name="price"
                type="number"
                value={product.price}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Discount Price"
                name="discount_price"
                type="number"
                value={product.discount_price}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                component="label"
                fullWidth
                onClick={() => setDialogOpen(true)}
                style={{backgroundColor:"#38a89d"}}
              >
                Add New Category
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Product Description"
                name="description"
                multiline
                rows={4}
                value={product.description}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Short Description"
                name="shortdescription"
                value={product.shortdescription}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Category</InputLabel>
                <Select
                  value={product.category}
                  onChange={handleCat}
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                component="label"
                fullWidth
                startIcon={<PhotoCamera />}
                style={{backgroundColor:"#38a89d"}}
              >
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageChange}
                />
              </Button>
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt={Image}
                  style={{ marginTop: 10, maxWidth: "100%", height: "auto" }}
                />
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                component="label"
                fullWidth
                startIcon={<PhotoCamera />}
                style={{backgroundColor:"#38a89d"}}
              >
                Upload Products Images
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleProChange}
                />
              </Button>
              {imageFeature && (
                <img
                  src={imageFeature}
                  alt={Image}
                  style={{ marginTop: 10, maxWidth: "100%", height: "auto" }}
                />
              )}
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" style={{backgroundColor:"#38a89d"}}>
                <b>Add Product</b>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      
      {/* Add Category Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Add New Category</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Category Name"
            type="text"
            fullWidth
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleAddCategory}>Add Category</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AddProduct;