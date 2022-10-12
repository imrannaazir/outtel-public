import React from "react";

const Skills = () => {
  const style1 = { "--value": 90 };
  const style2 = { "--value": 70 };
  const style3 = { "--value": 40 };
  return (
    <div className="card lg:card-side bg-base-100 grid lg:grid-cols-2">
      <div className="card-body ">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <progress
              className="progress progress-primary w-[80%] h-8"
              value="89"
              max="100"
            ></progress>
            React
          </div>
          <div className="flex items-center gap-4">
            <progress
              className="progress progress-primary w-[80%] h-8"
              value="80"
              max="100"
            ></progress>
            JavaScript
          </div>
          <div className="flex items-center gap-4">
            <progress
              className="progress progress-primary w-[80%] h-8"
              value="75"
              max="100"
            ></progress>
            HTML
          </div>
          <div className="flex items-center gap-4">
            <progress
              className="progress progress-primary w-[80%] h-8"
              value="80"
              max="100"
            ></progress>
            CSS
          </div>
          <div className="flex items-center gap-4">
            <progress
              className="progress progress-primary w-[80%] h-8"
              value="45"
              max="100"
            ></progress>
            Mongodb
          </div>
          <div className="flex items-center gap-4">
            <progress
              className="progress progress-primary w-[80%] h-8"
              value="60"
              max="100"
            ></progress>
            Express JS
          </div>
        </div>
      </div>
      <div className="card-body ">
        <div className="flex gap-8 my-auto">
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary w-52 h-52"
            style={style1}
          >
            90% <br /> Bangla
          </div>
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary w-52 h-52"
            style={style2}
          >
            70% <br /> English
          </div>
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary w-52 h-52"
            style={style3}
          >
            40% <br /> Hindi
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
