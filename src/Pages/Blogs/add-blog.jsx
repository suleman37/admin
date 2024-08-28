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
  "Technology",
  "Lifestyle",
  "Education",
  "Travel",
  "Food",
];

const AddBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
    description: "",
    postImage: "",
    featureImage: "",
    date: new Date(),
  });

  const [categories, setCategories] = useState(initialCategories);
  const [imagePreview, setImagePreview] = useState("");
  const [featureImagePreview, setFeatureImagePreview] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [title, setTitle] = useState("");
  const [auther, setAuther] = useState("");
  const [description, setDescription] = useState("");
  const [shortdescription, setShortDescription] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  console.log({title , auther , description , shortdescription , date , category , openSnackbar , snackbarMessage})
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/blog", blog)
      .then((result) => {
        console.log(result);
        setBlog({
          title: "",
          content: "",
          author: "",
          category: "",
          description: "",
          postImage: "",
          featureImage: "",
          date: new Date(),
        });
        setImagePreview("");
        setFeatureImagePreview("");
        setSnackbarMessage("Blog post added successfully!");
        setOpenSnackbar(true);
      })
      .catch((err) => {
        console.log(err);
        setSnackbarMessage("Failed to add blog post. Please try again.");
        setOpenSnackbar(true);
      });
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value,
    });
  };
  const handleAuther = (e) => {
    setAuther(e.target.value);
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value,
    });
  };
  const handleDesc = (e) => {
    setDescription(e.target.value);
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value,
    });
  };
  const handleShDesc = (e) => {
    setShortDescription(e.target.value);
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value,
    });
  };
  const handleDate = (e) => {
    setDate(e.target.value);
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value,
    });
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value,
    });

    setBlog({
      ...blog,
      category: e.target.value,
    });
  };

  const handleNewCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setBlog({ ...blog, category: newCategory });
      setNewCategory("");
      setDialogOpen(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBlog({
          ...blog,
          postImage: file.name,
        });
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFeatureImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBlog({
          ...blog,
          featureImage: file.name,
        });
        setFeatureImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Container style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        <b>Add New Blog</b>
      </Typography>
      <Paper style={{ padding: 20 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Blog Title"
                name="title"
                value={blog.title}
                onChange={handleTitle}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date"
                type="date"
                name="date"
                value={blog.date}
                onChange={handleDate}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Short Description"
                name="shortdescription"
                value={blog.shortdescription}
                onChange={handleShDesc}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Author"
                name="author"
                value={blog.author}
                onChange={handleAuther}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                multiline
                rows={3}
                value={blog.description}
                onChange={handleDesc}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                component="label"
                fullWidth
                startIcon={<PhotoCamera />}
                style={{ backgroundColor: "#38a89d" }}
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
                style={{ backgroundColor: "#38a89d" }}
              >
                Upload Feature Image
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleFeatureImageChange}
                />
              </Button>
              {featureImagePreview && (
                <img
                  src={featureImagePreview}
                  alt={Image}
                  style={{ marginTop: 10, maxWidth: "100%", height: "auto" }}
                />
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Category</InputLabel>
                <Select value={blog.category} onChange={handleCategoryChange}>
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
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
                onClick={() => setDialogOpen(true)}
                style={{ backgroundColor: "#38a89d" }}
              >
                Add New Category
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ backgroundColor: "#38a89d" }}
              >
                Add Blog Post
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Dialog for adding new category */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Add New Category</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="New Category"
            fullWidth
            value={newCategory}
            onChange={handleNewCategoryChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddCategory} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AddBlog;
