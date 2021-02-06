import { MDBContainer } from "mdbreact";
import React, { useState } from "react";
import {
  Route,
  Switch,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import SearchBar from "../../components/SearchBar";

const useQuery = () => new URLSearchParams(useLocation().search);

const Movie = (props) => {
  const [title, setTitle] = useState("");
  let { path, url } = useRouteMatch();
  let query = useQuery();

  const handleOnSearch = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  return (
    <MDBContainer breakpoint="xxl">
      <SearchBar onSearch={handleOnSearch} />
      <Switch>
        <Route exact path={path} component={HomePage} />
        <Route path={`${url}/search?title=${title}`}>
          <SearchPage title={query.get("title")} />
        </Route>
        <Route path={`${url}/:id`} children={<Child />} />
      </Switch>
    </MDBContainer>
  );
};

const Child = () => {
  let { id } = useParams();

  return <div>{id}</div>;
};

export default Movie;
