import React from "react";

const Projects = () => {
  return (
    <div>
      <div class="carousel w-[80%] mx-auto">
        <div id="item1" class="carousel-item w-full relative">
          <img src="https://i.ibb.co/M7BbwrN/image.png" class="w-full" />
          <a
            href="https://space-y-one.web.app/"
            className="btn btn-primary absolute bottom-[10%] left-[50%]"
          >
            View my Project
          </a>
        </div>
        <div id="item2" class="carousel-item w-full relative">
          <img src="https://i.ibb.co/MBbXqJd/image.png" class="w-full" />
          <a
            href="https://outtel-tech.web.app/"
            className="btn btn-primary absolute bottom-[10%] left-[50%]"
          >
            View my Project
          </a>
        </div>
        <div id="item3" class="carousel-item w-full relative">
          <img src="https://i.ibb.co/NF2dpRK/image.png" class="w-full" />
          <a
            href="https://pix-parker.web.app/"
            className="btn btn-primary absolute bottom-[10%] left-[50%]"
          >
            View my Project
          </a>
        </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="btn btn-xs">
          1
        </a>
        <a href="#item2" class="btn btn-xs">
          2
        </a>
        <a href="#item3" class="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Projects;
