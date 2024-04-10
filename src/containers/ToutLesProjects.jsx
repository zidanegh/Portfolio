import React, { useState } from "react";
import data from "../assets/code-projet.json";
import Filteur from "../components/Filter";
import { useSelector } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Github from "../components/Logo/Github";

export default function ToutLesProjects() {
  const projects = data.projects;
  const chosen = useSelector((state) => state.chosenLogo);
  const chosenTag = chosen.chosenLogo;
  const [modal, setModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // State to hold the selected project

  const toggle = () => setModal(!modal);

  const filtration =
    chosenTag === "ALL"
      ? projects
      : projects.filter((project) => project.tags.includes(chosenTag));

  const handleCardClick = (project) => {
    setSelectedProject(project);
    toggle();
  };

  return (
    <>
      <Filteur />
      <div className="cardWapper">
        {filtration.map((project) => (
          <div
            className="card"
            key={project.id + "card"}
            onClick={() => handleCardClick(project)} // Call handleCardClick with the clicked project
          >
            <img src={project.image} alt={project.alt} />
            <div className="container">
              <h4>
                <b>{project.name}</b>
              </h4>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{selectedProject?.name}</ModalHeader>
        <ModalBody>
          <img
            src={selectedProject?.image}
            alt={selectedProject?.alt}
            className="img-modal"
          />
          <div className="container-text-modal">
            <h4>{selectedProject?.name}</h4>
            <p>{selectedProject?.description}</p>
          </div>
          <div className="extra-info-modal">
            <a
              href={selectedProject?.gitHub}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
