/**
 * Gruntfile for changelog and version bumps.
 *
 * @author     Justin Hartman <code@justinhartman.co>
 * @copyright  Copyright (c) 2021, Justin Hartman <https://justinhartman.co>
 * @version    1.0.0
 */
module.exports = function(grunt) {
    grunt.loadNpmTasks('git-changelog');
    grunt.loadNpmTasks('grunt-bump');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: ['pkg', 'git_changelog'],
                commit: false,
                commitMessage: 'chore: Tag Version %VERSION%',
                commitFiles: ['-a'],
                createTag: false,
                tagName: '%VERSION%',
                tagMessage: 'chore(release): %VERSION%',
                push: false,
                pushTo: 'origin',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                globalReplace: true,
                prereleaseName: false,
                metadata: '',
                regExp: false
            }
        },
        git_changelog: {
            main: {
                options: {
                    app_name : 'Changelog',
                    branch : "main",
                    repo_url : "https://github.com/nawc/child-theme",
                    file : "docs/tags/<%= pkg.version %>.md",
                    template : "docs/tags/templates/log_template.md",
                    commit_template : "docs/tags/templates/log_commit_template.md",
                    sections : [
                        {
                            "title": "Bug Fixes",
                            "grep": "^fix"
                        },
                        {
                            "title": "New Features",
                            "grep": "^feat"
                        },
                        {
                            "title": "Documentation",
                            "grep": "^docs"
                        },
                        {
                            "title": "Breaking Changes",
                            "grep": "^breaking"
                        },
                        {
                            "title": "Refactored Code",
                            "grep": "^refactor"
                        },
                        {
                            "title": "Style Changes",
                            "grep": "^style"
                        },
                        {
                            "title": "Testing",
                            "grep": "^test"
                        },
                        {
                            "title": "Core Updates",
                            "grep": "^chore"
                        },
                        {
                            "title": "Branches Merged",
                            "grep": "^Merge branch"
                        },
                        {
                            "title" : "Pull Requests Merged",
                            "grep": "^Merge pull request"
                        }
                    ]
                }
            }
        },
    });
    grunt.registerTask('default', ['bump', 'git_changelog']);
};
