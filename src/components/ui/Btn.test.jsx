import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Btn from "./Btn";

describe("Btn", () => {

    // Button

    it("renders a button by default", () => {
        render(<Btn>Contact</Btn>);

        expect(
            screen.getByRole("button", { name: "Contact" })
        ).toBeInTheDocument();
    });

    it("has button as default type", () => {
        render(<Btn>Contact</Btn>);

        expect(screen.getByRole("button")).toHaveAttribute(
            "type", "button"
        );
    });

    it("supports submit type", () => {
        render(<Btn type="submit">Send</Btn>);

        expect(screen.getByRole("button")).toHaveAttribute(
            "type", "submit"
        );
    });

    // Variants

    it("applies the primary variant by default", () => {
        render(<Btn>Contact</Btn>);

        expect(screen.getByRole("button")).toHaveClass(
            "btn", "btn-primary"
        );
    });

    it("applies the secondary variant", () => {
        render(<Btn variant="secondary">Contact</Btn>);

        expect(screen.getByRole("button")).toHaveClass(
            "btn", "btn-secondary"
        );
    });

    // External link

    it("renders an external link when href is provided", () => {
        render(
            <Btn href="https://example.com">
                Website
            </Btn>
        );

        expect(screen.getByRole("link")).toHaveAttribute(
            "href", "https://example.com"
        );
    });

    it("opens external links in a new tab", () => {
        render(
            <Btn href="https://example.com">
                Website
            </Btn>
        );

        expect(screen.getByRole("link")).toHaveAttribute(
            "target", "_blank"
        );
    });

    it("applies security attributes to external links", () => {
        render(
            <Btn href="https://example.com">
                Website
            </Btn>
        );

        expect(screen.getByRole("link")).toHaveAttribute(
            "rel", "noopener noreferrer"
        );
    });

    // Download

    it("supports file downloads", () => {
        render(
            <Btn href="/cv.pdf" download="cv.pdf">
                Download CV
            </Btn>
        );

        expect(screen.getByRole("link")).toHaveAttribute(
            "download", "cv.pdf"
        );
    });

    // Internal link

    it("renders an internal link when to is provided", () => {
        render(
            <MemoryRouter>
                <Btn to="/projects">Projects</Btn>
            </MemoryRouter>
        );

        expect(screen.getByRole("link")).toHaveAttribute(
            "href", "/projects"
        );
    });

    it("applies the variant to internal links", () => {
        render(
            <MemoryRouter>
                <Btn to="/projects" variant="secondary">
                    Projects
                </Btn>
            </MemoryRouter>
        );

        expect(screen.getByRole("link")).toHaveClass(
            "btn", "btn-secondary"
        );
    });

    // Priority

    it("prioritizes href over to", () => {
        render(
            <MemoryRouter>
                <Btn href="https://example.com" to="/projects">
                    Website
                </Btn>
            </MemoryRouter>
        );

        expect(screen.getByRole("link")).toHaveAttribute(
            "href", "https://example.com"
        );
    });

});
