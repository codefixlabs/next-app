import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

describe("home page", () => {
  beforeEach(() => {
    render(<Page />);
  });

  it("renders the main section with correct class", () => {
    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveClass(
      "flex min-h-screen flex-col items-center justify-between p-24",
    );
  });

  it("renders the get started message with correct text", () => {
    const messageElement = screen.getByText(/Get started by editing/i);
    expect(messageElement).toHaveTextContent(
      "Get started by editing app/page.tsx",
    );
  });

  it("renders the Vercel logo with correct alt text", () => {
    const logoElement = screen.getByAltText("Vercel Logo");
    expect(logoElement).toBeInTheDocument();
  });

  it("renders the Next.js logo with correct alt text", () => {
    const logoElement = screen.getByAltText("Next.js Logo");
    expect(logoElement).toBeInTheDocument();
  });

  it("renders the Docs link with correct href and text", () => {
    const docsLinkElement = screen.getByRole("link", {
      name: /Docs/i,
    });
    expect(docsLinkElement).toHaveAttribute(
      "href",
      "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    );
    expect(docsLinkElement).toHaveTextContent("Docs");
  });

  it("renders the Learn link with correct href and text", () => {
    const learnLinkElement = screen.getByRole("link", {
      name: /Learn/i,
    });
    expect(learnLinkElement).toHaveAttribute(
      "href",
      "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    );
    expect(learnLinkElement).toHaveTextContent("Learn");
  });

  it("renders the Templates link with correct href and text", () => {
    const templatesLinkElement = screen.getByRole("link", {
      name: /Templates/i,
    });
    expect(templatesLinkElement).toHaveAttribute(
      "href",
      "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    );
    expect(templatesLinkElement).toHaveTextContent("Templates");
  });

  it("renders the Deploy link with correct href and text", () => {
    const deployLinkElement = screen.getByRole("link", {
      name: /Deploy/i,
    });
    expect(deployLinkElement).toHaveAttribute(
      "href",
      "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    );
    expect(deployLinkElement).toHaveTextContent("Deploy");
  });
});
