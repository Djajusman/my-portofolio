import React from "react";
import { FilterContainer, Button, FilterHeading } from "./ProjectsFilterStyles";
import { SiReact, SiPython } from "react-icons/si";
import { FaAngular } from "react-icons/fa";

const ProjectsFilter = ({ filter, filterBy }) => (
  <section>
    <FilterHeading>
      Filtered by: <b>{filterBy}</b>
    </FilterHeading>
    <FilterContainer>
      <Button
        type="button"
        className={filterBy === "All" ? "active" : null}
        aria-label="Filter by All"
        onClick={() => filter("All")}
      >
        All
      </Button>
      <Button
        type="button"
        className={filterBy === "React" ? "active" : null}
        aria-label="Filter by ReactJS"
        onClick={() => filter("react")}
      >
        <SiReact />
      </Button>
      <Button
        type="button"
        className={filterBy === "Python" ? "active" : null}
        aria-label="Filter by Python"
        onClick={() => filter("python")}
      >
        <SiPython />
      </Button>
      <Button
        type="button"
        className={filterBy === "Angular" ? "active" : null}
        aria-label="Filter by Angular"
        onClick={() => filter("angular")}
      >
        <FaAngular />
      </Button>
    </FilterContainer>
  </section>
);

export default ProjectsFilter;
