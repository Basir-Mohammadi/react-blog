import { useState } from "react";
const Home = () => {
    const [blogs, setBlog] = useState([
        { title: "my new website", body: "hey buddy..", author: "Ali", id: 1},
        { title: "welocme party", body: "hey buddy..", author: "Ahmad", id: 2},
        { title: "Web dev top tips", body: "hey buddy..", author: "Basir", id: 3}
    ]);

    return ( 
        <div className="home">
           {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
            </div>
            ))}
        </div>
     );
}
 
export default Home;

// import React from "react";
// class Cat extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {sleeping: true};
//     }
//     render() {
//       return (
//         <div>
//           <p>{`The cat is ${this.state.sleeping ? "sleeping" : "eating"}`}</p>
//           <button onClick={() => this.setState({ sleeping: false })}>
//             Wake up!
//           </button>
//         </div>
//       );
//     }
//   }

//   export default Cat;