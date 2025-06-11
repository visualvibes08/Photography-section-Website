# PHOTOG IIT Roorkee Showcase Website

This is the official photography website for IIT Roorkee, showcasing the best photographic work and talented photographers.

## 📸 Website Maintenance Guide

This website is designed to be easily maintained by non-technical users. Most content can be updated by simply editing JSON files or replacing images in specific folders.

### 🖼️ Image Management

All images are stored locally in the following folder structure:

```
public/
└── assets/
    ├── logo.png                  # Main logo image
    ├── photos/
    │   ├── photos_of_the_week/   # For the featured weekly photo
    │   ├── landscape/            # Landscape category photos
    │   ├── wildlife/             # Wildlife category photos
    │   ├── portrait/             # Portrait category photos
    │   ├── architecture/         # Architecture category photos
    │   ├── street/               # Street photography
    │   └── drishya-bg.jpg        # Background for Drishya section
    └── team/                     # Team member profile photos
```

To add or update images:
1. Place your new image in the appropriate folder
2. Use consistent naming conventions (e.g., `landscape1.jpg`, `landscape2.jpg`)
3. Update the corresponding JSON file if needed

### 📄 Content Management Files

All editable content is stored in JSON files:

```
public/
└── assets/
    └── data/
        ├── photo_of_the_week.json  # Photo of the week data
        ├── gallery_config.json     # Gallery configuration and photos
        ├── team.json               # Team member information
        └── drishya.json            # Drishya event information
```

### 📝 How to Update Content

#### Updating Photo of the Week

1. Place your new photo in `public/assets/photos/photos_of_the_week/`
2. Edit `public/assets/data/photo_of_the_week.json`:

```json
{
  "image": "/assets/photos/photos_of_the_week/your-new-photo.jpg",
  "photographer": "Photographer Name",
  "caption": "Photo description here",
  "week": "Week of Month Day, Year"
}
```

#### Updating Gallery Photos

1. Add your photos to the appropriate category folders
2. Edit `public/assets/data/gallery_config.json`:
   - Modify the `sectionTitle` to change the gallery heading
   - Add/edit entries in the `photos` array
   - Add new genres to the `genres` array if needed

```json
{
  "sectionTitle": "Top Shots of the Month",
  "genres": ["All", "Wildlife", "Street", "Portraits", "Landscape", "Architecture"],
  "photos": [
    {
      "id": 1,
      "image": "/assets/photos/category/filename.jpg",
      "genre": "Category",
      "photographer": "Name",
      "description": "Description",
      "settings": "ISO 100, f/8, 1/125s"
    }
  ]
}
```

#### Updating Team Information

1. Add team member photos to `public/assets/team/`
2. Edit `public/assets/data/team.json` to update member information

```json
{
  "secretary": {
    "id": 1,
    "name": "Name",
    "position": "Secretary",
    "image": "/assets/team/filename.jpg",
    "instagram": "@handle",
    "bio": "Bio text"
  },
  "additionalSecretaries": [ ... ],
  "jointSecretaries": [ ... ]
}
```

#### Updating Drishya Information

Edit `public/assets/data/drishya.json` to update:
- Stats displayed in the Drishya section
- Description text
- Event information
- Gallery images

### 🔄 Replacing the Logo

1. Create your logo image (PNG format recommended)
2. Name it `logo.png` and place it in `public/assets/`
3. The website will automatically use this image in the navbar

## Development

To run the development server:

```bash
npm install
npm run dev
```

## Building for Production

To build the site for production:

```bash
npm run build
```

The built files will be in the `dist` directory.
