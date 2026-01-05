# PO's World - Portfolio Website

A 3D interactive portfolio website built with Three.js, featuring an immersive 3D scene with animated models and interactive elements.

## Project Structure

```
portfolio_next_2025/
├── README.md
├── index.html              # Main homepage with 3D scene
├── about.html              # About page
├── contact.html            # Contact page
├── legal.html              # Legal/Cookie policy page
├── css/
│   ├── loader.css          # Loading screen styles
│   ├── menu.css            # Navigation menu styles
│   └── style.css           # Main stylesheet
├── js/
│   ├── app/                # Custom application code
│   │   ├── 3D.js           # Main 3D scene setup and animation
│   │   ├── buttons.js      # Button and modal interactions
│   ├── lib/                # Third-party libraries
│   │   ├── three.js        # Three.js core library
│   │   ├── stats.module.js # Performance monitoring
│   │   └── tween.module.min.js # Animation tweening
│   ├── loaders/            # Three.js loaders and utilities
│   │   ├── DRACOLoader.js  # Draco geometry compression loader
│   │   ├── GLTFLoader.js   # GLTF/GLB model loader
│   │   ├── OrbitControls.js # Camera orbit controls
│   │   └── MeshSurfaceSampler.js # Mesh surface sampling utility
│   └── draco/              # Draco decoder files
│       ├── draco_decoder.js
│       ├── draco_decoder.wasm
│       ├── draco_encoder.js
│       ├── draco_wasm_wrapper.js
│       ├── gltf/            # GLTF-specific decoder files
│       └── README.md
├── assets/
│   ├── images/             # Image assets
│   │   ├── poboisvert_og.png
│   │   ├── drag_animation.svg
│   │   └── swipe_animation.svg
│   └── icons/              # Favicons and icons
│       ├── apple-touch-icon.png
│       ├── favicon-16x16.png
│       ├── favicon-32x32.png
│       └── favicon.ico
└── models/                 # 3D model files (.glb format)
    ├── clapper.glb
    ├── cyclist.glb
    ├── flower.glb
    ├── island.glb
    ├── man.glb
    ├── mug.glb
    ├── robo.glb
    ├── scooter.glb
    ├── stag.glb
    ├── tree.glb
    └── treeline.glb
```

## Organization Rationale

### JavaScript Structure

- **`js/app/`**: Contains all custom application code. This separation makes it easy to identify what code is specific to this project versus third-party dependencies.

- **`js/lib/`**: Houses third-party libraries that are used as-is without modification. This includes core libraries like Three.js and utility libraries.

- **`js/loaders/`**: Contains Three.js loaders and related utilities. These are often modified or extended versions of community loaders, so they're kept separate from core libraries.

- **`js/draco/`**: Maintains the original structure as required by the Draco decoder library, which has specific path requirements for its WASM files.

### Asset Organization

- **`assets/images/`**: Contains all image assets including PNG files and SVG animations used in the UI.

- **`assets/icons/`**: Separates favicons and icon files from other images for better organization and easier management.

### Benefits

1. **Clear Separation**: Easy to distinguish between custom code, third-party libraries, and assets.
2. **Maintainability**: When updating dependencies, you know exactly where to look.
3. **Scalability**: Easy to add new features without cluttering the root directory.
4. **Readability**: The structure is self-documenting and follows common web development conventions.

## Technologies Used

- **Three.js**: 3D graphics library
- **GLTF/GLB**: 3D model format
- **Draco**: Geometry compression for optimized model loading
- **Vanilla JavaScript**: ES6 modules

## Development

This is a static website that can be served using any web server. For local development:

1. Use a local server (e.g., Python's `http.server`, Node's `http-server`, or VS Code's Live Server)
2. Open `index.html` in your browser

Note: Due to ES6 module imports, the site must be served over HTTP/HTTPS and cannot be opened directly via `file://` protocol.

## Browser Compatibility

Requires modern browsers with ES6 module support and WebGL capabilities.
