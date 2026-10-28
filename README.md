# rmit-idad-project-boilerplate
This is a boilerplate specifically designed for use in RMIT Digital Media's Interface Design and Development course. It contains a GitHub action workflow especially designed to assist in publishing multiple branches along with their commit histories. Upon forking this repo into your own profile, the gh-pages branch should chosen as the deployment source for GitHub pages. The published link will lead to a page indexing live versions of every current branch along with their commit history.

## Setting up your own project
### Forking
1. Make sure you have your own GitHub account and are signed in on this browser.
2. Click the Fork button. Make sure you're the owner and choose a new repository name.
3. ***VERY IMPORTANT*** make sure to uncheck the "Copy the main branch only" option.
4. Click the Create fork button.
### Creating Access Token
1. This process is best completed by opening your GitHub profile in two tabs at once.
2. In the first tab navigate to your forked repo, and then click settings in the upper bar.
3. Select "Secrets and variables" from the bar on the left (it's in Security and quality subsection), then click "Actions".
4. Click "New repository secret" button.
5. ***VERY IMPORTANT*** make sure you name this secret exactly: GIT_TOKEN
6. Now switch to the second tab and follow the steps at (with the notes below): https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token
7. Make sure to name it something relevant such as idad-auto-publish
8. Make sure the expiration is set to custom and select 28th of June
9. Under Repository Access choose "Only select repositories" and then choose the repo you just forked.
10. Under Permissions click the "Add permissions" button, then check the "Contents" permissions.
11. Click Generate token, double-check the details then click Generate token in the modal pop up.
12. Copy the generated token, then paste it into the "Secret" section back in the first tab, then click "Add secret"
13. Each token is unique, and only shown to you once, but you can generate multiple secrets, so if something goes wrong, delete the token and secret and do this process again from the start.
### Setting up pages and branching

## How this works
Whenever code is pushed to any branch (except gh-pages) it is copied over into the gh-pages branch, inside of a folder automatically named after its source. Currently only the main branch exists, so if you look at the gh-pages branch, it will contain a folder called "main" which contains all the code from the main branch. Any new branches should be created based on main, which will likewise update within the gh-pages branch with subsequent pushes.

---

This workflow is contained in the file located at .github/workflows/archive-branch-toPages.yml - please view for a more detail breakdown of this process.
