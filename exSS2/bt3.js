const typeConsole = (type = "log") => {
  switch (type.toLowerCase()) {
    case "warn":
      console.warn("day la type : warn");
      break;
    case "error":
      console.error("day la type : error");
      break;
    default:
      console.log("day la type log");
  }

//  console[type]("day la type : ", type);  // cach 2 

};

typeConsole("log");
typeConsole("warn");
typeConsole("error");
typeConsole();