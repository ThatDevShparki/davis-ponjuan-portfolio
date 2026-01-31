# Design System Migration Checklist

## ✅ Completed

- [x] Extract hard-coded colors to design tokens
  - Forest green accent (#2d7a3e, #246330)
  - Cream background (#fefbf5)
  - Charcoal text (#242424)
  - Gray variations (border-gray-200, border-gray-300, border-gray-800, text-gray-600)
- [x] Define typography scale (xs to 5xl with custom intermediate sizes)
- [x] Create spacing system (section, card, list, gap tokens)
- [x] Build border radius scale
- [x] Establish transition timings (400ms primary)
- [x] Define shadow system for elevation
- [x] Create reusable utility classes
  - `.link-primary`, `.link-foreground`
  - `.section-heading`, `.section-heading-sm`
  - `.btn-primary`
  - `.badge`
  - `.list-divider`
  - `.card`
  - `.press-quote`, `.press-quote-cite`
  - `.metadata`, `.metadata-separator`
  - `.section`, `.section-sm`
- [x] Add dark mode support
- [x] Implement reduced motion support
- [x] Document complete design system (DESIGN_SYSTEM.md)
- [x] Validate build passes

## 🔄 In Progress

None - extraction complete!

## 📋 Todo: Page Migration

Migrate existing pages to use the new utility classes. This can be done incrementally without breaking existing functionality.

### High Priority Pages

1. **src/pages/home.astro** - Main landing page
   - [ ] Replace `text-[#2d7a3e]` → `link-primary` or `text-primary`
   - [ ] Replace `border-b-2 border-gray-800` → `section-heading`
   - [ ] Replace inline link styles → utility classes
   - [ ] Use `.list-divider` for concert/press listings
   - [ ] Use `.metadata` for dates/venues

2. **src/layouts/BaseLayout.astro** - Site-wide layout
   - [ ] Replace `bg-[#2d7a3e]` in skip link → `bg-primary`
   - [ ] Replace navigation link classes → `.link-foreground` or custom nav class
   - [ ] Replace `text-gray-600` in footer → `text-muted-foreground`
   - [ ] Add `.print-hidden` to nav and footer

3. **src/pages/about.astro**
   - [ ] Replace heading borders → `section-heading`
   - [ ] Replace button styles → `btn-primary`
   - [ ] Replace link colors → `link-primary`

4. **src/pages/press.astro**
   - [ ] Replace blockquote styles → `press-quote`
   - [ ] Replace citation styles → `press-quote-cite`
   - [ ] Replace metadata styles → `metadata` with `metadata-separator`

5. **src/pages/concerts/index.astro**
   - [ ] Replace list dividers → `list-divider`
   - [ ] Replace badge styles → `badge`
   - [ ] Replace metadata colors → `metadata`
   - [ ] Replace heading underlines → `section-heading`

### Medium Priority Pages

6. **src/pages/index.astro** - Coming soon landing
   - [ ] Replace `bg-[#fefbf5]` → `bg-background`
   - [ ] Replace `text-[#242424]` → `text-foreground`
   - [ ] Replace inline styles → utility classes

7. **src/pages/concerts/[id].astro** - Concert detail
   - [ ] Audit for hard-coded colors
   - [ ] Apply utility classes

8. **src/pages/repertoire.astro**
   - [ ] Check for hard-coded values
   - [ ] Apply design system

9. **src/pages/recordings.astro**
   - [ ] Check for hard-coded values
   - [ ] Apply design system

10. **src/pages/workshops.astro**
    - [ ] Check for hard-coded values
    - [ ] Apply design system

11. **src/pages/organizations.astro**
    - [ ] Check for hard-coded values
    - [ ] Apply design system

12. **src/pages/cv.astro**
    - [ ] Check for hard-coded values
    - [ ] Apply design system

13. **src/pages/contact.astro**
    - [ ] Check for hard-coded values
    - [ ] Apply design system

### Components

14. **src/components/EmptyState.astro**
    - [ ] Already uses `.empty-state` - verify markup matches

15. **src/components/ui/button.tsx**
    - [ ] Ensure aligns with design system
    - [ ] Consider variant for `.btn-primary` pattern

## 🎯 Future Enhancements

### Shadcn Component Migration

Once pages are migrated, consider adding shadcn components for:

- [ ] Navigation menu component
- [ ] Card component (replace `.card` utility)
- [ ] Badge component (replace `.badge` utility)
- [ ] Typography component for semantic HTML
- [ ] Blockquote/Quote component
- [ ] Separator component (for list dividers)

### Design System Extensions

- [ ] Create dashed SVG divider component (Hello Jadey pattern from CLAUDE.md)
- [ ] Build rotating testimonial slider (Kristian Alexander pattern)
- [ ] Create calendar component with filters (Berliner Philharmoniker)
- [ ] Build sidebar info blocks (ARSIS pattern)
- [ ] Add middle-dot separator component for composer lists

### Accessibility Audit

- [ ] Verify WCAG AA compliance for all color tokens
- [ ] Test keyboard navigation with new components
- [ ] Validate screen reader announcements
- [ ] Test with actual users

### Performance

- [ ] Audit CSS bundle size
- [ ] Remove unused utility classes
- [ ] Optimize custom property performance

## 📊 Migration Strategy

**Recommended Approach:**

1. **Week 1**: Migrate high-priority pages (home, about, press, concerts)
2. **Week 2**: Migrate medium-priority pages and remaining content
3. **Week 3**: Review, test accessibility, performance audit
4. **Week 4**: Consider shadcn component additions

**Migration Process Per Page:**

1. Create a new branch for the page
2. Search for hard-coded values: `#2d7a3e`, `#246330`, `#fefbf5`, `#242424`, `gray-600`, `gray-200`, etc.
3. Replace with utility classes from DESIGN_SYSTEM.md
4. Test visually - should look identical
5. Test dark mode (if applicable)
6. Test reduced motion
7. Commit with descriptive message: `feat(design): migrate [page] to design system`

## 🔍 Testing Checklist

For each migrated page, verify:

- [ ] Visual parity (looks identical to before)
- [ ] Hover states work correctly
- [ ] Focus states are visible
- [ ] Dark mode (if implemented) works
- [ ] Reduced motion is respected
- [ ] Print styles work
- [ ] Screen readers announce correctly
- [ ] No console errors
- [ ] Build passes
- [ ] Lighthouse scores maintained or improved

## 📝 Notes

- Migration is **non-breaking** - old and new styles coexist
- Pages can be migrated incrementally without affecting others
- Utility classes reduce duplication and ensure consistency
- Design system tokens make future theme changes trivial
- All tokens align with CLAUDE.md design specifications

## 🎨 Design System Benefits

Once migration is complete:

1. **Consistency**: All colors, spacing, typography from central source
2. **Maintainability**: Change theme in one place, updates everywhere
3. **Dark mode**: Built-in support via CSS variables
4. **Accessibility**: Semantic tokens ensure proper contrast
5. **Performance**: Smaller CSS bundle (utility classes > inline styles)
6. **Developer experience**: Clear, documented patterns
7. **Scalability**: Easy to extend with new components

---

**Next Step**: Start with `src/pages/home.astro` migration using DESIGN_SYSTEM.md as reference.
