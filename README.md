
# **Tattoo Shop Website Changelog**


According to the feedback received from the lecturer, In the part 2 0f the POE, i did not implememnt the media query/breakpoints which i updated int this last part of the **POE** 

here are some updates of what we added in this last part of the POE:

**- We added Media query/breakpoint**

**- We implemented Javascript**

**- We updated the html code to include buttons and other stuffs**

**- We uptated the css code for some pages and buttons to be more presentable**

Here is the complete changelog including what we did starting from the begining up to now,
the complete explanation of what I did in the Part 1 of the POE, the Part 2, and the final part of the **POE**

## **PROJECT PART 1**

### **Part 1 – Project Proposal & Research**
•	Defined project scope for a Tattoo Shop Website.
•	Identified goals: attract clients, showcase tattoo work, list services & pricing, allow booking, and communicate shop values.
•	Researched and sourced content:
o	Tattoo services (custom tattoos, piercings, aftercares).
o	Shop story, mission, and values.
o	Pricing details.
o	Contact + booking needs.
________________________________________
### **Part 2 – Sitemap Creation**
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
### **Part 3 – Wireframes**
•	Designed wireframes for all main pages.
•	Low-fidelity wireframes created to outline layout.
•	Incorporated card-based design across Services, Pricing, Portfolio, and Booking for visual consistency.
________________________________________
### **Part 4 – Development Setup**
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

## **PROJECT PART 2**
### **Part 5 – CSS Design Enhancements**

•	Applied dark theme with red highlights for tattoo vibe.
•	Ensured uniform CSS across all pages.
•	Added card components for services, pricing, portfolio, and booking sections.
•	Responsive design implemented with viewport meta tag.
________________________________________
External CSS Stylesheet (style.css)
**1. Default Styling Code**
•	Applied reset styles (margin, padding, box-sizing).
•	Defined a global font-family (Poppins for body, Rock Salt for logo/branding).
•	Applied consistent colour scheme (dark background, red highlight).
________________________________________
**2. Typography Styles**
•	Headings styled with Rock Salt for branding personality.
•	Body text styled with Poppins for readability.
•	Adjusted font sizes and weights for hierarchy **(h1 > h2 > h3 > p).**
•	Responsive typography scaling applied with relative units (em, %, rem).
________________________________________
**3. Layout Structure**
•	Implemented flexbox and CSS grid layouts.
•	Cards arranged using grid (auto-fit, minmax) for flexible resizing.
•	Navigation styled as horizontal for desktop and collapsible for mobile.
________________________________________
**4. Decoration and Colour**
•	Dark theme background **(#111 / #1a1a1a)** with red accent **(#e63946).**
•	Buttons styled with hover colour shifts **(red to darker red).**
•	Hero sections styled with background images and overlay gradients.
•	Borders, shadows, and rounded corners for modern tattoo shop aesthetic.
________________________________________
**5. Pseudo-classes**
•	Used: hover for buttons and cards **(colour changes, scale-up effects)**.
•	Used: active for button click feedback.
•	Used: focus on form fields for better accessibility.
________________________________________
#### **6. Media Queries / Breakpoints**

##### **💻 Tablet (≤1024px)*

Reduced hero text size and image height.

Adjusted grid layouts to fit two cards per row.

##### **📱 Mobile (≤768px)*

Navigation turns into a collapsible menu (.menu-toggle button toggles .show class).

Adjusted form paddings and card text sizes.

Ensured content stacks vertically.

##### **📱 Small Mobile (≤480px)*

Background changes to pink (for testing).

Navigation items stack vertically.

Reduced typography and button sizes for better readability.

Responsive Adjustments

Layout: All grid and flex layouts adapt fluidly to screen width.

Typography: Scales down on smaller devices.

Navigation Menu: Converts to vertical toggle menu on mobile.

Images: Adjust width and height automatically within card containers.
________________________________________
**7. Responsive Design Adjustments**
•	Layout: grids collapse into single-column layout on smaller screens.
•	Typography: heading sizes reduce proportionally, ensuring readability.
•	Navigation Menu: desktop horizontal nav converts into a mobile-friendly stacked menu.
•	Images: portfolio/gallery images scale to fit device width without distortion.
________________________________________
### **Part 6 – Content Expansion**
•	Expanded About page with a longer shop story.
•	Extended Mission & Values section to highlight creativity, safety, inclusivity, and community.
________________________________________
### **Part 7 – Booking & Pricing Flow**
•	On the Pricing Page, “Book Now” buttons now link directly to the Booking page section.
•	On the Booking Page, created a structure for:
o	Service selection cards.
o	Cart section with services and total cost.
o	Final booking form for customer details.
________________________________________
### **JavaScript Implementation (script.js)**
Main Features

Responsive Navigation Toggle:
Toggles the .show class for the mobile menu.

Cart System:

“Book Now” buttons use data-name and data-price attributes.

Adds selected services to cart with a remove option.

Updates total price in real time.

Form Validation:

Contact and Booking forms now validate name, email, message/service/date fields.

Red borders highlight missing fields.

Alerts guide users to fill all required data.

### **Part 8 – Screenshots of different pages**


<img width="1722" height="1580" alt="image" src="https://github.com/user-attachments/assets/222f7721-3ae2-4996-87ba-d71ba3ec7484" />
<img width="400" height="1400" alt="image" src="https://github.com/user-attachments/assets/5af8fa48-85e3-4c4b-8a30-ab54fc5ae165" />


<img width="1722" height="1580" alt="image" src="https://github.com/user-attachments/assets/c5e904b3-ef72-4e7b-969e-01a1803a7a89" />
<img width="400" height="1400" alt="image" src="https://github.com/user-attachments/assets/fa8ee654-ab82-46ce-8e20-5f4c3a75eb64" />


<img width="1722" height="1580" alt="image" src="https://github.com/user-attachments/assets/3c5c6663-97d6-4660-9108-4bcf8ffeb0f7" />
<img width="400" height="1400" alt="image" src="https://github.com/user-attachments/assets/d8c6873f-4067-4799-bd36-13a55cb971ec" />

<img width="1722" height="1580" alt="image" src="https://github.com/user-attachments/assets/f60f3d74-a6fc-4cd8-a30a-7aaedb0ff45a" />
<img width="400" height="1400" alt="image" src="https://github.com/user-attachments/assets/e08b2cae-f493-4c53-8686-f3eb52cb94c2" />


<img width="1722" height="1580" alt="image" src="https://github.com/user-attachments/assets/190719d2-6cb3-4740-9e38-f52c1dbd5a7c" />
<img width="400" height="1400" alt="image" src="https://github.com/user-attachments/assets/43b15cfb-95bd-4665-8245-74a4aec360c3" />








### **References**
**Google Fonts. (n.d.).** _Google Fonts: Poppins & Rock Salt._ Available at: Browse Fonts - Google Fonts (Accessed: 26 Sep 2025).
**Nielsen Norman Group. (2020)**. _Card Design: UI Component Guidelines._ Available at: Cards: UI-Component Definition - NN/G (Accessed: 26 Sept 2025).
**Interaction Design Foundation. (n.d.).** _Wireframe: A Complete Guide._ Available at: What is Wireframing? — updated 2025 | IxDF(Accessed: 26 Sept 2025).
