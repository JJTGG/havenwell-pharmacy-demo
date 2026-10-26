# Havenwell Pharmacy Demo

A fictional community-pharmacy website concept built by **TGG HUB** to demonstrate clear service information, accessible navigation, responsible health-related communication and a considered customer experience.

**Havenwell Pharmacy is a portfolio concept, not a verified operating pharmacy.**

## Project Purpose

The project explores how a pharmacy website could organise information so visitors can understand service categories, find general educational resources and see what information a genuine business should provide.

It is designed as a showcase of frontend implementation and website design. It is not a live pharmacy platform.

## Technology Stack

- Next.js with the App Router
- React
- TypeScript
- CSS with a shared design system
- Responsive layouts and mobile navigation
- Next.js metadata for page-level descriptions and site presentation

## Pages and Routes

| Route | Purpose |
|---|---|
| `/` | Homepage and introduction to the concept |
| `/services` | Illustrative pharmacy service categories |
| `/about` | Background and principles behind the concept |
| `/health-resources` | General educational topics and selected external references |
| `/contact` | Example contact-channel and location information architecture |
| `/privacy` | Privacy boundaries and demonstration limitations |
| Not found | Branded response for unavailable routes |

## Design Direction

The visual system uses a restrained, editorial approach with:

- Deep green and muted teal accents
- Warm neutral backgrounds
- Serif display headings paired with readable sans-serif body text
- Reusable page sections, cards, notices and calls to action
- Responsive navigation and layouts
- Visible keyboard-focus indicators and a skip-to-content link
- Reduced-motion support
- Clear disclosure that the pharmacy is fictional

## Important Limitations

Havenwell Pharmacy is fictional. This demonstration does not establish or represent the existence of a real pharmacy, registered practitioner, licence, physical location, medicine inventory or healthcare service.

The current project does not provide:

- Medicine ordering or payment processing
- Prescription uploads or prescription handling
- Patient accounts or medical records
- Consultations, diagnosis or individual treatment recommendations
- Screening, testing or other clinical services
- Appointment booking or operational customer support

The health-related copy is illustrative educational content, not individual medical advice. Visitors should consult appropriately qualified healthcare professionals about personal health concerns and seek urgent care when necessary.

**Do not submit real personal, prescription or medical information through demonstration features.**

External links lead to independently operated websites. Their content, availability and privacy practices are outside this project's control.

## Design and Accessibility

The interface is designed to demonstrate:

- Consistent page structure and navigation
- Reusable React components
- Responsive layouts for desktop and mobile
- Semantic HTML and accessible navigation labels
- Keyboard-visible focus states
- A skip-to-content link
- Reduced-motion support
- Branded handling of unavailable routes
- Clear separation between illustrative content and real services

These design intentions do not replace a formal accessibility audit or testing across devices and browsers.

## Run Locally

### Requirements

- Node.js 22
- npm

### 1. Clone the repository

```bash
git clone https://github.com/JJTGG/havenwell-pharmacy-demo.git
cd havenwell-pharmacy-demo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### 4. Type-check the project

```bash
npm run typecheck
```

### 5. Build for production

```bash
npm run build
```

The production build runs the TypeScript check before invoking the Next.js build.

### 6. Start the production server

After a successful build:

```bash
npm run start
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Next.js development server |
| `npm run typecheck` | Runs the TypeScript compiler without emitting files |
| `npm run build` | Type-checks the project and creates a production build |
| `npm run start` | Starts the production server |

## Configuration

The current project does not require application-specific environment variables.

The Next.js image configuration permits images hosted under the configured Cloudinary account path. No image upload or media-management workflow is included in the current feature set.

## Search Engine Visibility

The global metadata currently sets search-engine indexing to disabled. This is intentional for a fictional portfolio demonstration that should not be mistaken for a real pharmacy.

Review this setting before any public portfolio release and keep the fictional-business disclosure visible.

## Privacy and Data Handling

The current demonstration does not provide a customer account system, medical-information form, prescription upload, consultation booking or clinical messaging feature.

However, the absence of these features does not establish that every system involved in serving the website processes no information. Hosting providers and related infrastructure may process technical request information for delivery, security and troubleshooting.

The exact data processing and retention practices depend on the actual hosting and deployment configuration. They should be verified rather than assumed.

External websites linked from the project have their own operators and privacy practices.

## Before Adapting This Concept for a Real Pharmacy

This codebase is a starting point for discussion, not a ready-made healthcare deployment.

Before adapting it for a real organisation:

1. **Verify the organisation.** Confirm its identity, operating status and authority to provide each advertised service.
2. **Verify business information.** Confirm all contact details, location information, opening hours and service descriptions with the actual operator.
3. **Review health-related content.** Have proposed health information reviewed by appropriately qualified professionals.
4. **Define privacy practices.** Document actual data flows, retention practices, security controls and applicable legal requirements.
5. **Scope new functionality.** Implement and test any proposed contact forms, booking features, prescription workflows or payment integrations as separately defined features.
6. **Test the complete experience.** Check accessibility, mobile layouts, links, error states and production behaviour.
7. **Update public presentation.** Change metadata, branding and search-engine settings to reflect a real organisation only after the relevant information is verified.

Do not present the fictional Havenwell identity as a real pharmacy or imply that the demonstration has regulatory approval.

## Project Ownership and Attribution

Created as a website showcase by **TGG HUB**.

**Repository:** [JJTGG/havenwell-pharmacy-demo](https://github.com/JJTGG/havenwell-pharmacy-demo)

---

*Havenwell Pharmacy is a fictional portfolio concept. This project demonstrates website design and frontend implementation; it does not provide pharmacy or healthcare services.*