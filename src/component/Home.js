const Home = () => {

    const handleClick = (e) => {
        console.log(e);
    }

    return ( 
        <div className="home">
            <h1>home page </h1>
            <button type="button" onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;