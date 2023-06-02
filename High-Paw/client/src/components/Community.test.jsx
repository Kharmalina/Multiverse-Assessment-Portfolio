import { render, screen } from "@testing-library/react";
import { describe, it} from 'vitest';

import Community from "./Community";

describe("Community component", () => {
  it("should render Register component correctly", () => {
    render(<Community />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });
});