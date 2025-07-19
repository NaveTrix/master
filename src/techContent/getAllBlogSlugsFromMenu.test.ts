import { getAllBlogSlugsFromMenu, getPostMetaFromMenu, getPostContent } from "./getAllBlogSlugsFromMenu";
import fs from "fs";
// import path from "path";

jest.mock("./menu.json", () => ({
  python: [
    { title: "Overview", path: "python/guide.md" },
    { title: "Functions", path: "python/topics/functions.md" }
  ],
  javascript: [
    { title: "Overview", path: "javascript/guide.md" }
  ]
}), { virtual: true });

jest.mock("fs");

const mockFileContent = `---\ntitle: Test Post\ndescription: Test Desc\n---\n# Hello World`;

const mockReadFileSync = fs.readFileSync as jest.Mock;
mockReadFileSync.mockImplementation((filePath: string) => {
  if (filePath.includes("guide.md")) return mockFileContent;
  return "---\ntitle: Other Post---\nContent";
});

describe("getAllBlogSlugsFromMenu", () => {
  it("returns all slugs from menu.json", () => {
    const slugs = getAllBlogSlugsFromMenu();
    expect(slugs).toEqual([
      { slug: ["python", "guide"] },
      { slug: ["python", "topics", "functions"] },
      { slug: ["javascript", "guide"] }
    ]);
  });
});

describe("getPostMetaFromMenu", () => {
  it("returns meta for a valid slug", () => {
    const meta = getPostMetaFromMenu(["python", "guide"]);
    expect(meta).toEqual({
      title: "Overview",
      path: "python/guide.md",
      category: "python"
    });
  });
  it("returns null for an invalid slug", () => {
    expect(getPostMetaFromMenu(["not", "found"])).toBeNull();
  });
});

describe("getPostContent", () => {
  it("parses markdown frontmatter and content", () => {
    const { content, data } = getPostContent("python/guide.md");
    expect(data.title).toBe("Test Post");
    expect(content).toContain("# Hello World");
  });
});
