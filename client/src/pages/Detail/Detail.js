import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { urlFor,clientSanity } from "../../clientsanity";
import './Detail.css'
import { BsGithub, BsYoutube} from "react-icons/bs";
import { BiSitemap } from "react-icons/bi";
const Detail = () => {
  // взяли айдишник товара \/
  const { id } = useParams();

 const [posts, setPosts] = useState([]);
 const [post, setPost] = useState({});
// при перезагрузке не подтягиваются все посты, делаю еще запрос
 useEffect(() => {
   const query = `*[_type == "posts"] {
       title,
       text,
       _id,
       mainImage{asset->{url}},
       basis->{name,image{asset->{url}}},
       category->{name,image{asset->{url}}},
       tehnology->{label,image{asset->{url}}},
       notes,
       linkProgect,
       linkGit,
       linkYoutybe,
       slug,
       publishedAt
      }`;
   clientSanity.fetch(query).then((data) => {
     setPosts(data);
   });
 }, []);
// так как посты еще не пришли и выдает андефайн делаю ЮсЭффект с зависимостью от переменной posts
  useEffect(() => {
      const thisPost = posts.find((post) => post._id === id);
      setPost(thisPost);
  }, [posts]);

if(post) {
  return (
    <div className="detail dflex">
      <div className="detail_foto">
        <div className="detail_foto_wrap">
          <img src={post.mainImage && urlFor(post.mainImage)} alt="" />
        </div>

        <div className="detail_contet_filter_wrap dflex">
          {post.basis && (
            <div className="detail_contet_filter_item">
              <div
                style={{
                  color: "#3337b1",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                basis
              </div>
              <img src={post.basis.image.asset.url} alt="" />
              <strong style={{ background: "#3337b1", color: "#fff" }}>
                {post.basis.name}
              </strong>
            </div>
          )}
          {post.category && (
            <div className="detail_contet_filter_item">
              <div
                style={{
                  color: "#79c687",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                category
              </div>
              <img src={post.category.image.asset.url} alt="" />
              <strong style={{ background: "#abf7b9" }}>
                {post.category.name}
              </strong>
            </div>
          )}
          {post.tehnology && (
            <div className="detail_contet_filter_item">
              <div
                style={{
                  color: "rgb(143, 17, 122)",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                tehnology
              </div>
              <img src={post.tehnology.image.asset.url} alt="" />
              <strong style={{ background: "#f3c4f0" }}>
                {post.tehnology.label}
              </strong>
            </div>
          )}
        </div>
      </div>
      <div className="detail_contet">
        {post.title && (
          <div className="detail_contet_title">
            <h1>{post.title}</h1>
          </div>
        )}
        {post.publishedAt && (
          <div className="detail_contet_data">
            <span>дата: {post.publishedAt}</span>
          </div>
        )}

        {post.text && (
          <div className="detail_contet_description mt20">
            <strong>Description: </strong>
            {post.text}
          </div>
        )}
        <div className="detail_contet_notes"></div>
        {post.notes && (
          <div className="detail_contet_notes mt20">
            <h3>Пометки: </h3>
            {post.notes.map((item, i) => (
              <span key={i}>-{item}</span>
            ))}
          </div>
        )}

        <div className="link_wrap mt20 dflex">
          {post.linkGit && (
            <a href={post.linkGit} target="_blank" rel="noopener noreferrer">
              <div className="detail_link_icon">
                <BsGithub />
              </div>
            </a>
          )}
          {post.linkProgect && (
            <a href={post.linkProgect} target="_blank" rel="noopener noreferrer">
              <div className="detail_link_icon">
                <BiSitemap />
              </div>
            </a>
          )}
          {post.linkYoutybe && (
            <a
              href={post.linkYoutybe}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="detail_link_icon">
                <BsYoutube />
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

};

export default Detail;
