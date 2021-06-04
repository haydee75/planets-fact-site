import Tabs from "../Tabs/Tabs";

const Homepage = (props) => {
  const planet = props.datas;

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
      <div className="Planet">
        <Tabs data={additonalInformations} name="Earth" color="#6D2ED5" />
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
    </div>
  );
};

export default Homepage;
