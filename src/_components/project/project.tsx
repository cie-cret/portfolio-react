// import "./project.scss";

export interface ProjectProps {
  name: string;
  description?: string;
  image: string;
  img_alt: string;
  website: string;
  repo: string;
}

export default function Project(props: ProjectProps) {
  return (
    <>
      {/* Project */}
      <div className="exp-sub-heading my-2">
        <h3>
          {props.name} <span className="small ml-1"> {props.description}</span>
        </h3>
      </div>
      <div className="exp-project card justify-center items-center">
        <div className="exp-project-pic m-2 cursor-pointer rounded">
          <a href={props.website} target="_blank">
            <img
              src={props.image}
              alt={props.img_alt}
              width={350}
              height={197}
            />
          </a>
        </div>
        {/* Detail */}
        <div className="git-btn custom-button px-4 py-1 rounded-3xl hover:scale-105">
          <a href={props.repo} target="_blank">
            <p>Github</p>
          </a>
        </div>
      </div>
    </>
  );
}
