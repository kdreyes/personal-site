import React from 'react';

function ShowBlog(props, p) {
  return (
    <div className={`col-md-4 col-sm-6 col-xs-12 ${c.grid}`}>
        <div className={c.cardsmall}>
          <div
            className={c.cardpost__image}
            style={{ backgroundImage: `url(${props.thumbnail})` }}
          >
  
            <div className={c.authorimg}>
              <a
                href={props.profileurl}
                rel="noopener noreferrer"
                target="_blank"
                style={{ backgroundImage: `url(${props.avtar})` }}
              >
                Written By Katrina
              </a>
            </div>
          </div>
  
          <div className="card-body">
            <h5 className="card-title">
              
              <Link
                to={props.title}
                className={c.textfiordblue}
  
              >
                {props.title}
              </Link>
            </h5>
  
            <p className={c.cardText}>{`${ToText(
              props.description.substring(0, 1000)
            )}...`}</p>
            <br />
  
             {props.author}
  
            <br />
            <span className="text-muted">
              {moment(props.pubDate).format("MMM DD, YYYY hh:mm")}
            </span>
          </div>
        </div>
      </div>
    );
  }

export default ShowBlog;