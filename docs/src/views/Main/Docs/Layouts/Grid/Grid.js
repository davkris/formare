import React from "react";
import "./Grid.scss";
import { Preview, PreviewDisplay, PreviewHighlight } from "components/Preview";
const Grid = props => {
  return (
    <article id="grids" className="fr-article">
      <div className="fr-article-heading">
        <h2 className="fr-article-title">Grid System</h2>
        <h5 className="fr-article-subtitle">
          Easily build responsive layouts using Formare's own simple grid
          system.
        </h5>
      </div>
      <section className="fr-article-section">
        <div className="heading">
          <h4 className="title">Overview</h4>
        </div>
        <p>
          The grid system is one of the most essential element in any modern
          websites. It makes any website design look good in any device
          resolutions.
        </p>
      </section>
      <section id="usage" className="fr-article-section">
        <div className="heading">
          <h4 className="title">Basic Usage</h4>
        </div>
        <p>Formare's grid system is very simple and easy to implement:</p>
        <ul>
          <li>
            <code>grids</code>: Acts as the wrapper class to the grid layout
            that contain <code>grid</code> elements (notice the plural
            declaration).
          </li>
          <li>
            <code>grid</code>: Add as many as you'd like inside of the grid
            layout (notice the singular declaration).
          </li>
        </ul>
        <Preview>
          <PreviewDisplay>
            <div className="fr-grids-example">
              <div className="grids">
                <div className="grid">First Grid</div>
                <div className="grid">Second Grid</div>
                <div className="grid">Third Grid</div>
              </div>
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<div className="grids">
                <div className="grid">First Grid</div>
                <div className="grid">Second Grid</div>
                <div className="grid">Third Grid</div>
              </div>
            `}
          </PreviewHighlight>
        </Preview>
      </section>
    </article>
  );
};

Grid.propTypes = {};

export default Grid;
