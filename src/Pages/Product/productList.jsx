import React, { useState } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const AllProducts = () => {
  // Initialize with demo data
  const [blogs, setBlogs] = useState([
    {
      _id: "1",
      title: "Product 1",
      author: "Author 1",
      date: "2024-08-01",
      category: "Category 1",
      description: "This is a description for product 1 that might be long.",
      image: "https://via.placeholder.com/100",
    },
    {
      _id: "2",
      title: "Product 2",
      author: "Author 2",
      date: "2024-08-05",
      category: "Category 2",
      description: "This is a description for product 2.",
      image: "https://via.placeholder.com/100",
    },
    {
      _id: "3",
      title: "Product 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for product 3 that is a bit longer than usual.",
      image: "https://via.placeholder.com/100",
    },{
      _id: "3",
      title: "Product 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for product 3 that is a bit longer than usual.",
      image: "https://via.placeholder.com/100",
    },{
      _id: "3",
      title: "Product 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for product 3 that is a bit longer than usual.",
      image: "https://via.placeholder.com/100",
    },{
      _id: "3",
      title: "Product 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for product 3 that is a bit longer than usual.",
      image: "https://via.placeholder.com/100",
    },{
      _id: "3",
      title: "Product 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for product 3 that is a bit longer than usual.",
      image: "https://via.placeholder.com/100",
    },{
      _id: "3",
      title: "Product 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for product 3 that is a bit longer than usual.",
      image: "https://via.placeholder.com/100",
    },{
      _id: "3",
      title: "Product 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for product 3 that is a bit longer than usual.",
      image: "https://via.placeholder.com/100",
    },{
      _id: "3",
      title: "Product 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for product 3 that is a bit longer than usual.",
      image: "https://via.placeholder.com/100",
    },{
      _id: "3",
      title: "Product 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for product 3 that is a bit longer than usual.",
      image: "https://via.placeholder.com/100",
    },{
      _id: "3",
      title: "Product 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for product 3 that is a bit longer than usual.",
      image: "https://via.placeholder.com/100",
    },{
      _id: "3",
      title: "Product 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for product 3 that is a bit longer than usual.",
      image: "https://via.placeholder.com/100",
    },{
      _id: "3",
      title: "Product 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for product 3 that is a bit longer than usual.",
      image: "https://via.placeholder.com/100",
    },{
      _id: "3",
      title: "Product 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for product 3 that is a bit longer than usual.",
      image: "https://via.placeholder.com/100",
    },{
      _id: "3",
      title: "Product 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for product 3 that is a bit longer than usual.",
      image: "https://via.placeholder.com/100",
    },{
      _id: "3",
      title: "Product 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for product 3 that is a bit longer than usual.",
      image: "https://via.placeholder.com/100",
    },{
      _id: "3",
      title: "Product 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for product 3 that is a bit longer than usual.",
      image: "https://via.placeholder.com/100",
    },{
      _id: "3",
      title: "Product 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for product 3 that is a bit longer than usual.",
      image: "https://via.placeholder.com/100",
    },{
      _id: "3",
      title: "Product 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for product 3 that is a bit longer than usual.",
      image: "https://via.placeholder.com/100",
    },{
      _id: "3",
      title: "Product 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for product 3 that is a bit longer than usual.",
      image: "https://via.placeholder.com/100",
    },{
      _id: "3",
      title: "Product 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for product 3 that is a bit longer than usual.",
      image: "https://via.placeholder.com/100",
    },{
      _id: "3",
      title: "Product 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for product 3 that is a bit longer than usual.",
      image: "https://via.placeholder.com/100",
    },{
      _id: "3",
      title: "Product 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for product 3 that is a bit longer than usual.",
      image: "https://via.placeholder.com/100",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState({
    id: null,
    title: "",
    author: "",
    date: "",
    category: "",
  });
  const [deleteId, setDeleteId] = useState(null);

  // Open dialog for edit or add blog
  const handleOpen = (blog) => {
    setCurrentBlog(blog);
    setOpen(true);
  };

  // Close dialog
  const handleClose = () => {
    setOpen(false);
    setCurrentBlog({
      id: null,
      title: "",
      author: "",
      date: "",
      category: "",
    });
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentBlog((prev) => ({ ...prev, [name]: value }));
  };

  // Save blog (add or update)
  const handleSave = () => {
    if (currentBlog.id) {
      setBlogs((prev) =>
        prev.map((blog) => (blog._id === currentBlog.id ? currentBlog : blog))
      );
    } else {
      setBlogs((prev) => [
        ...prev,
        { ...currentBlog, _id: (prev.length + 1).toString() },
      ]);
    }
    handleClose();
  };

  // Open delete confirmation dialog
  const handleDelete = (id) => {
    setDeleteId(id);
    setConfirmOpen(true);
  };

  // Confirm deletion
  const handleConfirmDelete = () => {
    setBlogs((prev) => prev.filter((blog) => blog._id !== deleteId));
    setConfirmOpen(false);
    setDeleteId(null);
  };

  // Cancel deletion
  const handleCancelDelete = () => {
    setConfirmOpen(false);
    setDeleteId(null);
  };

  // Truncate description to a maximum of 4 words
  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 4) {
      return words.slice(0, 4).join(' ') + '...';
    }
    return description;
  };

  return (
    <Container style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        <b>All Products</b>
      </Typography>
      
      <TableContainer component={Paper} style={{ maxHeight: 470, marginTop: "30px" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell><b>Image</b></TableCell>
              <TableCell><b>Title</b></TableCell>
              <TableCell><b>Description</b></TableCell>
              <TableCell><b>Category</b></TableCell>
              <TableCell><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog._id}>
                <TableCell><img src={blog.image} alt="Image" style={{ maxWidth: '32px' }} /></TableCell>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{truncateDescription(blog.description)}</TableCell>
                <TableCell>{blog.category}</TableCell>
                <TableCell style={{ display: "flex" }}>
                  <Tooltip title="Edit Blog">
                    <IconButton color="primary" onClick={() => handleOpen(blog)}>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete Blog">
                    <IconButton color="secondary" onClick={() => handleDelete(blog._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle><b>{currentBlog.id ? "Edit Blog" : "Add Blog"}</b></DialogTitle>
        <DialogContent>
          <DialogContentText>
            {currentBlog.id ? "Update the blog details below:" : "Enter the blog details below:"}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="title"
            label="Blog Title"
            type="text"
            fullWidth
            value={currentBlog.title}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="author"
            label="Author"
            type="text"
            fullWidth
            value={currentBlog.author}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="date"
            label="Date"
            type="date"
            fullWidth
            value={currentBlog.date}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="category"
            label="Category"
            type="text"
            fullWidth
            value={currentBlog.category}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            style={{ backgroundColor: "#38a89d", color: "white" }}
          >
            <b>Cancel</b>
          </Button>
          <Button
            onClick={handleSave}
            color="primary"
            style={{ backgroundColor: "#38a89d", color: "white" }}
          >
            <b>Save</b>
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={confirmOpen} onClose={handleCancelDelete}>
        <DialogTitle><b>Confirm Deletion</b></DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this blog?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary" style={{ backgroundColor: "#38a89d", color: "white" }}>
            <b>Cancel</b>
          </Button>
          <Button
            onClick={handleConfirmDelete}
            color="secondary"
            style={{ backgroundColor: "#38a89d", color: "white" }}
          >
            <b>Delete</b>
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AllProducts;