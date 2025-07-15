# HTML Case Study: Building a Responsive Data Table

## Scenario
A company needs to display large datasets in a user-friendly, accessible, and responsive HTML table for both desktop and mobile users. The table must support sorting, filtering, and keyboard navigation.

## Steps Taken
1. **Semantic Markup:** Use <table>, <thead>, <tbody>, <th>, and <td> for structure.
2. **Accessibility:** Add <caption>, scope attributes, and ARIA roles for screen readers.
3. **Responsive Design:** Use CSS media queries and overflow for horizontal scrolling on mobile.
4. **Interactivity:** Add JavaScript for sorting and filtering.
5. **Keyboard Navigation:** Ensure users can tab through cells and use arrow keys.

## Hands-On Lab: Implementing a Responsive Table
1. Create a table with at least 10 rows and 5 columns.
2. Add a caption and proper <th> headers.
3. Use CSS to make the table scrollable on small screens.
4. Add JavaScript to sort columns when headers are clicked.
5. Test with a screen reader and keyboard only.

## Best Practices
- Always use semantic HTML for tables.
- Provide alternative text for non-text content.
- Test for accessibility and responsiveness.

## Interview Q&A
**Q: How do you make an HTML table accessible?**
A: Use <caption>, <th> with scope, ARIA roles, and ensure keyboard navigation.

**Q: How can you make large tables usable on mobile?**
A: Use CSS for horizontal scrolling or convert to card layouts on small screens.

## References
- [MDN: Accessible Tables](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#accessibility_concerns)
- [Responsive Tables](https://css-tricks.com/responsive-data-tables/)

## Diagram
![Responsive Table](https://css-tricks.com/wp-content/uploads/2020/09/responsive-table.png)
