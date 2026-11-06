# AR Car Showroom

A marker-based Augmented Reality car showroom built with A-Frame and AR.js for the AR Activity assignment.

## Included assignment requirements

- Hiro marker scene with more than four visible objects.
- Multiple primitives: box, sphere, cylinder, ring and torus.
- Text labels using `<a-text>`.
- Different animations: car rotation, floating cube movement and rotating torus.
- One GLB model in `assets/showroom-car.glb` (original low-poly model created for this project).
- Interaction 1: tap the red sphere to cycle its colour.
- Interaction 2: tap the gold cylinder to toggle the showroom light/headlight effect using a custom component.
- Status banner changes text and colour when the Hiro marker is found or lost.
- Ready to publish as an HTTPS site with GitHub Pages or Netlify.

## Files

```text
ar_car_showroom/
├── index.html
├── style.css
├── README.md
├── js/
│   └── components.js
└── assets/
    └── showroom-car.glb
```

## Publish with GitHub Pages

1. Create a **public** GitHub repository.
2. Upload the contents of this folder (not just the ZIP file).
3. In the repository, open **Settings → Pages**.
4. Under Build and deployment, select **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.
6. Wait for the HTTPS site URL to appear.
7. Open the site on a phone and allow camera access.
8. Show a printed or on-screen Hiro marker to the camera.

## Test checklist

- [ ] Open the site using its HTTPS URL.
- [ ] Allow camera access.
- [ ] Point the camera at the Hiro marker.
- [ ] Confirm the car and other objects appear.
- [ ] Confirm the car rotates and the cube moves.
- [ ] Tap the red sphere and confirm its colour changes.
- [ ] Tap the gold cylinder and confirm the light effect toggles.
- [ ] Move the marker out of view and confirm the status banner changes.
- [ ] Test on a phone.

## 3D model licence and credit

The GLB model in `assets/showroom-car.glb` is an original stylized low-poly model generated specifically for this project from simple geometric meshes. It is not a downloaded third-party model and does not use the workshop duck. No third-party model licence applies to this generated asset.

## Technology credits

- A-Frame: https://aframe.io/
- AR.js: https://ar-js-org.github.io/AR.js-Docs/

## Submission reminder

Make the repository public, then paste its GitHub repository link into a Word document. Rename the Word document using your assigned group number before submitting.
