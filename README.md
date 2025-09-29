**Tattoo Shop Website Changelog**

According to the feedback received from the lecturer, I had to write a changelog explaining what I did, changed and everything that follows (Because I did not previously do any in the part 1 of the Poe).
Here is the complete explanation of what I did in the Part 1 of the POE, and the Part 2.

**PROJECT PART 1**

**Part 1 – Project Proposal & Research**
•	Defined project scope for a Tattoo Shop Website.
•	Identified goals: attract clients, showcase tattoo work, list services & pricing, allow booking, and communicate shop values.
•	Researched and sourced content:
o	Tattoo services (custom tattoos, piercings, aftercares).
o	Shop story, mission, and values.
o	Pricing details.
o	Contact + booking needs.
________________________________________
**Part 2 – Sitemap Creation**
•	Built an initial sitemap.
•	Updated sitemap to include:
o	Home
o	About (Story, Mission, Values, Artists)
o	Services (cards with descriptions)
o	Portfolio (tattoo gallery grid)
o	Pricing (card layout for services & fees)
o	Booking (form + add-to-cart system later)
o	Contact (form + location map)
________________________________________
**Part 3 – Wireframes**
•	Designed wireframes for all main pages.
•	Low-fidelity wireframes created to outline layout.
•	Incorporated card-based design across Services, Pricing, Portfolio, and Booking for visual consistency.
________________________________________
**Part 4 – Development Setup**
Wrote HTML templates for each page:
•	Home: hero banner, featured tattoo styles, testimonials.
•	About: shop history, mission & values, artist bios.
•	Portfolio: grid of tattoo images/styles.
•	Services: list of offerings (black & grey, colour, fine line, etc.).
•	Pricing: pricing cards with “Book Now” buttons.
•	Booking: service cards with “Add to Cart”, booking form, and cart summary.
•	Contact: contact form, studio location, social links.
•	Delivered project files (HTML, CSS, JS base) in a working folder.
•	Prepared for development in Visual Studio Code.
________________________________________

**PROJECT PART 2**
**Part 5 – CSS Design Enhancements**

•	Applied dark theme with red highlights for tattoo vibe.
•	Ensured uniform CSS across all pages.
•	Added card components for services, pricing, portfolio, and booking sections.
•	Responsive design implemented with viewport meta tag.
________________________________________External CSS Stylesheet (style.css)
**1. Default Styling Code**
•	Applied reset styles (margin, padding, box-sizing).
•	Defined a global font-family (Poppins for body, Rock Salt for logo/branding).
•	Applied consistent colour scheme (dark background, red highlight).
**2. Typography Styles**
•	Headings styled with Rock Salt for branding personality.
•	Body text styled with Poppins for readability.
•	Adjusted font sizes and weights for hierarchy **(h1 > h2 > h3 > p).**
•	Responsive typography scaling applied with relative units (em, %, rem).
**3. Layout Structure**
•	Implemented flexbox and CSS grid layouts.
•	Cards arranged using grid (auto-fit, minmax) for flexible resizing.
•	Navigation styled as horizontal for desktop and collapsible for mobile.
**4. Decoration and Colour**
•	Dark theme background **(#111 / #1a1a1a)** with red accent **(#e63946).**
•	Buttons styled with hover colour shifts **(red to darker red).**
•	Hero sections styled with background images and overlay gradients.
•	Borders, shadows, and rounded corners for modern tattoo shop aesthetic.
**5. Pseudo-classes**
•	Used: hover for buttons and cards **(colour changes, scale-up effects)**.
•	Used: active for button click feedback.
•	Used: focus on form fields for better accessibility.
**6. Media Queries / Breakpoints**
•	Breakpoints applied for tablet (768px) and mobile **(480px and below).**
•	Adjustments included:
o	Background colour test **(body {background-colour: pink;})** during development to verify responsiveness.
o	Navigation menu restructuring:
	Navigation **(ul.nav)** stacks vertically on mobile **(flex-direction: column; align-items: stretch;)**.
	Links are centre aligned with borders between items.
o	Card typography scaling:
	Titles reduced (h2 {font-size: 1rem;}).
	Descriptions reduced **(p {font-size: 0.875rem;}).**
o	Card button resizing:
	Padding reduced and text scaled down **(padding: 0.5rem 0.625rem; font-size: 0.875rem;).**
**7. Responsive Design Adjustments**
•	Layout: grids collapse into single-column layout on smaller screens.
•	Typography: heading sizes reduce proportionally, ensuring readability.
•	Navigation Menu: desktop horizontal nav converts into a mobile-friendly stacked menu.
•	Images: portfolio/gallery images scale to fit device width without distortion.
**Part 6 – Content Expansion**
•	Expanded About page with a longer shop story.
•	Extended Mission & Values section to highlight creativity, safety, inclusivity, and community.
________________________________________
**Part 7 – Booking & Pricing Flow**
•	On the Pricing Page, “Book Now” buttons now link directly to the Booking page section.
•	On the Booking Page, created a structure for:
o	Service selection cards.
o	Cart section with services and total cost.
o	Final booking form for customer details.
**Part 8 – Screenshots of different pages**


<img width="500" height="1702" alt="image" src="https://github.com/user-attachments/assets/222f7721-3ae2-4996-87ba-d71ba3ec7484" />
<img width="400" height="1400" alt="image" src="https://github.com/user-attachments/assets/5af8fa48-85e3-4c4b-8a30-ab54fc5ae165" />


<img width="500" height="1702" alt="image" src="https://github.com/user-attachments/assets/c5e904b3-ef72-4e7b-969e-01a1803a7a89" />
<img width="400" height="1400" alt="image" src="https://github.com/user-attachments/assets/fa8ee654-ab82-46ce-8e20-5f4c3a75eb64" />


<img width="1722" height="1580" alt="image" src="https://github.com/user-attachments/assets/3c5c6663-97d6-4660-9108-4bcf8ffeb0f7" />
<img width="400" height="1400" alt="image" src="https://github.com/user-attachments/assets/d8c6873f-4067-4799-bd36-13a55cb971ec" />





**References**
**Google Fonts. (n.d.).** _Google Fonts: Poppins & Rock Salt._ Available at: Browse Fonts - Google Fonts (Accessed: 26 Sep 2025).
**Nielsen Norman Group. (2020)**. _Card Design: UI Component Guidelines._ Available at: Cards: UI-Component Definition - NN/G (Accessed: 26 Sept 2025).
**Interaction Design Foundation. (n.d.).** _Wireframe: A Complete Guide._ Available at: What is Wireframing? — updated 2025 | IxDF(Accessed: 26 Sept 2025).
