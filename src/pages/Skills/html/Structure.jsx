import React from "react";

const Structure = () => {

  const basicStructure = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
`
  return (
    <>
      <div className="flex text-black dark:text-white">
        <div className="h-screen w-80 fixed overflow-auto bg-f-hover1 dark:bg-fdark-hover1">
          <ul className="pt-20 px-5 flex flex-col h-screen">
            <a href="#html-basic">
              <li className="hover:bg-f-pressed dark:hover:bg-fdark-pressed px-2 my-1">html</li>
            </a>
            <li className="hover:bg-f-pressed dark:hover:bg-fdark-pressed px-2 my-1">html</li>
            <li className="hover:bg-f-pressed dark:hover:bg-fdark-pressed px-2 my-1">html</li>
            <li className="hover:bg-f-pressed dark:hover:bg-fdark-pressed px-2 my-1">html</li>
            <li className="hover:bg-f-pressed dark:hover:bg-fdark-pressed px-2 my-1">html</li>
          </ul>
        </div>

        <div className="h-screen w-full ml-80 pt-20 flex flex-col text-black dark:text-white" style={{ height: "4000px" }}>
          <div id="html-basic" className="w-5/6 rounded shadow overflow-auto self-center p-5 dark:bg-fdark-hover1 bg-f-hover1">
            <p className="w-full text-center mb-5 text-xl font-semibold">HTML 5 basic Structure</p>
            <pre> {basicStructure}</pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default Structure;
