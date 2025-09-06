# NewsLyfe — News Workspace (Developer Preview)

<p align="center">
  <img src="docs/banner/banner-coming-soon.png" alt="Coming Soon Banner" width="80%">
</p>

[![Status](https://img.shields.io/badge/status-in_development-orange)](https://github.com/newslyfe/newslyfe-demo)
[![Technology](https://img.shields.io/badge/built_with-React%20%7C%20Electron-blue)](https://reactjs.org/)
[![License](https://img.shields.io/badge/license-Proprietary-red)](./LICENSE)

> Build your own, personal news hub.

---

## 🎯 Problem & Solution

The global news stream is chaotic and unmanageable with traditional tools. NewsLyfe organizes this information flood into a focused, high-performance workspace, giving users back control. Nearly 100,000 new articles arrive daily from almost 7,000 sources—all in a single, manageable interface.

**The platform is algorithmically neutral.** We do not rank, highlight, or remove news. Display is strictly chronological; content and freshness are the responsibility of the source domains. Our goal is to provide a clean, manipulation-free tool for users.

This is a web application that brings native software functionality to the browser. Responsiveness, customization, persistence, and modularity go far beyond what a typical website offers.

---

## ✨ Key Features

- ✅ **Tab-based Workspace:** Dynamically create, organize, and persist tabs—each representing a separate workflow (news feed, search, etc.).
- ✅ **Real-time Filtering & Search:** Instantly narrow results by country, language, and keywords using a filter pipeline.
- ✅ **Unified Interface:** Manage text articles and news videos from various sources on a single, clean interface.

---

## 🖼️ In Action

<table width="100%">
  <tr>
    <td width="50%" valign="top">
      <p align="center">
        <strong>Central Workspace</strong>
      </p>
      <a href="docs/screenshots/main-screen-1.png">
        <img src="docs/screenshots/main-screen-1.png" alt="NewsLyfe main view" width="90%"/>
      </a>
    </td>
    <td width="50%" valign="top">
      <p align="center">
        <strong>Real-time Filtering</strong>
      </p>
      <a href="docs/screenshots/main-screen-2.png">
        <img src="docs/screenshots/main-screen-2.png" alt="NewsLyfe filtering options" width="90%"/>
      </a>
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center" valign="top">
       <p align="center">
        <strong>Advanced Customization</strong>
      </p>
      <a href="docs/screenshots/main-screen-3.png">
        <img src="docs/screenshots/main-screen-3.png" alt="NewsLyfe customization panel" width="80%"/>
      </a>
    </td>
  </tr>
</table>

*(The user interface is currently under active development.)*

---

## ⚙️ Technology Stack

The platform is designed for performance and scalability. Central state management is handled by a custom, tab-based logic (`TabController`), ensuring modular and efficient operation.

**Highlighted stack:**
- **Frontend:** React
- **State management:** Context API, `TabController`
- **Local storage:** IndexedDB (for workspace persistence)
- **Desktop version:** Electron
- **Mobile platforms (in preparation):** iOS & Android

---

## 🚀 Development Status & Roadmap

The project is currently in active development. Top priorities:

- [ ] **MVP Functionality:** Stabilize and test core features.
- [ ] **Tab-based Workflow:** Refine tab creation, deletion, and organization.
- [ ] **Filter Pipeline:** Optimize and expand filtering and search logic.
- [ ] **Bugfixes & UX Polish:** Ongoing improvements based on user feedback.

---

## 🤝 Contribution & Feedback

This repository is open for public testing and bug reporting. Contributions are primarily internal at this stage.

**Feedback and bug reports are welcome via GitHub Issues.** Every comment helps us improve the software.

---

## 📜 License & Contact

The project license can be found in the `LICENSE` file. (Currently: Proprietary)

For questions, open an [Issue here](https://github.com/newslyfe/newslyfe-demo/issues), or email us at [newslyfe.team@gmail.com](mailto:newslyfe.team@gmail.com).
