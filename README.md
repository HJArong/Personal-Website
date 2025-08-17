# Hazel Arong - Portfolio

A beautiful, modern portfolio website built with Vue 3, showcasing Hazel Arong's creative work and professional experience.

## Features

- **Modern Design**: Clean, responsive design with beautiful animations
- **Smooth Navigation**: Fixed header with smooth scrolling between sections
- **Responsive Layout**: Optimized for all device sizes
- **Accessibility**: Built with accessibility best practices
- **Performance**: Fast loading with optimized assets
- **Custom Components**: Reusable Button and Tab components
- **SCSS Styling**: Organized with variables and mixins

## Sections

1. **About**: Personal introduction, skills, and expertise
2. **Works**: Portfolio projects with descriptions and technologies
3. **Contact**: Contact form and contact information

## Tech Stack

- **Frontend**: Vue 3 with Composition API
- **Styling**: SCSS with custom variables and mixins
- **Build Tool**: Vite
- **Fonts**: DM Serif Display (headings) and Poppins (body text)
- **Icons**: Custom SVG icons for social media

## Color Scheme

- **Primary Color**: #FC4487 (Pink)
- **Text Colors**: 
  - Primary: #1E1E1E
  - Secondary: #4a4a4a
  - Tertiary: #6b6b6b
  - Disabled: #b0b0b0

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hazel-arong-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/
│   └── styles/
│       ├── variables.scss    # Color, typography, and spacing variables
│       └── mixins.scss       # Reusable SCSS mixins
├── components/
│   ├── _generics/           # Reusable generic components
│   │   ├── Button.vue       # Button component
│   │   ├── Tab.vue          # Tab component
│   │   ├── TextBox.vue      # Text display component
│   │   ├── InputField.vue   # Form input component
│   │   ├── Tag.vue          # Tag/label component
│   │   ├── Modal.vue        # Modal dialog component
│   │   ├── Toast.vue        # Toast notification component
│   │   └── index.js         # Component exports
│   ├── Header.vue           # Navigation header
│   ├── Footer.vue           # Footer with social links
│   └── sections/
│       ├── About.vue        # About section
│       ├── Works.vue        # Portfolio projects
│       └── Contact.vue      # Contact form and info
├── App.vue                  # Main application component
└── main.js                  # Application entry point
```

## Customization

### Colors
Edit `src/assets/styles/variables.scss` to change the color scheme.

### Content
Update the content in each section component:
- `About.vue`: Personal information and skills
- `Works.vue`: Portfolio projects
- `Contact.vue`: Contact information and form
- `Footer.vue`: Social media links

### Fonts
The project uses Google Fonts. Update the font imports in `App.vue` if needed.

## Components

### Generic Components

All generic components are located in `src/components/_generics/` and can be imported individually or from the index file.

#### Button Component
```vue
<Button 
  variant="primary|secondary|ghost"
  size="small|medium|large"
  :disabled="false"
  @click="handleClick"
>
  Button Text
</Button>
```

#### Tab Component
```vue
<Tab 
  :active="true"
  :disabled="false"
  @click="handleClick"
>
  Tab Text
</Tab>
```

#### TextBox Component
```vue
<TextBox 
  variant="heading|body|caption|label"
  size="small|medium|large"
  weight="light|normal|medium|semibold|bold"
  color="primary|secondary|tertiary|disabled|accent"
  align="left|center|right|justify"
>
  Text content
</TextBox>
```

#### InputField Component
```vue
<InputField
  v-model="value"
  label="Field Label"
  type="text|email|password|number|tel|url|search"
  placeholder="Enter text..."
  :required="true"
  :disabled="false"
  :readonly="false"
  error="Error message"
  hint="Helpful hint"
  size="small|medium|large"
  :icon="true"
  @input="handleInput"
  @focus="handleFocus"
  @blur="handleBlur"
/>
```

#### Tag Component
```vue
<Tag
  variant="default|primary|success|warning|error|info"
  size="small|medium|large"
  :removable="true"
  :clickable="true"
  @click="handleClick"
  @remove="handleRemove"
>
  Tag Text
</Tag>
```

#### Modal Component
```vue
<Modal
  v-model="isOpen"
  title="Modal Title"
  size="small|medium|large|full"
  :closable="true"
  :closeOnOverlay="true"
  :persistent="false"
  @close="handleClose"
>
  <template #header>
    Custom header content
  </template>
  
  Modal content goes here
  
  <template #footer>
    <Button @click="handleSave">Save</Button>
    <Button variant="secondary" @click="handleCancel">Cancel</Button>
  </template>
</Modal>
```

#### Toast Component
```vue
<Toast
  v-model="showToast"
  title="Success!"
  message="Operation completed successfully"
  variant="default|success|error|warning|info"
  :duration="5000"
  :closable="true"
  :persistent="false"
  @close="handleClose"
>
  Custom toast content
</Toast>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Contact

For any questions or suggestions, please reach out to Hazel Arong at hazel.arong@gmail.com
