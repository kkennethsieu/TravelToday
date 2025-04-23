import Homepage from "./pages/Homepage/Homepage";
import Blogs from "./pages/Blogs/Blogs";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import LoginPage from "./pages/Login/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBlog from "./pages/CreateBlog/CreateBlog";
import BlogPost from "./pages/BlogPost/BlogPost";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1,
    },
  },
});
function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogPost />} />
            <Route
              path="create"
              element={
                <ProtectedRoute>
                  <CreateBlog />
                </ProtectedRoute>
              }
            />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
