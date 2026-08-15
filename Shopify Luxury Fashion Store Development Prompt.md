# Shopify Luxury Fashion E-Commerce Store — Complete Development Prompt

Build a production-ready Shopify Online Store 2.0 theme for a premium affordable-luxury fashion and eyewear e-commerce brand.

The website should be inspired by the structure, merchandising style, premium visual experience, product presentation, and e-commerce functionality of https://bavincis.com/, but DO NOT copy proprietary branding, logos, text, product photography, copyrighted assets, or source code. Create an original brand identity and original UI implementation with a similar premium fashion-commerce experience.

## 1. Core Objective

Create a fully responsive, high-performance Shopify storefront selling products such as:

- Sunglasses
- Watches
- Couple Collections
- Fashion Accessories
- New Arrivals
- Best Sellers
- Sale Products

The website must look premium, modern, elegant, minimal, luxurious, conversion-focused, and mobile-first.

Use Shopify Online Store 2.0 architecture with reusable Liquid sections, snippets, templates, JSON templates, CSS, JavaScript, Shopify metafields, Shopify products, Shopify collections, Shopify Search & Discovery, Shopify cart APIs, and Shopify native checkout.

Do not hard-code products, prices, collections, or promotional content.

Everything that a store administrator needs to change should be configurable through Shopify Admin and Theme Customizer.

---

# 2. Global Design System

Create a sophisticated luxury-fashion visual language.

Design characteristics:

- Premium
- Minimal
- Elegant
- Spacious
- Modern
- High-end typography
- Large lifestyle imagery
- Clean product cards
- Subtle animations
- Smooth transitions
- Strong mobile UX

Use a restrained neutral design system.

Create CSS variables for:

- Primary background
- Secondary background
- Primary text
- Secondary text
- Border
- Accent
- Sale
- Success
- Error

Create reusable typography classes and spacing variables.

Avoid excessive animations.

Animations should be subtle and performance-friendly.

---

# 3. Theme Architecture

Use Shopify Online Store 2.0.

Create:

/layout
/templates
/sections
/snippets
/assets
/config
/locales

Create reusable sections including:

- announcement-bar
- header
- hero-banner
- hero-slider
- benefits
- featured-collection
- category-grid
- promotional-banner
- product-slider
- shop-the-look
- brand-story
- featured-in
- reviews
- instagram-gallery
- blog-grid
- newsletter
- footer

Every section must have a valid Shopify schema so the administrator can configure it from Theme Customizer.

---

# 4. Announcement Bar

Create a configurable announcement bar.

Settings:

- Enable/disable
- Text
- Link
- Background
- Text color
- Close button
- Multiple announcements
- Auto-rotation

Example:

"FREE SHIPPING ON ORDERS ABOVE ₹999"

The administrator must be able to change the message without editing code.

---

# 5. Header

Create a responsive premium header.

Desktop:

Logo | Navigation | Search | Account | Wishlist | Cart

Navigation should support:

- Sunglasses
- Watches
- Couple Collection
- New Arrivals
- Best Sellers
- Sale

Support mega menus.

Header requirements:

- Sticky header
- Transparent header option
- Solid header option
- Mobile drawer
- Search button
- Account button
- Wishlist
- Cart count
- Predictive search
- Responsive navigation

Mobile header:

Hamburger | Logo | Search | Cart

---

# 6. Homepage Hero

Create a full-width hero section.

Admin settings:

- Desktop image
- Mobile image
- Heading
- Subheading
- Description
- Primary CTA
- Secondary CTA
- CTA URLs
- Text position
- Overlay
- Height
- Alignment

Example:

"DEFINE YOUR STYLE"

"Premium eyewear designed for modern individuals."

Buttons:

SHOP SUNGLASSES
EXPLORE NEW ARRIVALS

Use responsive images and lazy loading where appropriate.

---

# 7. Benefits Section

Create a four-column USP section.

Examples:

- Free Shipping
- Secure Payments
- Easy Returns
- Warranty Protection

Each item should support:

- Icon
- Heading
- Description
- Link

Mobile should become horizontally scrollable or stacked.

---

# 8. Featured Collection

Create configurable product collection sections.

Admin can select:

- Collection
- Number of products
- Products per row desktop
- Products per row tablet
- Products per row mobile
- Heading
- Description
- Button text
- Button URL
- Enable carousel
- Enable quick add

Product card must display:

- Product image
- Hover image
- Product title
- Rating
- Review count
- Sale price
- Compare-at price
- Discount percentage
- Sale badge
- New badge
- Sold-out badge
- Wishlist button
- Quick Add

---

# 9. Category Grid

Create premium visual category cards.

Categories:

- Sunglasses
- Watches
- Couple Collection
- New Arrivals

Each card should support:

- Image
- Mobile image
- Title
- Subtitle
- Button
- Link
- Overlay
- Text position

Cards should have subtle hover effects.

---

# 10. Promotional Banner

Create full-width promotional sections.

Settings:

- Image
- Mobile image
- Heading
- Description
- CTA
- CTA URL
- Text position
- Overlay
- Height

Example:

"THE NEW SEASON HAS ARRIVED"

"Discover our latest collection."

Button:

EXPLORE COLLECTION

---

# 11. Shop The Look

Create a fashion lookbook section.

Admin should be able to select:

- Lifestyle image
- Multiple products
- Hotspot positions
- Product title
- Product price
- Product link

Desktop:

Large lifestyle image with product hotspots.

Mobile:

Swipeable image/product layout.

Clicking a hotspot should display the related product.

---

# 12. New Arrivals

Create a product carousel using a selected Shopify collection.

Features:

- Swipe on mobile
- Arrow navigation desktop
- Product quick add
- Wishlist
- Product badges
- Reviews
- Sale pricing

---

# 13. Product Collection Page

Create a premium collection template.

Layout:

Breadcrumb
Collection title
Collection description
Banner image
Product grid

Sidebar/filter drawer:

- Availability
- Price
- Product Type
- Gender
- Color
- Material
- Collection
- Tags

Sorting:

- Featured
- Best Selling
- Newest
- Price Low to High
- Price High to Low
- Rating

Filters must work through Shopify's native filtering capabilities wherever possible.

Mobile must use a filter drawer.

---

# 14. Product Page

Create a high-converting product page.

Desktop:

Left:
Product media gallery

Right:
Product information

Display:

- Product title
- Rating
- Review count
- SKU
- Price
- Compare-at price
- Discount percentage
- Availability
- Variant selectors
- Quantity selector
- Add to Cart
- Buy Now
- Wishlist
- Shipping information
- Warranty
- Return information

Below:

- Description
- Specifications
- Materials
- Dimensions
- Care instructions
- Shipping
- Returns
- Warranty
- Reviews
- Related products

Create sticky Add to Cart on mobile.

---

# 15. Product Metafields

Support configurable metafields:

custom.material
custom.frame_material
custom.lens_material
custom.lens_color
custom.frame_color
custom.gender
custom.warranty
custom.product_dimensions
custom.weight
custom.country_of_origin
custom.care_instructions

Only display fields when values exist.

Do not display empty specifications.

---

# 16. Product Gallery

Create:

- Main image
- Thumbnail gallery
- Video support
- Zoom
- Swipe gestures
- Full-screen mobile gallery
- Responsive image loading

Use Shopify product media rather than hard-coded images.

---

# 17. Wishlist

Implement wishlist functionality.

Requirements:

- Guest wishlist
- Logged-in customer wishlist
- Add/remove product
- Wishlist count
- Wishlist page
- Persistent guest wishlist using browser storage
- Sync wishlist for authenticated users if supported by the chosen architecture

Product cards and product pages must include wishlist controls.

---

# 18. Reviews

Integrate a Shopify-compatible review solution.

Display:

- Average rating
- Review count
- Star distribution
- Customer reviews
- Verified purchase indicator
- Review images if supported
- Review pagination

Do not hard-code reviews.

---

# 19. Cart Drawer

Implement a fully functional AJAX cart drawer.

Features:

- Add product
- Remove product
- Increase quantity
- Decrease quantity
- Variant selection
- Cart subtotal
- Discount display
- Shipping message
- Recommended products
- Checkout button
- View cart button

Show cart drawer immediately after Add to Cart.

Use Shopify cart APIs.

---

# 20. Cart Page

Create:

- Cart items
- Quantity controls
- Remove
- Product image
- Product price
- Compare-at price
- Discount
- Subtotal
- Estimated shipping
- Discount code where Shopify supports it
- Recommended products
- Checkout button

Never build a custom payment processor.

Redirect customers to Shopify's secure checkout.

---

# 21. Search

Implement predictive search.

Search overlay should display:

- Products
- Collections
- Blog posts
- Search suggestions

Show:

- Product image
- Product title
- Price
- Compare-at price
- Sale badge

Create a mobile-friendly search interface.

---

# 22. Customer Accounts

Support Shopify customer accounts.

Include:

- Login
- Registration
- Account dashboard
- Orders
- Order details
- Addresses
- Profile
- Wishlist integration where possible

---

# 23. Footer

Create a multi-column footer.

Columns:

SHOP

- Sunglasses
- Watches
- New Arrivals
- Best Sellers
- Sale

INFORMATION

- About Us
- Contact Us
- FAQ
- Shipping
- Returns
- Warranty

LEGAL

- Privacy Policy
- Terms & Conditions
- Refund Policy
- Cookie Policy

CUSTOMER SUPPORT

- Email
- Phone
- WhatsApp

Newsletter:

"Subscribe to receive exclusive offers and new collection updates."

Social icons:

- Instagram
- Facebook
- YouTube
- LinkedIn

---

# 24. Blog

Create a premium blog listing.

Blog cards:

- Featured image
- Category
- Date
- Title
- Excerpt
- Read More

Blog article page:

- Hero image
- Title
- Author
- Date
- Content
- Related articles
- Social sharing

---

# 25. SEO

Implement Shopify SEO best practices.

Every page must support:

- SEO title
- Meta description
- Canonical URL
- OpenGraph
- Social image
- Breadcrumb structured data
- Product structured data
- Review structured data when valid
- Organization structured data
- Article structured data

Use semantic HTML.

Use one H1 per page.

Optimize image alt text.

---

# 26. Performance

The storefront must be optimized for Core Web Vitals.

Requirements:

- Responsive images
- WebP/AVIF where supported
- Lazy loading
- Above-the-fold image prioritization
- Minimal JavaScript
- Deferred JavaScript
- CSS optimization
- No unnecessary libraries
- No duplicate scripts
- Shopify CDN
- Proper font loading
- Avoid layout shift
- Avoid blocking resources

Do not sacrifice functionality for performance.

---

# 27. Accessibility

Follow WCAG-oriented practices.

Requirements:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- ARIA labels where necessary
- Accessible buttons
- Accessible forms
- Proper color contrast
- Image alt text
- Screen-reader-friendly navigation
- Accessible modal/drawer behavior

---

# 28. Analytics

Prepare the theme for:

- Shopify Analytics
- Google Analytics 4
- Meta Pixel
- Google Ads
- Conversion tracking

Important events:

- page_view
- view_item
- search
- add_to_cart
- remove_from_cart
- begin_checkout
- purchase
- wishlist_add
- newsletter_signup

Avoid duplicate tracking events.

---

# 29. Security

Do not expose:

- API secrets
- Private keys
- Payment credentials
- Admin credentials
- Customer sensitive data

Use Shopify's secure APIs and platform functionality.

Never store payment card information in the theme.

---

# 30. Theme Customizer

Every major section must be configurable from Shopify Theme Editor.

Do not require developers for:

- Changing hero images
- Changing banners
- Changing headings
- Changing CTA buttons
- Selecting collections
- Selecting products
- Changing section order
- Enabling/disabling sections
- Changing colors
- Changing typography settings where practical

---

# 31. Responsive Requirements

Support:

- Desktop
- Laptop
- Tablet
- Mobile

Breakpoints must be thoughtfully implemented.

Product grids should adapt automatically.

Example:

Desktop:
4 products

Tablet:
3 products

Mobile:
2 products

Hero images must support separate desktop/mobile assets.

---

# 32. Originality Requirement

Do NOT copy:

- Bavincis logo
- Bavincis brand name
- Bavincis product names
- Bavincis product images
- Bavincis copyrighted text
- Bavincis source code
- Exact proprietary assets

Instead create an original luxury fashion brand design with similar high-level e-commerce structure and functionality.

---

# 33. Testing

Before delivery, test:

### Homepage
- Hero
- Sliders
- Product sections
- Collection links
- CTA buttons

### Product
- Variant selection
- Add to Cart
- Buy Now
- Wishlist
- Reviews
- Images
- Inventory

### Cart
- Add
- Remove
- Quantity
- Cart drawer
- Checkout

### Collection
- Filters
- Sorting
- Pagination
- Product links

### Search
- Predictive results
- Search results
- No-results state

### Mobile
- Navigation
- Product gallery
- Cart drawer
- Checkout
- Filters
- Sticky Add to Cart

### SEO
- Metadata
- Structured data
- Canonical URLs
- Sitemap
- Robots

### Performance
- Core Web Vitals
- Image optimization
- JavaScript
- CSS
- Mobile performance

---

# 34. Final Acceptance Criteria

The finished Shopify store must:

1. Be fully functional.
2. Be responsive on all screen sizes.
3. Use Shopify products and collections.
4. Use Shopify's secure checkout.
5. Have working Add to Cart.
6. Have working Buy Now.
7. Have working cart drawer.
8. Have working collection filtering.
9. Have working sorting.
10. Have working search.
11. Have working wishlist.
12. Have review integration.
13. Have customer account functionality.
14. Have configurable homepage sections.
15. Have configurable product metafields.
16. Have SEO implementation.
17. Have analytics readiness.
18. Have accessibility support.
19. Have optimized performance.
20. Have no hard-coded business data.
21. Have no broken links.
22. Have no console errors.
23. Have no layout overflow on mobile.
24. Use original brand assets and content.
25. Be ready for production Shopify deployment.

Build the theme as production-quality code rather than a visual mockup.

Prioritize real Shopify functionality, maintainability, performance, accessibility, responsive design, SEO, and conversion optimization.