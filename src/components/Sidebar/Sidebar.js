import React from "react";
import "./Sidebar.css";
import { data } from "../../data/data";

export default function Sidebar() {
  return (
    <div>
      <ul className="sidebar">
        {data &&
          data.map((items, index) => {
            return (
              <li key={index}>
                <a href={items.link}>{items.text}</a>
                {
                  <ul className="submenu">
                    {items &&
                      items.investors.map((investor, index) => {
                        return (
                          <li key={index}>
                            <a href={investor.link}>{investor.text}</a>
                          </li>
                        );
                      })}
                  </ul>
                }
              </li>
            );
          })}
      </ul>
      <div className="content">
        <p>
          We at Raghuvansh Agrofarms believe that the true strength of a nation
          lies in the hands that feed, clothe, and fuel the growing world. We
          aim at improving farm and dairy productivity to produce better quality
          products while empowering the ones who are directly involved in the
          production.
        </p>
        <p>
          We can help you with information, technical know-how, finance, and
          strategies to establish sustainable and profitable enterprises in the
          areas of agricultual and dairy-based products. We are equipped with
          cultivable lands, consultancy liasions, technology, and experience in
          Indian business environment.
        </p>
        <p> We help you grow!</p>
      </div>
    </div>
  );
}
