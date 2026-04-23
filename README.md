# ElectEdu 🇮🇳

**An interactive guide to understanding the Indian election process**

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/License-Open-blue)

## 📋 Overview

**ElectEdu** is a comprehensive web application designed to educate and inform users about the Indian electoral system. It demystifies the world's largest democratic exercise by providing detailed information about election processes, voting methods, state-specific timelines, and interactive tools.

With support for multiple languages and responsive design, this platform makes election information accessible to millions of voters across India.

## ✨ Features

- **State-Specific Information**: Select your state or union territory to view:
  - Upcoming and recent election dates
  - Number of seats in state assembly
  - Lok Sabha (Parliament) representation
  - Election status and timelines

- **Interactive Education**:
  - Comprehensive overview of the Indian election process
  - Step-by-step breakdown of electoral procedures
  - Timeline visualization of major election phases
  - How-to-vote guide with visual instructions

- **Multi-Language Support**: 
  - Google Translate integration for 100+ languages
  - Translation button conveniently placed in the navigation bar

- **Knowledge Quiz**:
  - Test your understanding of Indian elections
  - Interactive questions covering key concepts
  - Immediate feedback on answers

- **Responsive Design**:
  - Mobile-friendly interface
  - Works seamlessly across all devices
  - Touch-optimized navigation

- **Visual Enhancements**:
  - Smooth animations and transitions
  - Beautiful gradient backgrounds
  - Interactive statistics counters
  - Icon-based visual hierarchy

## 🛠️ Technologies Used

- **Frontend**:
  - HTML5
  - CSS3 (with modern features like Flexbox, Grid, and animations)
  - Vanilla JavaScript (ES6+)

- **Libraries & Services**:
  - [FontAwesome](https://fontawesome.com/) - Icon library
  - [Google Fonts (Outfit, Inter)](https://fonts.google.com/) - Typography
  - [Select2](https://select2.org/) - Enhanced select dropdown
  - [jQuery](https://jquery.com/) - DOM manipulation
  - [Google Translate API](https://translate.google.com/) - Multi-language support

## 📁 Project Structure

```
elect app/
├── index.html          # Main HTML file with page structure
├── style.css          # Stylesheet with responsive design
├── script.js          # JavaScript for interactivity and data handling
├── remove_bg.py       # Python utility (background removal for images)
├── transparent_logo.png # ECI Logo (transparent)
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for Google Translate and external libraries)

### Installation

1. **Clone or download the project**:
   ```bash
   git clone <repository-url>
   cd "elect app"
   ```

2. **Open in browser**:
   - Double-click `index.html` to open in your default browser, OR
   - Use a local server:
     ```bash
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

3. **Start exploring**:
   - Navigate through different sections using the navigation bar
   - Select your state to view specific election information
   - Take the quiz to test your knowledge

## 📖 Usage Guide

### Navigation
- **Overview**: Introduction to Indian elections
- **My State**: Select your state/UT for specific information
- **Elections**: Learn about the basics of Indian elections
- **Steps**: Understand the step-by-step election process
- **Timeline**: Visual timeline of election phases
- **How to Vote**: Instructions on voting procedures
- **Quiz**: Interactive knowledge assessment

### State Selection
1. Click on "My State" section
2. Select your state or union territory from the dropdown
3. View upcoming/recent election dates and details
4. See assembly seats and Lok Sabha representation

### Translation
1. Click the translation button in the top-right corner
2. Choose your preferred language
3. Content will be translated accordingly

## 📊 Data Coverage

The application includes election data for all 28 states and 8 union territories of India:

**States**: Andhra Pradesh, Bihar, Chhattisgarh, Gujarat, Haryana, Himachal Pradesh, Jharkhand, Karnataka, Kerala, Madhya Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Odisha, Punjab, Rajasthan, Sikkim, Tamil Nadu, Telangana, Tripura, Uttar Pradesh, Uttarakhand, West Bengal, Assam, Goa

**Union Territories**: Andaman & Nicobar Islands, Chandigarh, Dadra & Nagar Haveli, Daman & Diu, Lakshadweep, Ladakh, Puducherry, Delhi

## 🎨 Design Highlights

- **Color Scheme**:
  - Primary: Blue (#2563eb) - Trust and stability
  - Secondary: Green (#059669) - Progress and democracy
  - Accent: Purple (#7c3aed) - Innovation

- **Typography**:
  - Headings: Outfit font family
  - Body text: Inter font family

- **Responsive Breakpoints**:
  - Desktop: Full navigation and layout
  - Tablet: Optimized spacing
  - Mobile: Hamburger menu and vertical layout

## 🔧 Customization

### Adding New States
Edit the `stateElectionData` object in `script.js` to add new states or update election information:

```javascript
const stateElectionData = {
    "State Name": {
        dates: "Election Dates",
        seats: "Assembly Seats",
        ls: "Lok Sabha Seats",
        status: "Status",
        type: "recent|upcoming"
    }
};
```

### Styling
- Modify CSS variables in `style.css` for colors and layout
- All custom colors are defined in `:root` for easy theme changes
- Use the `--transition` variable for consistent animations

## 📱 Browser Compatibility

- ✅ Chrome/Chromium (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Edge (90+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Limitations

- Requires internet connection for Google Translate functionality
- Some interactive features depend on JavaScript being enabled
- Mobile menu closes when selecting a link

## 🚀 Future Enhancements

- [ ] Offline mode support
- [ ] PWA (Progressive Web App) capabilities
- [ ] Dark mode toggle
- [ ] Accessibility improvements (WCAG 2.1 AA compliance)
- [ ] Real-time election updates
- [ ] PDF download of state-specific information
- [ ] Detailed candidate information
- [ ] Polling station locator

## 📝 License

This project is open source and available for educational purposes.

## 🙏 Credits

- **Election Commission of India (ECI)** - Official election information
- **Google Translate** - Multi-language support
- **FontAwesome** - Icons
- **Google Fonts** - Typography

## 📞 Contact & Support

For questions, suggestions, or feedback about this project, please reach out through appropriate channels.

---

**Note**: This is an educational resource. For official election information, always refer to the [Election Commission of India](https://www.eci.gov.in/) website.

Last Updated: April 2026
