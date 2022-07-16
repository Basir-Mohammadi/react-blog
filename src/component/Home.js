import { useState,useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlog] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !==id);
        setBlog(newBlogs);
    }

    useEffect (()=> {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch data from resource');
                }
                    return res.json();
            })
            .then(data => {
                setBlog(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
        },1000)
    }, []);

    return ( 
        <div className="home">
            { error && <div> {error } </div>}
            {isPending && <div>Loading......</div>}
           {blogs && <BlogList blogs={blogs} title = "All Blogs!" handleDelete={handleDelete}/>}
        </div>
     );
}
 
export default Home;
