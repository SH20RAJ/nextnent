# NextNent

![License](https://img.shields.io/github/license/SH20RAJ/nextnent?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/SH20RAJ/nextnent?style=for-the-badge)
![Forks](https://img.shields.io/github/forks/SH20RAJ/nextnent?style=for-the-badge)
![Issues](https://img.shields.io/github/issues/SH20RAJ/nextnent?style=for-the-badge)

> 🛠️ **NextNent** is a marketplace where developers can share, buy, and open-source UI components built with [Shadcn](https://shadcn.dev/) and [NextUI](https://nextui.org/). Our goal is to provide a one-stop platform for high-quality, customizable components that help developers quickly build modern web applications.

![NextNent Banner](https://via.placeholder.com/1200x400?text=NextNent+Marketplace)

## 🚀 Features

- **Component Marketplace:** Discover and download UI components for Shadcn and NextUI.
- **Live Demos & Previews:** Interact with components before purchasing or downloading.
- **Open Source & Paid Options:** Choose between free, open-source components or premium paid ones.
- **User Profiles & Contributions:** Share your own components, earn badges, and gain recognition.
- **Advanced Search & Filters:** Easily find the components you need with category-based filters.

## 🏗️ Project Structure

This project uses the **App Directory** in **Next.js 14**, offering improved routing and layouts:

```plaintext
nextnent/
├── app/                     # App Directory for Next.js 14
│   ├── (components)/        # Reusable UI components
│   ├── (marketplace)/       # Marketplace-specific routes
│   │   ├── page.tsx         # Marketplace index page
│   │   ├── [componentId]/   # Dynamic component details page
│   ├── (profile)/           # User profile and settings
│   ├── layout.tsx           # Layout for the application
│   ├── page.tsx             # Home page
├── public/                  # Static assets (images, icons)
├── styles/                  # Global and component-specific styles
├── utils/                   # Utility functions (auth, API helpers)
├── middleware.ts            # Middleware for authentication and routing
└── prisma/                   # Database schema and ORM setup
```

## 🎨 UI Libraries

NextNent leverages the power of the following UI libraries:

- [Shadcn](https://shadcn.dev/) - Elegant component library with modern UI styles.
- [NextUI](https://nextui.org/) - A fully featured, customizable React UI library.

## 📸 Screenshots

> Showcase what your project looks like with screenshots.

![Home Page Screenshot](https://via.placeholder.com/800x500?text=NextNent+Home)
![Component Marketplace Screenshot](https://via.placeholder.com/800x500?text=Component+Marketplace)

## 🏁 Getting Started

Follow these instructions to get a local copy of the project up and running:

### Prerequisites

- **Node.js** >= 14.x
- **Yarn** or **npm**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SH20RAJ/nextnent.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd nextnent
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:** Navigate to [http://localhost:3000](http://localhost:3000) to see the app.

## 📚 Documentation

Explore our [Wiki](https://github.com/SH20RAJ/nextnent/wiki) for detailed documentation and guidelines on how to contribute.

## 🛠️ Contributing

We welcome contributions from the community! Please follow these steps:

1. **Fork the repository**
2. **Create a new branch** (`feature/YourFeature`)
3. **Commit your changes** (`git commit -m 'Add some feature'`)
4. **Push to the branch** (`git push origin feature/YourFeature`)
5. **Create a pull request**

For more details, refer to the [CONTRIBUTING.md](CONTRIBUTING.md).

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🧑‍💻 Authors

- **Shaswat Raj** - [GitHub](https://github.com/SH20RAJ)

## 💬 Connect with Us

[![Twitter](https://img.shields.io/badge/Twitter-NextNent-blue?style=for-the-badge&logo=twitter)](https://twitter.com/NextNent)
[![Discord](https://img.shields.io/badge/Discord-Join%20Community-7289DA?style=for-the-badge&logo=discord)](https://discord.gg/NextNent)

---

_This project is continuously evolving. Stay tuned for more updates!_
```

### Changes:
- The folder structure uses the **App Directory** format with nested routing for sections like components, marketplace, and user profiles.
- **`app/(components)/`, `app/(marketplace)/`, and `app/(profile)/`** are suggested folders to implement modular features within the app structure.
- Added a **`middleware.ts`** file entry for potential authentication and route protection.

This updated README will provide a solid starting point for contributors and helps set expectations for the project's scope. Let me know if you need any more details!