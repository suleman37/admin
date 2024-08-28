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

const AllBlogs = () => {
  // Initialize with demo data
  const [blogs, setBlogs] = useState([
    {
      _id: "1",
      title: "Blog 1",
      author: "Author 1",
      date: "2024-08-01",
      category: "Category 1",
      description: "This is a description for blog 1 that might be long.",
    },
    {
      _id: "2",
      title: "Blog 2",
      author: "Author 2",
      date: "2024-08-05",
      category: "Category 2",
      description: "This is a description for blog 2.",
    },
    {
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },
    {
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },
    {
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },
    {
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },
    {
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },
    {
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },
    {
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
    },{
      _id: "3",
      title: "Blog 3",
      author: "Author 3",
      date: "2024-08-10",
      category: "Category 3",
      description: "This is a description for blog 3 that is a bit longer than usual.",
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

  // Format date to show only the date part
  const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <Container style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        <b>All Blogs</b>
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          handleOpen({
            id: null,
            title: "",
            author: "",
            date: "",
            category: "",
          })
        }
        style={{ marginBottom: 20, backgroundColor: "#38a89d" }}
      >
        <b>Add Blog</b>
      </Button>
      <TableContainer component={Paper} style={{ maxHeight: 400 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell><b>Title</b></TableCell>
              <TableCell><b>Author</b></TableCell>
              <TableCell><b>Date</b></TableCell>
              <TableCell><b>Category</b></TableCell>
              <TableCell><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog._id}>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.author}</TableCell>
                <TableCell>{formatDate(blog.date)}</TableCell>
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

export default AllBlogs;