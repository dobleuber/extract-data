import { screen, render } from "@testing-library/react";
import { UserProfile } from ".";

describe("UserProfile", () => {
  it("should it exists", () => {
    expect(UserProfile).toBeDefined();
  });

  describe("rendering", () => {
    it("should render the UserProfile not logged user", () => {
      render(<UserProfile username={null} />);
      expect(screen.getByTestId("user-profile")).toBeInTheDocument();
      expect(screen.getByText("Not logged")).toBeInTheDocument();
    });

    it("should render the UserProfile with user logged", () => {
      render(<UserProfile username="John Doe" />);
      expect(screen.getByTestId("user-profile")).toBeInTheDocument();
      expect(screen.getByText("John Doe")).toBeInTheDocument();
    });
  });
});
