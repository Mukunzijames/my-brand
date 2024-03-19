





const App = () => {
    const [blogs, setBlogs] = React.useState([]);
    
    React.useEffect(() => {
        getAllBlogs();
    }, []);

    const getAllBlogs = async () => {
        try {
            const response = await axios.get('https://my-brand-be-2-iaek.onrender.com/api/blogs');
            const result = response.data;
            console.log(result);
            setBlogs(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    if (blogs.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container-service">
            {blogs.map(blog => (
               
                <div key={blog._id} className="BLOG-LISTS">
                    <img src={blog.image} alt="web" className="web-image"/>
                    <div className="likesssss">
                        <div className="likes">
                            <div><i className='bx bx-like'></i></div>
                            <div><span>{blog.like}</span>likes</div>
                        </div>
                        <div className="unlikes">
                            <div><i className='bx bx-dislike'></i></div>
                            <div><span></span></div>
                        </div>
                        <div className="comments">
                            <div><i className='bx bx-comment-dots'></i></div>
                            <div><span></span>comments</div>
                        </div>
                    </div>
                    <h3 className="web-development">{blog.title}</h3>
                    <p className="blog-p" dangerouslySetInnerHTML={{ __html: blog.desc }}></p>
                    <br/>
                    <a href={`blog.html?id=${blog._id}`}>Learn More</a>
                </div>
               
            ))}
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('container-blog'));