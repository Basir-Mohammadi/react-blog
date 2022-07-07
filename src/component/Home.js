import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlog] = useState([
        { title: "my new website", body: "hey buddy..", author: "Ali", id: 1},
        { title: "welocme party", body: "hey buddy..", author: "Ahmad", id: 2},
        { title: "Web dev top tips", body: "hey buddy..", author: "Basir", id: 3}
    ]);

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title = "All Blogs!"/>
           <BlogList blogs={blogs.filter((blog) => blog.author ==='Ahmad')} title = "Ahmad Blog!"/>
        </div>
     );
}
 
export default Home;
