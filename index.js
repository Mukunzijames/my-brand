const initialState = {
    blogs: [],
    singleblog: {},
  };
  const blogReducer = (state = initialState, actions) => {
    switch (actions.type) {
      case "ADD_BLOGS":
        return {
          ...state,
          blogs: actions.payload,
        };
      case "GET_BLOG":
        return {
          ...state,
          singleblog: actions.payload,
        };
      default:
        return state;
    }
  };
  const store = Redux.createStore(Redux.combineReducers({ blog: blogReducer }));
  const setBlogs = (blogs) => {
    return {
      type: "ADD_BLOGS",
      payload: blogs,
    };
  };
  const getBlog = (blog) => {
    return {
      type: "GET_BLOG",
      payload: blog,
    };
  };
  const App = () => {
    const [loading, setLoading] = React.useState(true);
    const [blogItem, setBlogItem] = React.useState([]);
    React.useEffect(() => {
      const fetchBlogsAndUpdateStore = async () => {
        try {
          const response = await fetch(
            "https://my-brand-be-2-iaek.onrender.com/api/blogs"
          );
          if (response.ok) {
            const blogsData = await response.json();
            store.dispatch(setBlogs(blogsData));
            setBlogItem(store.getState().blog.blogs);
          } else {
            console.error("Failed to fetch blogs:", response.status);
          }
        } catch (error) {
          console.error("Error fetching blogs:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchBlogsAndUpdateStore();
    }, []);
    if (loading) {
      return <div> Loading... </div>;
    }
    return (
      <div className="container-service">
        {blogItem.length === 0 ? (
          <p>no blog at the moment</p>
        ) : (
          blogItem.map((blog) => (
            <div key={blog._id} className="BLOG-LISTS">
              <img src={blog.image} alt="web" className="web-image" />
              <div className="likesssss">
                <div className="likes">
                  <div>
                    <i className="bx bx-like"></i>
                  </div>
                  <div>
                    <span>{blog.like}</span>likes
                  </div>
                </div>
                <div className="unlikes">
                  <div>
                    <i className="bx bx-dislike"></i>
                  </div>
                  <div>
                    <span></span>
                  </div>
                </div>
                <div className="comments">
                  <div>
                    <i className="bx bx-comment-dots"></i>
                  </div>
                  <div>
                    <span></span>comments
                  </div>
                </div>
              </div>
              <h3 className="web-development">{blog.title}</h3>
              <p
                className="blog-p"
                dangerouslySetInnerHTML={{ __html: blog.desc }}
              ></p>
              <br />
              <a href={`blog.html?id=${blog._id}`}>Learn More</a>
            </div>
          ))
        )}
      </div>
    );
  };
  ReactDOM.render(<App />, document.getElementById("container-blog"));