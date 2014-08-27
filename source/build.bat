node r.js -o app.build.js
rd /s/q build\www\components
xcopy build\www ..\app /s /i /y
PAUSE