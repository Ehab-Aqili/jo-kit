# Publishing Guide

This guide will help you publish your steps-package to npm.

## Prerequisites

1. Create an npm account at [npmjs.com](https://www.npmjs.com/signup) if you don't have one
2. Install Node.js and npm on your machine

## Steps to Publish

### 1. Login to npm

```bash
npm login
```

Enter your npm username, password, and email when prompted.

### 2. Update Package Information

Before publishing, update the following in `package.json`:

- **name**: Change to your desired package name (must be unique on npm)
- **version**: Adjust as needed (follow semantic versioning)
- **author**: Add your name or organization
- **repository**: Add your git repository URL
- **description**: Customize the description

### 3. Build the Package

```bash
npm run build
```

This will compile your TypeScript files to the `dist/` folder.

### 4. Test Locally (Optional but Recommended)

Test your package locally before publishing:

```bash
# In the steps-package directory
npm link

# In another project where you want to test
npm link steps-package
```

### 5. Publish to npm

```bash
npm publish
```

If this is your first time publishing this package, it will be published as public by default.

If the package name is already taken, you can publish it under a scope:

```bash
# Update package.json name to: @your-username/steps-package
npm publish --access public
```

### 6. Update Version for Future Releases

When you make changes and want to publish a new version:

```bash
# Patch version (1.0.0 -> 1.0.1)
npm version patch

# Minor version (1.0.0 -> 1.1.0)
npm version minor

# Major version (1.0.0 -> 2.0.0)
npm version major

# Then publish
npm publish
```

## Verification

After publishing, verify your package:

1. Visit `https://www.npmjs.com/package/steps-package` (or your package name)
2. Install it in a test project: `npm install steps-package`
3. Try importing and using the components

## Common Issues

### Package Name Already Exists

Use a scoped package name: `@your-username/steps-package`

### Authentication Error

Run `npm whoami` to check if you're logged in. If not, run `npm login` again.

### Build Errors

Make sure all dependencies are installed: `npm install`
Check for TypeScript errors: `npm run lint`

## Unpublishing (If Needed)

If you need to unpublish within 72 hours:

```bash
npm unpublish steps-package --force
```

**Note**: You can only unpublish versions published within the last 72 hours.

## Additional Resources

- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Semantic Versioning](https://semver.org/)
- [npm Scopes](https://docs.npmjs.com/about-scopes)
