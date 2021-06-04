import React, { useState } from "react";
import "./Tabs.css";
import styled from "styled-components";

const Tabs = (props) => {
  const [visibleTab, setVisibleTab] = useState(props.data[0].id);

  const Button = styled.li`
    height: 48px;
    width: 100%;
    border: 1px #393950 solid;
    display: flex;
    align-items: center;
    padding-left: 28px;
    cursor: pointer;
    background: transparent;
    transition: background 0.5s ease;

    &:hover {
      background: ${props.color};
      transition: background 0.5s ease;
    }

    &.tab-title--active {
      background: ${props.color};

      @media screen and (max-width: 750px) {
        background: transparent;
        position relative
      }

      &.tab-title--active:after {
        @media screen and (max-width: 750px) {
            content: "";
            background: ${props.color};
            position absolute;
            width: 100%;
            height: 3px;
            bottom: 0;
        }
      }
    }

    @media screen and (max-width: 750px) {
      border: none;
      border-bottom: 1px #393950 solid;
      padding: 0;
    }
  `;

  const listTitles = props.data.map((item) => (
    <Button
      key={item.id}
      onClick={() => setVisibleTab(item.id)}
      className={visibleTab === item.id ? "title tab-title--active" : "title"}
      style={{}}
    >
      <p>
        <span>{item.id}</span>
        <span>
          {item.title} <span className="subtitle">&nbsp;{item.subtitle}</span>
        </span>
      </p>
    </Button>
  ));

  const listContent = props.data.map((item) => (
    <div
      className="container"
      key={item.id}
      style={visibleTab === item.id ? {} : { display: "none" }}
    >
      <p>{item.content}</p>
      <div>
        <span>Source : </span>
        <a href={item.source} target="_blank" rel="noreferrer">
          <span>Wikipedia</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              fill="#FFF"
              d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
              opacity=".5"
            />
          </svg>
        </a>
      </div>
    </div>
  ));

  const imgContent = props.data.map((item) => (
    <div
      className="img"
      key={item.id}
      style={visibleTab === item.id ? {} : { display: "none" }}
    >
      <img src={item.image} alt={item.title} />
      {item.id === 3 ? (
        <img className="geo-img" src={item.geologyDetail} alt={item.title} />
      ) : (
        ""
      )}
    </div>
  ));

  return (
    <div className="Tabs">
      <div className="tab-image">{imgContent}</div>
      <div className="tab-content">
        <h1>{props.name}</h1>
        {listContent}
      </div>
      <ul className="tab-titles">{listTitles}</ul>
    </div>
  );
};

export default Tabs;
