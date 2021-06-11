import React, { useState } from "react";
import { useGlobalContext } from "../context";

function Job({
  company,
  contract,
  featured,
  languages,
  level,
  location,
  logo,
  New,
  position,
  postedAt,
  role,
  tools,
}) {
  const Tags = [role, level, ...languages, ...tools];

  const { AddKeyword } = useGlobalContext();

  return (
    <article className={`${New && featured ? "job active" : "job"}`}>
      <div className="job-content">
        <div className="img-container">
          <img src={logo} alt={company} />
        </div>
        <div className="job-info">
          <div className="job-info-header">
            <h4>{company}</h4>
            {New && <span>NEW!</span>}
            {featured && <span>FEATURED</span>}
          </div>
          <h3>{position}</h3>
          <div className="job-info-footer">
            <p>{postedAt} </p>
            <p>{contract} </p>
            <p>{location} </p>
          </div>
          <hr />
        </div>
      </div>
      <div className="job-tags">
        {Tags.map((item, index) => {
          return (
            <button key={index} onClick={() => AddKeyword(item)}>
              {item}
            </button>
          );
        })}
      </div>
    </article>
  );
}

export default Job;
