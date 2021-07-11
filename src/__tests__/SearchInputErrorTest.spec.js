import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import Providers from "providers";
import SearchPage from "pages/SearchPage";

describe("When the user don't write some username", () => {
  test("Shouldn't show the username result", async () => {
    render(
      <MemoryRouter>
        <Providers>
          <SearchPage></SearchPage>
        </Providers>
      </MemoryRouter>
    );

    userEvent.type(screen.getByRole("textbox"), "");
    userEvent.click(
      screen.getByRole("button", {
        name: /retrieve username/i,
      })
    );

    const searchResult = await screen.queryByText(/andré luiz hiller vieira/i);

    expect(searchResult).not.toBeInTheDocument();
  });
});
