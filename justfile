# add node bin script path for recipes
export PATH := "./node_modules/.bin:" + env_var('PATH')

docsFolder := "docs"

# Default: display available recipes
_help:
    @just --list --unsorted

# Set up the dev environment
setup:
    #!/bin/sh
    set -e
    # setup git pre-commit hook if appropriate ($CI is "true" in GitHub workflows)
    PRE_COMMIT="scripts/pre-commit"
    if [[ -d .git && "$CI" != "true" ]]; then
        cp $PRE_COMMIT .git/hooks/
        echo ""
        echo "Git pre-commit hook setup from '$PRE_COMMIT'"
        echo ""
    fi
    echo ""
    echo "Installing Node modules if necessary..."
    echo ""
    npm install

# Run local dev server
dev *params:
    vitepress dev {{docsFolder}} {{params}}

# Build site
build *params:
    vitepress build {{docsFolder}} {{params}}

# Run local web server
serve *params:
    vitepress serve {{docsFolder}} {{params}}

# Publish the website (TODO)
publish:
    #!/bin/sh
    set -e
    echo "TODO!"

# Run code & content linting (TODO)
lint *params:
    echo "TODO: run linting"
