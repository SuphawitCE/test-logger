-include $(shell curl -sSL -o .build-harness "https://$(GH_TOKEN)@raw.githubusercontent.com/pomelofashion/build-harness/master/templates/Makefile.build-harness"; echo .build-harness)

GIT_SHORT_SHA := $(shell git log -1 --format="%h")
VERSION := $(shell git describe --tags --always --abbrev=0)
TIME_STAMP := $(shell /bin/date -u +"%Y-%m-%dT%H:%MZ")
REGISTRY_REGION := ap-southeast-1

# Make will get confused if there are files and folders with the names of
# recipes, unless we mark them as 'PHONY'.
.PHONY: lint test build

set-global-var: #set variables that will be used by Github Actions
	@echo >>$(GITHUB_ENV) GIT_SHORT_SHA=$(GIT_SHORT_SHA)
