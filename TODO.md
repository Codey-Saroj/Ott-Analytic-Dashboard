# TODO — OTT Streaming Analytics Dashboard UI/UX Polish

## Step 1 — Design system + cleanup
- [x] Refactor `src/styles/dashboard.css` to use CSS variables (palette, spacing, radii, shadows)
- [x] Remove duplicate CSS blocks (e.g. duplicate `.chart-card`)
- [x] Fix base layout + typography defaults



## Step 2 — Full responsiveness
- [ ] Add media queries for 1920 / 1366 / 768 / 480
- [ ] Make stats grid reflow (3 → 2 → 1)
- [ ] Stack charts grid on smaller screens
- [ ] Ensure table scrolls horizontally on mobile

## Step 3 — Sidebar
- [ ] Replace emoji icons with Lucide React icons
- [ ] Desktop: fixed sidebar
- [ ] Tablet/mobile: collapsible sidebar with smooth slide animation
- [ ] Add active menu highlighting

## Step 4 — Header
- [ ] Make header sticky + glassmorphism styling
- [ ] Improve search box UX
- [ ] Add notification/profile hover effects
- [ ] Replace theme button emoji with proper icon button
- [ ] Remove `console.log` from `Header.jsx`

## Step 5 — Stat cards
- [ ] Equal height cards + improved typography
- [ ] Soft shadows + subtle hover animation
- [ ] Replace emoji icons with Lucide icons

## Step 6 — Charts (Recharts)
- [ ] Improve padding, grid alignment, heights
- [ ] Update axes colors + tooltip styling
- [ ] Ensure responsive resizing stays correct

## Step 7 — Trending movies
- [ ] Fix poster sizing consistency
- [ ] Hover scale + shadow + smooth transitions
- [ ] Add rating + genre badges (after updating data if needed)

## Step 8 — Recently added table
- [ ] Modern table styling: zebra rows, hover rows
- [ ] Sticky header
- [ ] Responsive scrolling wrapper

## Step 9 — Empty states
- [ ] Show empty feedback when search returns no results

## Step 10 — Movie data upgrade
- [ ] Update `src/data/movies.json` to include genre/rating/year/duration/status/subscribers fields
- [ ] Update UI to display those fields as badges

## Step 11 — Verify
- [ ] Manual QA at 1920/1366/768/480
- [ ] Ensure search + theme toggle + charts remain functional

