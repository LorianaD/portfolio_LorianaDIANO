import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SectionTitle from "./SectionTitle";

describe("SectionTitle", () => {

    it("renders its children", () => {
        render(<SectionTitle>My projects</SectionTitle>);

        expect(
            screen.getByText("My projects")
        ).toBeInTheDocument();
    });

    it("renders a level 2 heading", () => {
        render(<SectionTitle>My projects</SectionTitle>);

        expect(
            screen.getByRole("heading", {
                level: 2,
                name: "My projects"
            })
        ).toBeInTheDocument();
    });

    it("applies the section-title class", () => {
        render(<SectionTitle>My projects</SectionTitle>);

        expect(screen.getByRole("heading")).toHaveClass(
            "section-title"
        );
    });

});
