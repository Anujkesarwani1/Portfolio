import { useState } from "react";
import { PROJECTS, projects } from "../../data/constants";
import {
  Container,
  Desc,
  Title,
  ToggleGroup,
  Wrapper,
  ToggleButton,
  Divider,
  CardContainer,
} from "./style";
import ProjectCards from "../Cards/ProjectCards";

// export interface OpenModalState {
//   state: boolean;
//   project: ProjectList | null;
// }

// interface ProjectsProps {
//   openModal: OpenModalState;
//   setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
// }

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>{PROJECTS.DESCRIPTION}</Desc>
        <ToggleGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web app" ? (
            <ToggleButton
              active
              value="web app"
              onClick={() => setToggle("web app")}
            >
              WEB APP'S
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle("web app")}>
              WEB APP'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === "android app" ? (
            <ToggleButton
              active
              value="android app"
              onClick={() => setToggle("android app")}
            >
              ANDROID APP'S
            </ToggleButton>
          ) : (
            <ToggleButton
              value="android app"
              onClick={() => setToggle("android app")}
            >
              ANDROID APP'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === "machine learning" ? (
            <ToggleButton
              active
              value="machine learning"
              onClick={() => setToggle("machine learning")}
            >
              MACHINE LEARNING
            </ToggleButton>
          ) : (
            <ToggleButton
              value="machine learning"
              onClick={() => setToggle("machine learning")}
            >
              MACHINE LEARNING
            </ToggleButton>
          )}
        </ToggleGroup>

        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => <ProjectCards project={project} />)}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCards project={project} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
