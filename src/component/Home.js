import { useState,useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlog] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !==id);
        setBlog(newBlogs);
    }

    useEffect (()=> {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlog(data);
            })
    }, []);

    return ( 
        <div className="home">
           {blogs && <BlogList blogs={blogs} title = "All Blogs!" handleDelete={handleDelete}/>}
        </div>
     );
}
 
export default Home;
