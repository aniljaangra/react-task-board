import { render, screen } from "./custom-render";
import App from "./App";

describe("App", () => {
  it("should show learn react", () => {
    render(<App />);
    const textNode = screen.getByText(/learn react/i);
    expect(textNode).toBeInTheDocument();
  });
});

