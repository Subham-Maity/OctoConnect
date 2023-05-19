# API Rate Limit Exceeded Problem


Basically we are using `https://api.github.com/users/subham-maity` to get the data of the user. We are using `fetch` to get the data from the API. We are using `useEffect` to fetch the data from the API. 

If you visit `https://api.github.com/users/subham-maity` you will get the data something like this
```json
{
  "login": "Subham-Maity",
  "id": 97989643,
  "node_id": "U_kgDOBdc0Cw",
  "avatar_url": "https://avatars.githubusercontent.com/u/97989643?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Subham-Maity",
  "html_url": "https://github.com/Subham-Maity",
  "followers_url": "https://api.github.com/users/Subham-Maity/followers",
  "following_url": "https://api.github.com/users/Subham-Maity/following{/other_user}",
  "gists_url": "https://api.github.com/users/Subham-Maity/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Subham-Maity/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Subham-Maity/subscriptions",
  "organizations_url": "https://api.github.com/users/Subham-Maity/orgs",
  "repos_url": "https://api.github.com/users/Subham-Maity/repos",
  "events_url": "https://api.github.com/users/Subham-Maity/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Subham-Maity/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Subham ",
  "company": "CodeXam",
  "blog": "https://codexam.vercel.app/",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "⚡Real Life Goku!\r\n~ i DON'T LIMIT \r\nmy\r\n  CHALLENGES,\r\nCHALLENGE\r\n   my\r\nLIMITS.",
  "twitter_username": "code_xam",
  "public_repos": 161,
  "public_gists": 8,
  "followers": 727,
  "following": 65,
  "created_at": "2022-01-18T21:18:09Z",
  "updated_at": "2023-05-11T17:54:24Z"
}
```

But after deploying this, you might not get the data. You will get an error like this when you visit the link `https://api.github.com/users/<your-username>` (Your API link)
```json
{"message":"API rate limit exceeded for 49.37.45.101. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
  "documentation_url":"https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"}
```

The GitHub REST API allows you to interact with GitHub resources and data using HTTPS requests. However, the API has some limitations and rules that you need to follow to avoid errors and ensure the best performance. One of these rules is rate limiting, which means that you can only make a certain number of requests per hour to the API.

### What is rate limiting and why does it exist?

Rate limiting is a mechanism that GitHub uses to control the amount of traffic and load on the API servers. Different types of API requests have different rate limits, and some endpoints have dedicated limits. For example, the search endpoint has a custom rate limit that is separate from the other REST API endpoints. The rate limit also depends on whether you are making authenticated or unauthenticated requests, and whether you are using a personal access token, an OAuth app, or a GitHub app.

Rate limiting helps GitHub to provide a reliable and consistent service for all users and integrations. It also prevents abuse and misuse of the API by malicious or faulty clients. If you exceed the rate limit, you will receive a 403 Forbidden response with a message like this:

```json
{"message":"API rate limit exceeded for 49.37.45.101. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)", "documentation_url":"https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"}
```

### How to check your rate limit status and avoid errors?

You can check your current rate limit status at any time by making a GET request to the /rate_limit endpoint. This request does not count against your rate limit quota. The response will include a resources object that contains information about your rate limit status for different categories of requests, such as core, search, graphql, integration_manifest, and code_scanning_upload. For example:

```json
{
  "resources": {
    "core": {
      "limit": 5000,
      "remaining": 4999,
      "reset": 1372700873,
      "used": 1
    },
    "search": {
      "limit": 30,
      "remaining": 18,
      "reset": 1372697452,
      "used": 12
    },
    ...
  }
}
```

The response will also include a rate object that provides your overall rate limit status for all non-search-related resources in the REST API. However, this object is deprecated and you should use the core object instead.

You can also use the x-ratelimit response headers to check your rate limit status after every request. These headers include information such as x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-used, and x-ratelimit-reset.

To avoid exceeding the rate limit and getting errors, you should follow some best practices when using the REST API:

- Use conditional requests and caching to reduce unnecessary requests and save bandwidth.
- Use webhooks instead of polling to get notified of events and changes in real time.
- Use the appropriate authentication method for your use case and scenario. Authenticated requests have a higher rate limit than unauthenticated requests.
- Use GitHub Apps or OAuth Apps instead of personal access tokens when possible. GitHub Apps and OAuth Apps have more granular permissions and scopes than personal access tokens.
- Use client ID and client secret parameters to increase your unauthenticated rate limit for some endpoints.
- Respect the retry-after header when you receive a 403 response due to rate limiting. This header tells you how many seconds to wait before retrying your request.
- Follow the guidelines and recommendations in the REST API documentation for each endpoint and resource.





### What is the normal request without authentication?

A normal request without authentication is a request that does not include any token or credentials in the Authorization header of the request. For example:

```bash
curl --request GET \
  --url "https://api.github.com/octocat" \
  --header "X-GitHub-Api-Version: 2022-11-28"
```

A normal request without authentication can access some endpoints and resources in the REST API, but it has some limitations and disadvantages:

- It has a lower rate limit of 60 requests per hour per IP address. If you exceed this limit, you will receive a 403 Forbidden response with a message like this:

```json
{"message":"API rate limit exceeded for 49.37.45.101. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)", "documentation_url":"https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"}
```

- It cannot access endpoints and resources that require authentication or return additional information if you are authenticated. For example, you cannot access your own user data, your repositories, your organizations, your notifications, etc. If you try to access these endpoints without authentication, you will receive a 404 Not Found or 403 Forbidden response.

### What should be after authentication request?

An authentication request is a request that includes a token or credentials in the Authorization header of the request. For example:

```bash
curl --request GET \
  --url "https://api.github.com/octocat" \
  --header "Authorization: Bearer YOUR-TOKEN" \
  --header "X-GitHub-Api-Version: 2022-11-28"
```

An authentication request can access more endpoints and resources in the REST API, and it has some advantages over a normal request without authentication:

- It has a higher rate limit of 5000 requests per hour per authenticated user or app. If you exceed this limit, you will receive a 403 Forbidden response with a message like this:

```json
{"message":"API rate limit exceeded for user ID 1.", "documentation_url":"https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"}
```

- It can access endpoints and resources that require authentication or return additional information if you are authenticated. For example, you can access your own user data, your repositories, your organizations, your notifications, etc.

### How to authenticate?

You can authenticate to the REST API in different ways depending on your use case and scenario. The most common ways are:

- Using a personal access token: If you want to use the REST API for personal use, you can create a personal access token and use it in the Authorization header of your request. For more information, see " Creating a personal access token ."

- Using an OAuth app: If you want to use the REST API for an organization or on behalf of another user, you can create an OAuth app and use it to obtain an OAuth token from the user. You can then use this token in the Authorization header of your request. For more information, see " Authorizing OAuth Apps ."

- Using a GitHub app: If you want to use the REST API for an organization or on behalf of another user, you can also create a GitHub app and use it to obtain an installation access token or a user access token from the user. You can then use this token in the Authorization header of your request. For more information, see " About authentication with a GitHub App ."

### What is secret key?

A secret key is a string that is used to encrypt and decrypt data or to sign and verify messages. A secret key should be kept confidential and not shared with anyone or included in client-side browser code.

In the context of the REST API, a secret key is used by some authentication methods to generate or verify tokens or signatures. For example:

- A personal access token (classic) has a secret key that is generated when you create the token. You can use this secret key as your token in the Authorization header of your request.

- An OAuth app has a client secret that is generated when you register the app. You can use this client secret along with your client ID to obtain an OAuth token from the user.

- A GitHub app has a private key that is generated when you create the app. You can use this private key to sign JSON web tokens (JWTs) that are used to authenticate as the app.

### How to get secret key step by step in GitHub developer settings?

Depending on which authentication method you want to use, you can get your secret key from different places in GitHub developer settings.

- To get your personal access token (classic) secret key, follow these steps:

    - In the upper-right corner of any page on GitHub.com, click your profile photo, then click Settings.
    - In the left sidebar, click Developer settings.
    - In the left sidebar, click Personal access tokens.
    - Click Generate new token.
    - Give your token a descriptive name.
    - Select scopes for your token based on what you want to do with it.
    - Click Generate token.
    - Copy your new personal access token (classic) secret key and save it somewhere secure.

- To get your OAuth app client secret, follow these steps:

    - In the upper-right corner of any page on GitHub.com, click your profile photo, then click Settings.
    - In the left sidebar, click Developer settings.
    - In the left sidebar, click OAuth Apps.
    - Click New OAuth App.
    - Fill out the required fields for your app.
    - Click Register application.
    - Copy your new OAuth app client ID and client secret and save them somewhere secure.

- To get your GitHub app private key, follow these steps:

    - In the upper-right corner of any page on GitHub.com, click your profile photo, then click Settings.
    - In the left sidebar, click Developer settings.
    - In the left sidebar, click GitHub Apps.
    - Click New GitHub App.
    - Fill out the required fields for your app.
    - Click Create GitHub App.
    - Under the Private keys section at the bottom of the page, click Generate a private key.
    - Download your new GitHub app private key file (.pem) and save it somewhere secure.
