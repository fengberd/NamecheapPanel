:: The only way I can get this working is add it to both master and gh-pages...

call npm run build

:: Save changes

git stash
git checkout gh-pages

:: Get the date string

@ECHO OFF

FOR /F "skip=1 tokens=1-5" %%G IN ('WMIC Path Win32_LocalTime Get Day^,Hour^,Minute^,Month^,Year /Format:table') DO (
	IF "%%~K"=="" GOTO break
	SET _dd=%%G
	SET _hour=00%%H
	SET _minute=00%%I
	SET _mm=%%J
	SET _yyyy=%%K
)
:break

SET _hour=%_hour:~-2%
SET _minute=%_minute:~-2%

@ECHO ON

:: Deploy and commit

RMDIR /S /Q css js
DEL favicon.ico index.html

xcopy /E /Y dist\* .

git add .
git commit -m "Deploy: %_yyyy%-%_mm%-%_dd% %_hour%:%_minute%"
git push

:: Restore

git checkout master
git stash pop
