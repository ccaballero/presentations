const reload=require('grunt-contrib-livereload/lib/utils').livereloadSnippet
  , static=(connect,dir)=>{
        return connect.static(require('path').resolve(dir));
    }

module.exports=(grunt)=>{
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        connect:{
            options:{
                hostname:'localhost',
                port:9000,
                base:'presentation'
            },
            livereload:{
                options:{
                    middleware:(connect)=>{
                        return [
                            reload,
                            static(connect,'.tmp'),
                            static(connect,'presentation')
                        ];
                    }
                }
            },
        },
        watch:{
            mdpress:{
                files:[
                    'presentation.md',
                    'themes/{,*/}*.html',
                    'themes/{,*/}*.css'
                ],
                tasks:['shell:compile']
            },
            less:{
                files:[
                    'less/mytheme.less'
                ],
                tasks:['less:compile','shell:compile']
            },
            livereload:{
                files:[
                    'presentation/index.html',
                    'presentation/css/{,*/}*.css'
                ],
                tasks:['livereload']
            }
        },
        shell:{
            compile:{
                command:'mdpress presentation.md -s mytheme'
            }
        },
        less:{
            compile:{
                options:{
                    cleancss:true
                }
              , files:{
                    'themes/mytheme.css':'less/mytheme.less'
                }
            }
        }
    });

    grunt.renameTask('regarde','watch');
    grunt.registerTask('compile',['less:compile','shell:compile']);
    grunt.registerTask('default',['compile']);
    grunt.registerTask('serve',[
        'less:compile',
        'shell:compile',
        'livereload-start',
        'connect:livereload',
        'watch',
    ]);
};

