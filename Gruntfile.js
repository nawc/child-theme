/**
 * Gruntfile for changelog, version bumps and git workflow.
 *
 * @author     Justin Hartman <code@justinhartman.co>
 * @copyright  Copyright (c) 2021, Justin Hartman <https://justinhartman.co>
 * @version    1.1.0
 */
module.exports = function(grunt) {
    grunt.loadNpmTasks('git-changelog');
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-git');
    grunt.loadNpmTasks('grunt-zip');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: ['pkg', 'git_changelog'],
                commit: false,
                createTag: false,
                push: false,
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
                    branch : 'main',
                    repo_url : 'https://github.com/nawc/child-theme',
                    file : 'docs/tags/<%= pkg.version %>.md',
                    template : 'docs/tags/templates/log_template.md',
                    commit_template : 'docs/tags/templates/log_commit_template.md',
                    // tag : false,
                    sections : [
                        {
                            'title': 'Bug Fixes',
                            'grep': '^fix'
                        },
                        {
                            'title': 'New Features',
                            'grep': '^feat'
                        },
                        {
                            'title': 'Documentation',
                            'grep': '^docs'
                        },
                        {
                            'title': 'Breaking Changes',
                            'grep': '^breaking'
                        },
                        {
                            'title': 'Refactored Code',
                            'grep': '^refactor'
                        },
                        {
                            'title': 'Style Changes',
                            'grep': '^style'
                        },
                        {
                            'title': 'Testing',
                            'grep': '^test'
                        },
                        {
                            'title': 'Core Updates',
                            'grep': '^chore'
                        },
                        {
                            'title': 'Yarn Updates',
                            'grep': '^yarn'
                        },
                        {
                            'title': 'Branches Merged',
                            'grep': '^Merge branch'
                        },
                        {
                            'title' : 'Pull Requests Merged',
                            'grep': '^Merge pull request'
                        }
                    ]
                }
            }
        },
        gitadd: {
            task: {
                files: {
                    src: ['.']
                }
            }
        },
        gitcommit: {
            your_target: {
                options: {
                    message: 'chore: Tag Version <%= pkg.version %>',
                    description: 'Add files for tag <%= pkg.version %>.',
                }
            }
        },
        gittag: {
            addtag: {
                options: {
                    tag: '<%= pkg.version %>',
                    message: 'chore(release): Release Version %VERSION%',
                }
            }
        },
        gitpush: {
            your_target: {
                options: {
                    remote: 'origin',
                    branch: 'main',
                    tags: true
                }
            }
        },
        zip: {
            'using-cwd': {
                cwd: 'src/',
                src: [
                    'src/archive-meetings.php',
                    'src/functions.php',
                    'src/style.css'
                ],
                dest: 'dist/nawc.zip'
            }
        }
    });
    grunt.registerTask('archive', ['zip']);
    grunt.registerTask('publish', ['gitadd', 'gitcommit', 'gittag', 'gitpush']);
    grunt.registerTask('full', ['git_changelog', 'archive', 'publish']);
    grunt.registerTask('patch', ['bump:patch', 'full']);
    grunt.registerTask('minor', ['bump:minor', 'full']);
    grunt.registerTask('major', ['bump:major', 'full']);
};
