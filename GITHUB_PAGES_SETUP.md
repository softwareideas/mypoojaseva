# GitHub Pages Deployment Setup

This guide will help you deploy your My Pooja Seva application to GitHub Pages with optional custom domain support.

## Prerequisites

- A GitHub account
- Your code pushed to a GitHub repository
- (Optional) A custom domain name

## Deployment Steps

### 1. Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Build and deployment**:
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `gh-pages` and `/ (root)` folder
   - Click **Save**

**Note:** The `gh-pages` branch will be created automatically by the GitHub Actions workflow on first deployment.

### 2. Configure GitHub Actions Permissions

1. In your repository, go to **Settings** → **Actions** → **General**
2. Scroll down to **Workflow permissions**
3. Select **Read and write permissions**
4. Check **Allow GitHub Actions to create and approve pull requests**
5. Click **Save**

### 3. Deploy Your Site

The deployment will happen automatically when you:
- Push to the `main` branch
- Manually trigger the workflow from the **Actions** tab

To manually trigger:
1. Go to **Actions** tab in your repository
2. Click on **Deploy to GitHub Pages** workflow
3. Click **Run workflow** button
4. Select the `main` branch
5. Click **Run workflow**

### 4. Access Your Deployed Site

After successful deployment, your site will be available at:
- **GitHub Pages URL**: `https://softwareideas.github.io/mypoojaseva/`

## Configuration Details

Your project is configured to deploy from a branch:
- **Deployment Method**: Deploy from `gh-pages` branch
- **URL**: `https://softwareideas.github.io/mypoojaseva/`
- **Base Path**: `/mypoojaseva/` (configured in the workflow)
- **Build Process**: GitHub Actions builds and pushes to `gh-pages` branch automatically

### How Branch Deployment Works

1. You push code to the `main` branch
2. GitHub Actions workflow automatically:
   - Builds your project (`npm run build`)
   - Creates/updates the `gh-pages` branch
   - Pushes the built files to `gh-pages` branch
3. GitHub Pages serves the site from the `gh-pages` branch

**Branch Structure:**
- `main` - Your source code
- `gh-pages` - Built/compiled files (auto-generated, don't edit manually)

### Adding a Custom Domain (Optional)

If you want to use a custom domain in the future:

1. Create a `public/CNAME` file with your domain name
2. Update `.github/workflows/deploy.yml` to set `VITE_BASE_PATH: '/'`
3. Configure DNS records with your domain provider
4. Add the custom domain in GitHub Pages settings

For detailed instructions, see the [GitHub Pages custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Troubleshooting

### Deployment Fails

1. Check the **Actions** tab for error messages
2. Ensure GitHub Actions is enabled in repository settings
3. Verify workflow permissions are set correctly

### 404 Errors on Page Refresh

If you get 404 errors when refreshing pages (due to client-side routing):

1. Add a `404.html` file that redirects to `index.html`
2. Or use hash-based routing instead of browser history routing

### Build Errors

1. Test the build locally first: `npm run build`
2. Check that all environment variables are set correctly
3. Verify all dependencies are in `package.json`

## Environment Variables

If your app uses environment variables:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add your secrets (e.g., `VITE_FIREBASE_API_KEY`)
4. Update `.github/workflows/deploy.yml` to include them in the build step:

```yaml
- name: Build
  run: npm run build
  env:
    VITE_BASE_PATH: '/mypoojaseva/'
    VITE_FIREBASE_API_KEY: ${{ secrets.VITE_FIREBASE_API_KEY }}
    # Add other secrets as needed
```

## Local Testing

To test the production build locally:

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## Monitoring Deployments

1. Go to **Actions** tab to see deployment history
2. Click on any workflow run to see detailed logs
3. Each successful deployment will show the deployed URL

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Configuration](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)

## Quick Reference

### Deploy Commands

```bash
# Push to trigger automatic deployment
git add .
git commit -m "Your commit message"
git push origin main

# Or manually trigger from GitHub Actions tab
```

### File Structure

```
mypoojaseva/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   └── .nojekyll               # Prevents Jekyll processing
├── src/                        # Your source code
├── vite.config.ts              # Vite configuration with base path
└── GITHUB_PAGES_SETUP.md       # This file
```

## Support

If you encounter issues:
1. Check the Actions tab for deployment logs
2. Review GitHub Pages settings
3. Test the build locally with `npm run build && npm run preview`
4. Ensure the base path is correctly set to `/mypoojaseva/`
