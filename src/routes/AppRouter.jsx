import { Routes, Route } from "react-router-dom";

import {
  About,
  Home,
  Expertise,
  Skill,
  Contact,
  NotFound,
  HTML,
  Structure,
  Lists, 
  Tables, 
  Forms,
  VanillaJS,
  ReactJS,
  NodeJS,
  // PhotographerLayout,
  // DrawingsLayout,
  // LandingPage,
  // Blog,
} from "../pages";

export default function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>

      <Route exact path="/expertise" element={<Expertise />}></Route>
      <Route exact path="/expertise/:group" element={<Skill />}></Route>
      <Route exact path="/expertise/html/demos" element={<HTML />} />
      <Route exact path="/expertise/html/structure" element={<Structure />} />
      <Route exact path="/expertise/html/lists" element={<Lists />} />
      <Route exact path="/expertise/html/tables" element={<Tables />} />
      <Route exact path="/expertise/html/forms" element={<Forms />} />
      
      {/* <Route
        exact
        path="/expertise/html/demos/photographer"
        element={<PhotographerLayout />}
      />
      <Route exact path="/expertise/html/demos/image-grid" element={<DrawingsLayout />} />
      <Route exact path="/expertise/html/demos/landing-page" element={<LandingPage />} />
      <Route exact path="/expertise/html/demos/blog" element={<Blog />} /> */}

      <Route exact path="/expertise/vanillajs/demos" element={<VanillaJS />} />
      <Route exact path="/expertise/reactjs/demos" element={<ReactJS />} />
      <Route exact path="/expertise/nodejs/demos" element={<NodeJS />} />

      {/* <Route exact path="/knowledge/react-js" element={<ReactJSKnowledge />}></Route> */}
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/contact" element={<Contact />}></Route>
      <Route path="*" element={<NotFound />}>
      </Route>
    </Routes>
  );
}
