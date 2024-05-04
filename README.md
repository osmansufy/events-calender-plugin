
## Setup

1. Clone this repository into `wp-content/plugins`.
1. Install dependencies:
   ```sh
   composer install
   npm install
   npm run dev
   # To build production assets:
   npm run build
   ```
1. Activate the plugin from WordPress admin.

## Composer commands

- `composer install` - Install PHP dependencies.
- `composer update` - Update PHP dependencies.
- `composer dump-autoload` - Regenerate the autoloader.
