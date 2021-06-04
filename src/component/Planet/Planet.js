import { useParams } from "react-router-dom";
import Tabs from "../Tabs/Tabs";
import "./Planet.css";

const Planet = ({ datas }) => {
  let { name } = useParams();
  const planet = datas.find((data) => data.name === name);
  const additonalInformations = [
    {
      id: 1,
      title: "Overview",
      subtitle: "",
      content: planet.overview.content,
      source: planet.overview.source,
      image: planet.images.planet,
    },
    {
      id: 2,
      title: "Internal",
      subtitle: "Structure",
      content: planet.structure.content,
      source: planet.structure.source,
      image: planet.images.internal,
    },
    {
      id: 3,
      title: "Surface",
      subtitle: "Geology",
      content: planet.geology.content,
      source: planet.geology.source,
      image: planet.images.planet,
      geologyDetail: planet.images.geology,
    },
  ];

  return (
    <div className="Planet">
      {planet ? (
        <div className="Planet">
          <Tabs
            data={additonalInformations}
            name={planet.name}
            color={planet.color}
          />
          <ul className="extra-information">
            <li>
              <h4>Rotation time</h4>
              <h2>{planet.rotation}</h2>
            </li>
            <li>
              <h4>Revolution time</h4>
              <h2>{planet.revolution}</h2>
            </li>
            <li>
              <h4>Radius</h4>
              <h2>{planet.radius}</h2>
            </li>
            <li>
              <h4>Average temp.</h4>
              <h2>{planet.temperature}</h2>
            </li>
          </ul>
        </div>
      ) : (
        <p>{name} is not a planet</p>
      )}
    </div>
  );
};

export default Planet;
