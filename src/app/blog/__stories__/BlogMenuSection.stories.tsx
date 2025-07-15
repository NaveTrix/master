import React from "react";
import BlogMenuSection from "../BlogMenuSection";

// Mock menu.json for Storybook
jest.mock("../../techContent/menu.json", () => ({
  python: [
    { title: "Overview", path: "python/guide.md" },
    { title: "Functions", path: "python/topics/functions.md" }
  ],
  javascript: [
    { title: "Overview", path: "javascript/guide.md" }
  ]
}), { virtual: true });

const storyMeta = {
  title: "Blog/BlogMenuSection",
  component: BlogMenuSection,
};
export default storyMeta;

export const Default = () => <BlogMenuSection />;

// Empty state
jest.mock("../../techContent/menu.json", () => ({}), { virtual: true });
export const Empty = () => <BlogMenuSection />;

// Error state (simulate import error)
jest.mock("../../techContent/menu.json", () => { throw new Error("Failed to load"); }, { virtual: true });
export const ErrorState = () => <BlogMenuSection />;
