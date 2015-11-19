module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: __dirname + '/*.js',
            tasks: ['shell']
        }
    });

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('watch', ['watch']); //Has issues, shouldn't use
}