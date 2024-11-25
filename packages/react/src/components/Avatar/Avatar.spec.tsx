import React from "react";
import { render } from "@testing-library/react";

import { Avatar } from ".";

describe("<Avatar>", () => {
  it("Should be able to render avatar", () => {
    const { getByRole } = render(<Avatar src="https://github.com/JoalisonM.png" />);

    const avatarElement = getByRole("span");

    expect(avatarElement).toBeInTheDocument();
  });
});
