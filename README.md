# 🔗 OctoConnect: Showcase your team's awesome projects! 
___
## Visit the Demo: [OctoConnect](https://octoconnect.vercel.app/)
___
OctoConnect is a website that lets you easily display your team's projects on one page with GitHub profile details as a portfolio. It's super simple to use: just provide a GitHub link and it will automatically fill everything for you. No coding required! 🙌

## 🔗 Why OctoConnect?

I built this project because I wanted to show off my team's work and skills in a simple and elegant way. I think it's a great way to impress potential employers, clients, or collaborators with your amazing projects. 🚀

## 🔗 How to use OctoConnect for your own portfolio 
> Trust me, this is one of the easiest ways to create a stunning portfolio.

### Step 1: Deploy this repo on Vercel. 
1. **No need to fork this repo. Just click on the button below and deploy it on Vercel in seconds.**

<a href="https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fsubham-maity%2FOctoConnect&showOptionalTeamCreation=false">![](https://vercel.com/button)</a>

2. **Give it a Repository Name and click on the Create button. That's it!**

![Screenshot 2023-05-18 172211](https://github.com/Subham-Maity/OctoConnect/assets/97989643/bc7bb78a-35e6-409b-b037-91bf2ee0714c)


### Step 2: How to customize it?

1. **Now you can see your project is on GitHub.**
2. **Go to your GitHub repo and clone it or download it.**
3. **Open the project in your favorite code editor.**
4. **Open the `Your Data` folder in your root directory.**
5. **Edit the `Heading.json` file with your project details.**
```ts
{
  "title": "Name of your project",
  "question": "What is <Project-Name>?",
  "answer": "Explain your project in 2-3 lines."
}
```
> Just fill the `title`, `question` and `answer` fields.

6. **Edit the `GithubDetails.json` file with your team members' details.**
```ts
[
  {
    "name": "Your Name",
      
    "githubProfileLink": "https://github.com/<Github-Username>",
      
    "githubRepositoryLinks": [
        
        "https://github.com/<Github-Username>/<Github-Repository-Name>",

        "https://github.com/<Github-Username>/<Github-Repository-Name>"
    ]
  
  }
]
```
> Just fill the `name`, `githubProfileLink` and `githubRepositoryLinks` fields.
> - `name` is your name or nickname.
> - `githubProfileLink` is your GitHub profile link. Just replace `<Github-Username>` with your GitHub username.
> - `githubRepositoryLinks` are the links to the repositories you want to showcase. Just replace `<Github-Username>` and `<Github-Repository-Name>` with your GitHub username and repository name, or simply copy and paste the links here. You can add as many links as you want.


### Step 3: How to run it on your local machine?
> You can also make changes on GitHub and just commit and push them to your repo. It will automatically deploy on Vercel.
1. **Open your terminal** and run the following command to install the dependencies.
```bash
npm install
```
2. **Run the following command to start the development server.**
```bash
npm run dev
```
3. **Open your browser and go to `http://localhost:3000/`. Voila! You can see your portfolio in action!**

### Step 4: How to push the changes to your GitHub repo?

1. **Open your terminal** and run the following command to stage all the changes.
```bash
git add .
```
2. **Run the following command to commit the changes with a message.**
```bash
git commit -m "Your commit message"
```
3. **Run the following command to push the changes to your main branch.**
```bash
git push origin main
```

Congratulations 🎉, you have successfully deployed your portfolio on Vercel and now you can see it live on the web.


## 🔗 Api Rate Limit Increases to 5000 requests per hour

For more details on GitHub API Rate Limiting, please refer to the 
### ↠ [**In this Repo's doc**](https://github.com/Subham-Maity/OctoConnect/tree/main/Error%20Handle%20DOC/API%20rate%20limit%20exceeded)
### ↠ [**HashNode**](https://codexam.hashnode.dev/github-api-rate-limit-exceeded-problem)
### ↠ [**Dev.to**](https://dev.to/codexam/github-api-rate-limit-exceeded-problem-502f)

### Step 1. (Environment Variable Setup)
1. Clone the repo using the following command.
```bash
git clone https://github.com/Subham-Maity/OctoConnect.git
```
2. Open the project in your favorite code editor.
3. In the root directory, create a `.env.local` file or rename the `.env.local.example` file to `.env.local`.
```
You will see the following code in the `.env.local.example` file.

```ts
NEXT_PUBLIC_GITHUB_TOKEN=github_pat_11AXLTICY0jSz5k........

```
Copy the token and paste it in the `.env.local` file.

### Step 2.(Secret Key generation)

![Untitled-1 copy](https://github.com/Subham-Maity/OctoConnect/assets/97989643/dec1d1a8-1bc8-4df7-8dcb-4c3bc6dae8f1)

1. Open your github account and go to `Settings > Developer Settings(Bottom Left) 
2. Click on `Personal Access Tokens` and then click on `Tokens (classic)`.
3. Give a note name and select the `repo` scope.
4. Click on `Generate Token` and copy the token.
5. Paste the token in the `.env.local` file.

### Step 3.(Deploying on Vercel)

1. Open your terminal and run the following command to install the dependencies.
2. Run the following command `vercel link` to link your project to Vercel.
3. Now they will ask you to select a scope. Select your username. 
4. Now they will ask you to select a project. Select your project.
5. Run the following command `vercel env add NEXT_PUBLIC_GITHUB_TOKEN` to add the environment variable.
6. Now they will ask you to enter the value of the environment variable. Enter the token.
7. Now they will ask you to select the environment. Select `Production`.
8. Now you can see your project is on Vercel. (Additionally, you can commit and push the changes to your GitHub repo so that it will automatically deploy on Vercel.)
9. Go to your Vercel dashboard and open your project.
10. Go to `Settings > Environment Variables` and check if the environment variable is added or not.
11. If it is not added, then add it manually.
12. Now you can see your project is live on the web with the API rate limit increased to `5000 requests` per hour.


#### Example (`My Terminal Work`)
```bash
PS F:\mains\OctoMeetOfficial\octomeetdevelopers> vercel link 
Vercel CLI 29.3.4
? Set up “F:\mains\OctoMeetOfficial\octomeetdevelopers”? [Y/n] y
? Which scope should contain your project? subham-maity
? Found project “subham-maity/octomeetdevelopers”. Link to it? [Y/n] y
✅  Linked to subham-maity/octomeetdevelopers (created .vercel)
PS F:\mains\OctoMeetOfficial\octomeetdevelopers> vercel env add NEXT_PUBLIC_GITHUB_TOKEN
Vercel CLI 29.3.4
? What’s the value of NEXT_PUBLIC_GITHUB_TOKEN? github_pat_11AXLTICY0.....
? Add NEXT_PUBLIC_GITHUB_TOKEN to which Environments (select multiple)? Production
✅  Added Environment Variable NEXT_PUBLIC_GITHUB_TOKEN to Project octomeetdevelopers [308ms]
```

## 🔗 Features


## 🔗 Contributing

Contributions are always welcome! If you'd like to contribute to the project, please raise an issue before creating a pull request.

## 🌟 Star the Repo if you liked it :)

