# Pooja Data Structure

This JSON file contains all pooja services offered by My Pooja Seva - Divine Services.

## How to Add New Poojas

1. Open `poojas.json`
2. Add a new object to the `poojas` array with the following structure:

```json
{
  "id": "unique-id-lowercase-with-hyphens",
  "name": "Pooja Name",
  "description": "Short description for cards (max 100 characters)",
  "fullDescription": "Detailed description for the pooja detail page",
  "image": "URL to the pooja image (800x600 recommended)",
  "price": "Starting price in Indian Rupees (e.g., '5,000')",
  "duration": "Expected duration (e.g., '2-3 hours')",
  "pandits": 1,
  "category": "birth|marriage|homam|grihapravesh|festival|special",
  "icon": "Emoji for category",
  "packages": [
    {
      "name": "Basic Package",
      "price": "4,800",
      "features": {
        "included": ["Feature 1", "Feature 2"],
        "excluded": ["Feature 3"]
      },
      "duration": "2 hours",
      "pandits": 1
    }
  ],
  "faq": [
    {
      "question": "What is this pooja?",
      "answer": "Detailed answer..."
    }
  ]
}
```

## Required Fields

- `id`: Unique identifier (lowercase with hyphens)
- `name`: Display name
- `description`: Short description for cards
- `image`: Image URL
- `price`: Starting price
- `duration`: How long it takes
- `pandits`: Number of pandits needed
- `category`: One of the categories above
- `icon`: Emoji for the category

## Optional Fields

- `fullDescription`: Detailed description for pooja detail page
- `packages`: Array of pricing packages (Basic, Standard, Premium)
- `faq`: Array of frequently asked questions

## Categories

- `birth`: Birth ceremonies (Naamkaran, Annaprasan, etc.)
- `marriage`: Wedding ceremonies (Vivah, Haldi, etc.)
- `homam`: Fire rituals (Ganapathi Homam, Rudra Abhishekam, etc.)
- `grihapravesh`: House-related ceremonies
- `festival`: Festival poojas (Diwali, Durga Pooja, etc.)
- `special`: Special occasion poojas (Vehicle Pooja, etc.)
