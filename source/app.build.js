({
    mainConfigFile: 'project/www/main.js',
    appDir: 'project',
    baseUrl: 'www',
    removeCombined: true,
    findNestedDependencies: true,
    dir: 'build',
    inlineText: true,
    stubModules : ['text'],
    optimizeCss: 'standard',
    modules: [
        {
            name: "main"
        }
    ]
})

