import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import Providers from "providers";
import HistoryPage from "pages/HistoryPage";

describe("When the user write in input and click the button", () => {
  test("Should search your user and show the results", async () => {
    render(
      <MemoryRouter>
        <Providers>
          <HistoryPage></HistoryPage>
        </Providers>
      </MemoryRouter>
    );

    const emptyHistoryImage = await screen.getByRole("img", {
      name: /an pic that says the history is empty/i,
    });

    expect(emptyHistoryImage).toBeInTheDocument();
  });
});
