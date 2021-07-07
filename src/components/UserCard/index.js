import { CardDiv, ReposCards, ReposDiv } from "./styles";
import Button from "components/Button";

import { useState, useEffect } from "react";
import axios from "axios";

const UserCard = ({ user }) => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    axios
      .get(user.repos_url)
      .then((response) => setRepositories(response.data));
  }, [user]);

  return (
    <>
      <CardDiv>
        <h1>{user.name}</h1>
        <h3>{user.login}</h3>
        <img src={user.avatar_url} alt="User avatar" />
        <section>
          <div>
            <p>Followers</p>
            <h3>{user.followers}</h3>
          </div>
          <div>
            <p>Following</p>
            <h3>{user.following}</h3>
          </div>
          <div>
            <p>Public Repos</p>
            <h3>{user.public_repos}</h3>
          </div>
        </section>
        <h1>Repositories</h1>
        <ReposDiv>
          {repositories.map((repo, index) => (
            <ReposCards key={index}>
              <h3>{repo.name}</h3>
              {repo.language ? <p>{repo.language}</p> : <p>Not Informated</p>}
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                <Button>Link to Repository</Button>
              </a>
            </ReposCards>
          ))}
        </ReposDiv>
        <a href={user.html_url} target="_blank" rel="noreferrer">
          <Button isDark>Access account</Button>
        </a>
      </CardDiv>
    </>
  );
};

export default UserCard;
