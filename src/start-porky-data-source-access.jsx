﻿/*    Start porky database access by launching this script from the InDesign scripts panel.        OS-X:    This JavaScript launches an AppleScript which launches a Terminal script which launches the php script with Apple's built-in php interpreter :-)        Windows:    This JavaScript launches a VisualBasic Script which launches a command line script which launches the php script with a cli-php interpreter which can be downloaded at http://windows.php.net/download/    Installation (Windows only):    Download the php zip package and unpack its content e.g. into "porky/src/bin/php-win/".    Inside this folder there's a file namend "php.ini-development" – duplicate and rename it into php.ini.    Be sure to uncomment the following settings in php.ini:    extension_dir = "ext"    extension=php_sockets.dll    extension=php_sqlite3.dll    extension=php_pdo_sqlite.dll    extension=php_xmlrpc.dll    ... and of course you have to load all dlls for extra database support, too!*/// Definition of relative paths// No changes necessary here// Use only local paths, no network paths allowedvar thisParentFolder = File($.fileName).parent;var thisRootFolder = File("~").fsName;var thisAbsolutePath = thisParentFolder.toString().replace("~", thisRootFolder);	thisAbsolutePath = Folder.decode(thisAbsolutePath).toString();	thisAbsolutePath = thisAbsolutePath.replace(/\\/, "/");var executeThis = "";if(File.fs == "Windows"){    alert("Attention Windows Users:\n\nThis launcher needs custom entries!\n\n-> download & install php binaries first\n-> setup php.ini correctly\n\nPlease edit this script for further installation details!");	var porkyExecutableFilePathWin = thisAbsolutePath + "/bin/php-win/porky.bat";    executeThis = new File(porkyExecutableFilePathWin);    executeThis.execute();}else if(File.fs == "Macintosh"){	var porkyExecutableFilePathMac = "'" + thisAbsolutePath + "/bin/porky-data-source-access.php" + "'";    executeThis = "tell application \"Terminal\"\r do script with command \"php " + porkyExecutableFilePathMac + "\"\r activate\r end tell";    app.doScript(executeThis, ScriptLanguage.applescriptLanguage);}