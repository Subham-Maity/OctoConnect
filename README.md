# 🔗 OctoConnect: Showcase your team's awesome projects! 
___
## Visit the Demo: [OctoConnect](https://octoconnect.vercel.app/)
___
OctoConnect is a website that lets you easily display your team's projects on one page with GitHub profile details as a portfolio. It's super simple to use: just provide a GitHub link and it will automatically fill everything for you. No coding required! 🙌

### Why OctoConnect?

I built this project because I wanted to show off my team's work and skills in a simple and elegant way. I think it's a great way to impress potential employers, clients, or collaborators with your amazing projects. 🚀

## How to use OctoConnect for your own portfolio 
> Trust me, this is one of the easiest ways to create a stunning portfolio.

### Step 1: Deploy this repo on Vercel. 
1. **No need to fork this repo. Just click on the button below and deploy it on Vercel in seconds.**

<a href="https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fsubham-maity%2FOctoConnect&showOptionalTeamCreation=false">![](https://vercel.com/button)</a>

2. **Give it a Repository Name and click on the Create button. That's it!**

![](https://private-user-images.githubusercontent.com/97989643/239226724-53627712-39d3-4ed0-8b41-c7a5738423be.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjg0NDI2NDY3LCJuYmYiOjE2ODQ0MjYxNjcsInBhdGgiOiIvOTc5ODk2NDMvMjM5MjI2NzI0LTUzNjI3NzEyLTM5ZDMtNGVkMC04YjQxLWM3YTU3Mzg0MjNiZS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwNTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDUxOFQxNjA5MjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xZjNmYjRjNjg0YjRlNzYyMDViOWVkOTg1YTE5ZGYxOTU1NDEyYTdlYzZkYzMwMmY0OGY5NzVlZjk2Nzc0NzQwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.D0WdwV3kbxueBPtlUNw-odIb-QbWPzsJfCvb31apoNU)


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

## Contributing

Contributions are always welcome! If you'd like to contribute to the project, please raise an issue before creating a pull request.

## Star the Repo if you liked it :)

