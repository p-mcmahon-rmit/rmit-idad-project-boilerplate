# rmit-idad-project-boilerplate
This is a a boilerplate specifically designed for use in RMIT Digital Media's Interface Design and Development course. It contains a GitHub action workflow especially designed to assist in publishing multiple branches along with their commit histories. Upon forking this repo into your own profile, the gh-pages branch should chosen as the deployment source for GitHub pages. The published link will lead to a page indexing live versions of every current branch along with their commit history.
## How this works
Whenever code is pushed to any branch (except gh-pages) it is copied over into the gh-pages branch, inside of a folder automatically named after its source. Currently only the main branch exists, so if you look at the gh-pages branch, it will contain a folder called "main" which contains all the code from the main branch. Any new branches should be created based on main, which will likewise update within the gh-pages branch with subsequent pushes.
---
This workflow is contained in the file located at .github/workflows/archive-branch-toPages.yml - please view for a more detail breakdown of this process.
