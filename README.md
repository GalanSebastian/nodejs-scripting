# Cloudflare API Interaction for Automatic Site Creation

CIQ-ASC-CLOUDFLARE-API-INTERACTION is a node.js app for dealing with Cloudflare API and notifying the ciq-setting-service with the status of a domain creation.

More information can be found in this [document](https://wiki.perion.com:8443/pages/viewpage.action?pageId=114997790)

## Usage

### Step 1

Create a `.env` file with the following variables in the root level of the app

```sh
API_AUTH_EMAIL="$YOUR_EMAIL$"
API_AUTH_KEY="$YOUR_KEY$"

DOMAIN_NAME="$YOUR_DOMAIN_NAME$"
API_GATEWAY="$YOUR_API_GATEWAY$"
CUSTOM_ORIGIN_SERVER="$YOUR_CUSTOM_ORIGIN_SERVER$" ---> optional setting for mini-sites only
```

### Step 2

Install all the dependencies

```sh
npm install
```

### Step 3

Start the application

```sh
npm run start
```

### Enjoy

😉