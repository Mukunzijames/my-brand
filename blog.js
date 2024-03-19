const { useEffect, useState } = React;
const Card = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const _id = searchParams.get("id");
  const token = localStorage.getItem("token");
  console.log(_id, "From blog");
  const [view, setview] = useState([]);
  const [comments, setcomments] = useState([]);
  const [likes, setlikes] = useState("");
  const [commentName, setCommentName] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    getBlog(), getcomment();
    //  postLike()
    // postUnlike()
  }, []);





//fetching viewing single blog
  const getBlog = async (blog) => {
    try {
      const response = await axios.get(
        "https://my-brand-be-2-iaek.onrender.com/api/blogs/" + _id
      );

      const result = response.data;
      console.log(result);
      setview(result);
    } catch (error) {
      console.log("error to fetch single blog", error);
    }
  };



//fetching view comment
  const getcomment = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `https://my-brand-be-2-iaek.onrender.com/api/blogs/${_id}/comments`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      const result = response.data;
      setcomments(result);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };



  //fetching posting like

    const postLike = async () => {
        try {
          const response = await axios.post(
            `https://my-brand-be-2-iaek.onrender.com/api/blogs/${_id}/likes`,{},
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          );

          const result = response.data;
          window.location.reload()
          console.log(result);
        } catch (error) {
          console.log('Unable to like:', error);
        }
      };

//fetching unlike
    const unlike = async() => {
try {
    const response = await axios.post (`https://my-brand-be-2-iaek.onrender.com/api/blogs/${_id}`,{},
    {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    const result = response.data
    window.location.reload()
    console.log(result)
} catch (error) {
    console.log('unable to unlike:',error)
}

      }



 //fetching posting comment
  const postComment = async () => {
    console.log(comment, commentName);
    try {
      const token = localStorage.getItem("token");
  

      const response = await axios.post(
        `https://my-brand-be-2-iaek.onrender.com/api/blogs/${_id}/comments`,
        {
          name: commentName,
          email: "peldrig8@gmail.com",
          commentSent: comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = response.data;
      window.location.reload()
      console.log(result, "from api request");
    } catch (error) {
      console.log("unenabled to comment", error);
    }
  };

  return (
    <div>
      {/* _{" "} */}
      <div class="thou">
        <div class="imago">
          <img src={view.image} alt="" id="imago" />
        </div>
        <div class="container">
          <div class="left">
            <h1 id="title">{view.title}</h1>
            <p
              id="Description"
              class="Description"
              dangerouslySetInnerHTML={{ __html: view.desc }}
            ></p>
          </div>
        </div>
        <div class="liking">
          <div class="like" onClick={postLike}>
            <i class="bx bx-like" ></i>
          </div>
          <span>{view.like}</span>
          <div class="unlike" onClick={unlike}>
            <i class="bx bx-dislike" onclick="unlike()"></i>
          </div>
        </div>
        {comments.map((comment) => (
          <div class="sectioncomment">
            <h1>Recent Comment</h1>
            <div class="recent-comment">
              <div>
                <h5>{comment.name}</h5>
                <h5 class="dating">17,december,2002</h5>
                <h5>{comment.commentSent}</h5>
              </div>
            </div>
          </div>
        ))}
        <div class="signup-container">
          <div class="heading-h">
            <h1>Add comment</h1>
            <p>receive new holiday and special from James</p>
          </div>
          <div >
            <label for="Username">name:</label>
            <input
              onChange={(e) => setCommentName(e.target.value)}
              type="username"
              id="username"
              name="name"
              required
            />
            <label for="email">email:</label>
            <input type="email" id="email" name="email" required />

            <label for="password">comment:</label>
            <input
              type="text"
              onChange={(e) => setComment(e.target.value)}
              id="comment"
              name="comment"
              required
            />

            <button type="submit" onClick={postComment}>
              Send Comment
            </button>
          </div>
          <div class=""></div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Card />, document.getElementById("singles"));
