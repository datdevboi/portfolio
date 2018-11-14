import React from "react";
import graphqlLogo from "../../images/graphql-logo.png";
const TsIcon = () => {
  return (
    <img
      alt=""
      className="ts-icon"
      src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojMDA3OENGOyIgZD0iTTUxMiwyNTZjMCwyMy4xNTUtMy4wNzIsNDUuNTk5LTguODQsNjYuOTM2Yy0xMy40NzksNDkuODk0LTQxLjY2LDkzLjc0OC03OS42MjEsMTI2LjYzMSAgQzM3OC42NCw0ODguNDY5LDMyMC4wNzMsNTEyLDI1Niw1MTJDMTE0LjYxNSw1MTIsMCwzOTcuMzg1LDAsMjU2UzExNC42MTUsMCwyNTYsMFM1MTIsMTE0LjYxNSw1MTIsMjU2eiIvPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGMkYyRjI7IiBkPSJNNTAzLjE2LDMyMi45MzZjLTEzLjQ3OSw0OS44OTQtNDEuNjYsOTMuNzQ4LTc5LjYyMSwxMjYuNjMxYy0zLjcwOSwwLjE5OS03LjU4NiwwLjI5My0xMS42MDksMC4yOTMgICBjLTUzLjE1NCwwLTgyLjY5My0zMy4yMTctOTcuMzc0LTU4LjEzOGw0OC4xOTEtMjguOTU0YzAsMCwxNi4zOTQsMzQuODM3LDQ3LjEyNSwzNC44MzdjMzAuNzQxLDAsNDMuMDM5LTEwLjI1LDQzLjAzOS0zMy44MTMgICBjMC0yOC42OTMtOTkuMzkxLTM4LjkzMy0xMTQuNzYxLTg4LjExNmMtMTUuMzctNDkuMTgzLDUuMTItMTE4Ljg2OCw3Ni44NTItMTEzLjczN2M0NC44MjYsMy4xOTcsNzAuMDQsMjUuMjEzLDgyLjY1MSw0MS4yNzMgICBsLTQ3LjgxNSwzNC41NDRjLTEwLjI1LTI5LjcwNi01Mi4yNTUtMjkuNzA2LTYwLjQ1OC01LjEyYy04LjE5MiwyNC41OTcsMTkuNDY2LDM4LjkzMyw2Mi41MDYsNTMuMjc5ICAgQzQ3My45OTcsMjkzLjI4Miw0OTEuNzgxLDMwNi44NzYsNTAzLjE2LDMyMi45MzZ6Ii8+Cgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRjJGMkYyOyIgcG9pbnRzPSIzMDAuOTQzLDE2OS43ODYgODMuMTA2LDE2OS43ODYgODMuMTA2LDIyMS4yMDIgMTYyLjkzNSwyMjEuMjAyIDE2Mi45MzUsNDQ0LjQ1ICAgIDIyMS4xMTUsNDQ0LjQ1IDIyMS4xMTUsMjIxLjIwMiAzMDAuOTQzLDIyMS4yMDIgICIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
    />
  );
};

const GraphqlIcon = () => (
  <img src={graphqlLogo} alt="" className="graphql-icon" />
);

export default [
  {
    name: "Sick-Fits",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Sick-Fits</div>
        <div className="portfolio-item__desc">
          A Full-Stack ecommerce site. Build with React(Next.js) for the
          frontend, and grapqhl (Prisma) in the Backend
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-react" />
          <i className="fab fa-js" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://datdevboi-sickfits-next-prod.herokuapp.com/"
          >
            Site
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/datdevboi/sick-fits"
          >
            Github
          </a>
        </div>
      </div>
    )
  },
  {
    name: "Netero-UI",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Netero-UI</div>
        <div className="portfolio-item__desc">
          A set of React components built with TypeScript
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-react" />
          <TsIcon />
          <i className="fab fa-npm" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.npmjs.com/package/netero-ui"
          >
            NPM
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/datdevboi/netero"
          >
            Github
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://festive-panini-87ef18.netlify.com"
          >
            Docs
          </a>
        </div>
      </div>
    )
  },
  {
    name: "Kurama-UI",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Kurama-UI</div>
        <div className="portfolio-item__desc">
          A set of React-Native components built with TypeScript
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-react" />
          <TsIcon />
          <i className="fab fa-npm" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/datdevboi/kurama"
          >
            Github
          </a>
        </div>
      </div>
    )
  },
  {
    name: "ts-graphql-server-boilerplate",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">
          ts-graphql-server-boilerplate
        </div>
        <div className="portfolio-item__desc">
          A TypeScript GraphQL Server with TypeORM boilerplate
        </div>
        <div className="portfolio-item__icon">
          <TsIcon />
          <GraphqlIcon />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/datdevboi/ts-graphql-server-boilerplate"
          >
            Github
          </a>
        </div>
      </div>
    )
  },
  {
    name: "Instagram Clone",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Instagram Clone</div>
        <div className="portfolio-item__desc">
          A simple Instagram clone using React Native
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-react" />
          <i className="fab fa-js" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/datdevboi/instagram_clone"
          >
            Github
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://expo.io/@datdevboi/instagram-clone"
          >
            Try out with Expo
          </a>
        </div>
      </div>
    )
  },
  {
    name: "Slack Clone",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Slack Clone</div>
        <div className="portfolio-item__desc">
          A Full stack Slack clone using React , Apollo Graphql, and Postgres
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-react" />
          <GraphqlIcon />
          <i className="fab fa-js" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/datdevboi/SlackClone"
          >
            Github
          </a>
        </div>
      </div>
    )
  },
  {
    name: "airbnb_clone",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Airbnb Clone</div>
        <div className="portfolio-item__desc">
          A Full stack airbnb clone both React and React Native using
          TypeScript.
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-react" />
          <TsIcon />
          <GraphqlIcon />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/datdevboi/airbnb_clone"
          >
            Github
          </a>
        </div>
      </div>
    )
  },
  {
    name: "Nexter-Project",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Nexter Project</div>
        <div className="portfolio-item__desc">A Realtor Site</div>
        <div className="portfolio-item__icon">
          <i className="fab fa-html5" />
          <i className="fab fa-sass" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://datdevboi.github.io/Nexter-Project/"
          >
            Site
          </a>
        </div>
      </div>
    )
  },
  {
    name: "trillo-project",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Trillo Project</div>
        <div className="portfolio-item__desc">
          A travel website using html and scss
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-html5" />
          <i className="fab fa-sass" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://datdevboi.github.io/trillo-project/#"
          >
            Site
          </a>
        </div>
      </div>
    )
  },
  {
    name: "natours-project",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Natours Project</div>
        <div className="portfolio-item__desc">
          An Adventour tour website using html and scss.
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-html5" />
          <i className="fab fa-sass" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://datdevboi.github.io/natours-project/"
          >
            Site
          </a>
        </div>
      </div>
    )
  }
];
