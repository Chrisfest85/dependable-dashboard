# Cloudflare Pages Deployment Configuration

## Build Settings

Use these settings when connecting your GitHub repository to Cloudflare Pages:

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/` (default)
- **Node.js version:** 18 or higher

## Environment Variables

Set these in the Cloudflare Pages dashboard under Settings > Environment Variables:

### Production & Preview Environments

```
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key
```

**Important:** For production, you should use Cloudflare Workers to proxy API requests and keep your API keys secure. Direct API calls from the frontend expose your keys to users.

## Deployment Steps

### Initial Setup

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**
3. Select your GitHub account and the `dependable-dashboard` repository
4. Configure build settings (see above)
5. Add environment variables (Settings > Environment Variables)
6. Click **Save and Deploy**

### Automatic Deployments

Once connected, Cloudflare Pages will automatically:
- Deploy your `main` branch to production
- Create preview deployments for pull requests
- Rebuild when you push to GitHub

### Custom Domain (Optional)

To use a custom domain:
1. Go to your Pages project > **Custom domains**
2. Click **Set up a custom domain**
3. Follow the DNS configuration instructions

## Next Steps

After basic deployment, consider:
1. Setting up Cloudflare Workers for secure API handling
2. Configuring custom headers for security
3. Setting up analytics and monitoring
