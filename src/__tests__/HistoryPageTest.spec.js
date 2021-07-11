import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import Providers from "providers";
import UserCard from "components/UserCard";
import SearchPage from "pages/SearchPage";
import { currentUserMock } from "services/SearchInputResultMock";
import HistoryPage from "pages/HistoryPage";

describe("When the user write in input and click the button", () => {
  test("Should add search to history page", async () => {
    render(
      <MemoryRouter>
        <Providers>
          <SearchPage></SearchPage>
        </Providers>
      </MemoryRouter>
    );

    render(
      <MemoryRouter>
        <Providers>
          <UserCard user={currentUserMock} />
        </Providers>
      </MemoryRouter>
    );

    render(
      <MemoryRouter>
        <Providers>
          <HistoryPage />
        </Providers>
      </MemoryRouter>
    );

    userEvent.type(screen.getByRole("textbox"), "andrelhvieira");
    userEvent.click(
      screen.getByRole("button", {
        name: /retrieve username/i,
      })
    );

    const searchResult = await screen.getByRole("heading", {
      name: /andré luiz hiller vieira/i,
    });

    expect(searchResult).toBeInTheDocument();
  });
});
