# HTML Accessibility

## Key Concepts
- **ARIA (Accessible Rich Internet Applications):** Attributes (e.g., `aria-label`, `aria-hidden`, `aria-live`) for improved accessibility, especially for custom widgets.
- **Alt Text:** Descriptive text for images, icons, and graphics. Required for all `<img>` tags for screen readers and SEO.
- **Keyboard Navigation:** Ensure all functionality is accessible via keyboard (tab, enter, space, arrow keys). Use `tabindex` and visible focus indicators.
- **Landmarks:** Use semantic elements (`<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>`) for navigation and structure.
- **Focus Management:** Use JavaScript and ARIA to manage focus in modals, dialogs, and custom components.
- **Skip Links:** Provide skip navigation links for keyboard users.
- **Color Contrast:** Ensure sufficient contrast between text and background.
- **Screen Reader Testing:** Use tools like NVDA, JAWS, or VoiceOver to test accessibility.
- **Form Accessibility:** Use `<label>` for every input, provide clear error messages, and use `aria-describedby` for hints.
- **Dynamic Content Updates:** Use `aria-live` regions to announce changes to screen readers.
- **Accessible Tables:** Use `<th>`, `<caption>`, and `scope` attributes for clarity.
- **Accessible Media:** Provide captions, transcripts, and audio descriptions for multimedia content.
- **Responsive Design:** Ensure accessibility on all devices and orientations.
- **Language Attribute:** Use `lang` attribute on `<html>` for correct pronunciation by screen readers.
- **Accessible SVGs:** Use `<title>` and `<desc>` in SVGs for descriptions.
- **Error Prevention:** Use proper input types and validation to prevent user errors.

## Expanded Real-World Examples
- **Aria-label on a button:**
```html
<button aria-label="Close">&times;</button>
```
- **Skip link for keyboard users:**
```html
<a href="#main" class="skip-link">Skip to main content</a>
```
- **Accessible form field:**
```html
<label for="email">Email:</label>
<input type="email" id="email" name="email" aria-describedby="emailHelp">
<small id="emailHelp">We'll never share your email.</small>
```
- **Accessible modal dialog:**
```html
<div role="dialog" aria-modal="true" aria-labelledby="modalTitle" tabindex="-1">
  <h2 id="modalTitle">Dialog Title</h2>
  <button aria-label="Close dialog">Close</button>
</div>
```
- **Color contrast check:**
  Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to ensure text is readable.
- **Accessible table:**
```html
<table>
  <caption>Monthly Sales</caption>
  <tr><th scope="col">Month</th><th scope="col">Sales</th></tr>
  <tr><td>January</td><td>$1000</td></tr>
</table>
```
- **Accessible SVG:**
```html
<svg role="img" aria-labelledby="svgTitle svgDesc">
  <title id="svgTitle">Company Logo</title>
  <desc id="svgDesc">A blue circle with a white letter C</desc>
  <circle cx="50" cy="50" r="40" fill="blue" />
  <text x="50" y="60" text-anchor="middle" fill="white">C</text>
</svg>
```

## Best Practices
- Use semantic HTML whenever possible; use ARIA only when necessary.
- Test with multiple assistive technologies and real users.
- Provide visible focus indicators and logical tab order.
- Ensure all interactive elements are keyboard accessible.
- Use color and contrast tools to meet WCAG standards.
- Avoid using color alone to convey information.
- Ensure error messages are accessible and descriptive.
- Use headings (`<h1>`-`<h6>`) in a logical order.
- Avoid auto-playing media.
- Make sure all links are descriptive (avoid "click here").
- Regularly audit your site with tools like Lighthouse or axe.

## 50+ Interview Questions and Answers

**Q1: What is ARIA and when should you use it?**
A: ARIA (Accessible Rich Internet Applications) is a set of attributes that enhance accessibility for users with disabilities, especially for custom widgets and dynamic content. Use ARIA only when native HTML elements do not provide the needed accessibility.

**Q2: Why is alt text important for images?**
A: Alt text provides context for images to screen readers, improves SEO, and ensures users who can't see images understand their purpose.

**Q3: How do you make a custom modal accessible?**
A: Use `role="dialog"`, `aria-modal="true"`, manage focus, provide keyboard escape, and label the dialog with `aria-labelledby`.

**Q4: What is a skip link and why is it important?**
A: A skip link allows keyboard users to bypass repetitive navigation and jump directly to the main content, improving usability.

**Q5: How do you ensure keyboard accessibility for interactive elements?**
A: Use semantic elements, ensure all controls are focusable, use `tabindex` appropriately, and provide visible focus indicators.

**Q6: What is color contrast and why does it matter?**
A: Color contrast is the difference in luminance between text and background. Sufficient contrast ensures readability for users with low vision.

**Q7: How do you test accessibility?**
A: Use screen readers (NVDA, JAWS, VoiceOver), keyboard navigation, browser dev tools, and automated tools like axe or Lighthouse.

**Q8: What is the purpose of the `lang` attribute on the `<html>` tag?**
A: It specifies the language of the document, helping screen readers pronounce text correctly.

**Q9: How do you make tables accessible?**
A: Use `<th>` for headers, `scope` attributes, `<caption>` for table description, and ensure logical structure.

**Q10: What are focus indicators and why are they important?**
A: Focus indicators show which element is currently focused, helping keyboard and screen reader users navigate.

**Q11: How do you provide accessible error messages in forms?**
A: Use `aria-describedby` to associate error messages with inputs, and ensure errors are announced to screen readers.

**Q12: What is an ARIA live region?**
A: An ARIA live region (`aria-live`) notifies screen readers of dynamic content updates without requiring a page reload.

**Q13: How do you make SVG graphics accessible?**
A: Use `<title>` and `<desc>` elements, and `role="img"` with `aria-labelledby` for descriptions.

**Q14: What is the difference between `aria-label` and `aria-labelledby`?**
A: `aria-label` provides a string label, while `aria-labelledby` references another element's text as the label.

**Q15: Why should you avoid using only color to convey information?**
A: Colorblind users may not perceive color differences, so use text or icons in addition to color.

**Q16: How do you make sure headings are accessible?**
A: Use headings in a logical order (`<h1>` to `<h6>`) and avoid skipping levels.

**Q17: What is the role of semantic HTML in accessibility?**
A: Semantic HTML provides meaning and structure, making it easier for assistive technologies to interpret content.

**Q18: How do you make a button accessible?**
A: Use the `<button>` element, provide clear text or `aria-label`, and ensure it is keyboard accessible.

**Q19: What is a landmark region?**
A: Landmarks are semantic elements like `<nav>`, `<main>`, `<header>`, and `<footer>` that help users navigate a page.

**Q20: How do you hide content from screen readers but keep it visible?**
A: Use `aria-hidden="true"` to hide content from assistive technologies.

**Q21: How do you hide content visually but keep it accessible to screen readers?**
A: Use CSS to visually hide (e.g., `.sr-only` class) but not remove from the accessibility tree.

**Q22: What is the purpose of `tabindex`?**
A: `tabindex` controls the tab order of elements for keyboard navigation.

**Q23: How do you make a dropdown menu accessible?**
A: Use semantic HTML, manage focus, use ARIA roles and properties, and ensure keyboard navigation.

**Q24: What is the difference between `aria-hidden` and `hidden` attribute?**
A: `aria-hidden` hides content from assistive tech, `hidden` hides it visually and from all users.

**Q25: How do you provide accessible multimedia content?**
A: Offer captions, transcripts, and audio descriptions for videos and audio.

**Q26: What is WCAG?**
A: Web Content Accessibility Guidelines (WCAG) are standards for making web content more accessible.

**Q27: How do you ensure accessible navigation?**
A: Use semantic elements, logical order, skip links, and keyboard accessibility.

**Q28: What is a screen reader?**
A: A screen reader is assistive software that reads out content and navigation to users with visual impairments.

**Q29: How do you test color contrast?**
A: Use tools like WebAIM Contrast Checker or browser extensions.

**Q30: What is the purpose of `role` attribute?**
A: The `role` attribute defines the purpose of an element for assistive technologies.

**Q31: How do you make a link accessible?**
A: Use descriptive text, ensure it is focusable, and avoid using only icons or images.

**Q32: What is the difference between `aria-live="polite"` and `aria-live="assertive"`?**
A: "Polite" announces updates when the user is idle; "assertive" interrupts immediately.

**Q33: How do you make error messages accessible in a single-page app?**
A: Use ARIA live regions to announce errors dynamically.

**Q34: What is the purpose of `aria-describedby`?**
A: It associates additional descriptive text with an element for assistive tech.

**Q35: How do you make a carousel accessible?**
A: Use ARIA roles, keyboard controls, and announce slide changes with `aria-live`.

**Q36: What is the difference between `aria-label` and `alt` attribute?**
A: `aria-label` is for labeling elements, `alt` is for describing images.

**Q37: How do you make a progress bar accessible?**
A: Use `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`.

**Q38: What is a focus trap?**
A: A focus trap keeps keyboard focus within a modal or dialog until it is closed.

**Q39: How do you make a tooltip accessible?**
A: Use `aria-describedby` to associate the tooltip with the triggering element.

**Q40: What is the purpose of `aria-checked`?**
A: It indicates the checked state of checkboxes, radio buttons, or switches.

**Q41: How do you make a tab interface accessible?**
A: Use `role="tablist"`, `role="tab"`, `role="tabpanel"`, manage focus, and keyboard navigation.

**Q42: What is the difference between `aria-pressed` and `aria-checked`?**
A: `aria-pressed` is for toggle buttons, `aria-checked` is for checkboxes/radios.

**Q43: How do you make a listbox accessible?**
A: Use `role="listbox"`, `role="option"`, and manage keyboard navigation.

**Q44: What is the purpose of `aria-expanded`?**
A: It indicates whether a collapsible element is expanded or collapsed.

**Q45: How do you make a date picker accessible?**
A: Use ARIA roles, keyboard navigation, and announce selected dates.

**Q46: What is the difference between `aria-label` and visible label?**
A: `aria-label` is for screen readers only; visible label is for all users.

**Q47: How do you make a slider accessible?**
A: Use `role="slider"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and keyboard controls.

**Q48: What is the purpose of `aria-controls`?**
A: It identifies the element(s) controlled by the current element.

**Q49: How do you make a notification accessible?**
A: Use `aria-live` regions to announce notifications to screen readers.

**Q50: What is the difference between `aria-disabled` and `disabled` attribute?**
A: `aria-disabled` only affects assistive tech; `disabled` prevents all user interaction.

**Q51: How do you make a breadcrumb navigation accessible?**
A: Use `nav` with `aria-label="breadcrumb"` and an ordered list for structure.

**Q52: What is the purpose of `aria-selected`?**
A: It indicates the selected state of elements in widgets like tabs or lists.

**Q53: How do you make a search form accessible?**
A: Use `<form role="search">`, label the input, and ensure keyboard access.

**Q54: What is the difference between `aria-required` and `required` attribute?**
A: `aria-required` is for assistive tech; `required` enforces validation in browsers.

**Q55: How do you make a toggle switch accessible?**
A: Use `role="switch"`, `aria-checked`, and keyboard controls.

**Q56: What is the purpose of `aria-busy`?**
A: It indicates that an element is being updated and may not be ready for interaction.

**Q57: How do you make a menu accessible?**
A: Use `role="menu"`, `role="menuitem"`, manage focus, and keyboard navigation.

**Q58: What is the difference between `aria-haspopup` and `aria-expanded`?**
A: `aria-haspopup` indicates a popup is available; `aria-expanded` shows if it is open.

**Q59: How do you make a collapsible section accessible?**
A: Use `aria-expanded`, `aria-controls`, and keyboard controls.

**Q60: What is the purpose of `aria-level`?**
A: It defines the hierarchical level of an element, such as in a tree or heading structure.

## References
- [HTML Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM: Accessibility Principles](https://webaim.org/standards/wcag/checklist)
- [Deque University: Accessibility Fundamentals](https://dequeuniversity.com/)

## Relevant Image
![HTML Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility/html-accessibility.png)
