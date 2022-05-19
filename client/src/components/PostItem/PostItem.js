import React from 'react'
import { Link } from "react-router-dom";
import './PostItem.css'

const PostItem = ({item}) => {
  return (
    <div className="post_item_wrap">
      <Link to={`/posts/${item._id}`}>
        <div className="post_item dflex">
          <div className="post_item_foto">
            <img src={item.mainImage.asset.url} alt="" />
          </div>
          <div className="post_item_descr">
            <div className="post_item_title">{item.title}</div>
            <div className="post_item_cat_wrap dflex">
              {item.basis && (
                <div className="post_item_cat dflex">
                  <img src={item.basis.image.asset.url} alt="" />
                  <span
                    style={{ background: "rgb(51, 55, 177)", color: "#fff" }}
                  >
                    {item.basis.name}
                  </span>
                </div>
              )}
              {item.category && (
                <div className="post_item_cat dflex">
                  <img src={item.category.image.asset.url} alt="" />
                  <span style={{ background: "rgb(171, 247, 185)" }}>
                    {item.category.name}
                  </span>
                </div>
              )}
              {item.tehnology && (
                <div className="post_item_cat dflex">
                  <img src={item.tehnology.image.asset.url} alt="" />
                  <span style={{ background: "rgb(243, 196, 240)" }}>
                    {item.tehnology.label}
                  </span>
                </div>
              )}
              {item.site && (
                <div className="post_item_cat dflex">
                  <img src={item.site.image.asset.url} alt="" />
                  <span style={{ background: "rgb(3, 211, 218)" }}>
                    {item.site.name}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PostItem