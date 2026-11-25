import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Badge from "./Badge";

describe("Badge", () => {

    it("renders its children", () => {
        render(<Badge>React</Badge>);

        expect(screen.getByText("React")).toBeInTheDocument();
    });

    it("applies the badge class", () => {
        render(<Badge>React</Badge>);

        expect(screen.getByText("React")).toHaveClass("badge");
    });

    it("renders JSX children", () => {
        render(
            <Badge>
                <strong>React</strong>
            </Badge>
        );

        expect(screen.getByText("React").tagName).toBe("STRONG");
    });

});
